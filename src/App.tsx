import { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { ChatWindow } from './components/ChatWindow';
import { CategoryBrowser } from './components/CategoryBrowser';
import { AdminView } from './components/AdminView';

import type { ChatMessage, RateLimitStatus, CategoryId } from './types';
import { getRateLimitStatus, incrementDailyUsage } from './services/rateLimitService';
import { checkChatCache, saveToChatCache, normalizeQuestion } from './services/cacheService';
import { searchKnowledgeBase } from './services/retrievalService';
import { generateGeminiAnswer } from './services/geminiService';

// ---------------------------------------------------------------
// Hash-based routing — no react-router needed.
// Admin panel accessible at: <your-url>/#/admin
// Normal users only ever see / (chat) or /#/topics.
// ---------------------------------------------------------------
function useHashRoute(): string {
  const [hash, setHash] = useState(window.location.hash || '#/');
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return hash;
}

export function App() {
  const hash = useHashRoute();
  const isAdminRoute = hash === '#/admin';

  const [activeTab, setActiveTab] = useState<'chat' | 'categories'>('chat');
  const [rateLimit, setRateLimit] = useState<RateLimitStatus>(getRateLimitStatus());
  const [isLoading, setIsLoading] = useState(false);

  // Track header height for dynamic chat viewport calculation
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const h = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${h}px`);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'bot',
      text: 'నమస్కారం! నేను డిజిటల్ సాథిని 🙏\nస్మార్ట్‌ఫోన్ వాడకం, UPI చెల్లింపుల భద్రత, ప్రభుత్వ యాప్‌లు లేదా డిజిటల్ సేవలకు సంబంధించి ఏ సందేహమైనా తెలుగు లేదా ఇంగ్లీష్‌ లో అడగండి.',
      language: 'telugu',
      grounded: true,
      timestamp: new Date()
    }
  ]);

  useEffect(() => {
    setRateLimit(getRateLimitStatus());
  }, []);

  /**
   * Handle sending a new message
   */
  const handleSendMessage = async (userText: string) => {
    if (!userText.trim() || isLoading) return;

    const currentStatus = getRateLimitStatus();
    if (currentStatus.isCapped) {
      setRateLimit(currentStatus);
      return;
    }

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // 1. CHECK CACHE FIRST (Firestore / LocalStorage)
      const cachedResult = await checkChatCache(userText);
      if (cachedResult) {
        const cachedBotMsg: ChatMessage = {
          id: `bot-cached-${Date.now()}`,
          sender: 'bot',
          text: cachedResult.answer,
          language: cachedResult.language,
          grounded: cachedResult.grounded,
          promptVersion: cachedResult.promptVersion,
          isCached: true,
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, cachedBotMsg]);
        setIsLoading(false);
        return;
      }

      // 2. RAG RETRIEVAL ENGINE
      const retrieval = searchKnowledgeBase(userText);

      // 3. CALL GEMINI RAG GENERATOR
      const geminiResult = await generateGeminiAnswer(userText, retrieval.matches);

      // 4. INCREMENT DAILY API USAGE
      const newRateLimit = incrementDailyUsage();
      setRateLimit(newRateLimit);

      // 5. CACHE RESPONSE
      await saveToChatCache({
        question: userText,
        question_normalized: normalizeQuestion(userText),
        answer: geminiResult.answer,
        language: geminiResult.language,
        grounded: geminiResult.grounded,
        promptVersion: geminiResult.promptVersion,
        category: retrieval.detectedCategory as CategoryId | undefined,
        matched_entry_ids: retrieval.matches.map(m => m.id)
      });

      // 6. RENDER BOT RESPONSE
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: geminiResult.answer,
        language: geminiResult.language,
        grounded: geminiResult.grounded,
        promptVersion: geminiResult.promptVersion,
        matchedEntries: retrieval.matches,
        isCached: false,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botMsg]);

    } catch (err) {
      console.error("Error processing query:", err);
      const errorMsg: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        sender: 'bot',
        text: 'సాంకేతిక కారణాల వల్ల సమాధానం పొందలేకపోయాము. దయచేసి కాసేపటి తర్వాత మళ్లీ ప్రయత్నించండి.',
        language: 'telugu',
        grounded: false,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Quick action from Category Browser to ask a question
   */
  const handleAskQuestionFromBrowser = (q: string) => {
    setActiveTab('chat');
    setTimeout(() => {
      handleSendMessage(q);
    }, 100);
  };

  // ---- Admin route — entirely separate view, no shared nav ----
  if (isAdminRoute) {
    return <AdminView />;
  }

  // ---- End-user view ----
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <div ref={headerRef}>
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          rateLimit={rateLimit}
        />
      </div>

      <main className="flex-1 overflow-hidden">
        {activeTab === 'chat' && (
          <ChatWindow
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            rateLimit={rateLimit}
            onBrowseTopics={() => setActiveTab('categories')}
          />
        )}

        {activeTab === 'categories' && (
          <CategoryBrowser onAskQuestion={handleAskQuestionFromBrowser} />
        )}
      </main>
    </div>
  );
}

export default App;
