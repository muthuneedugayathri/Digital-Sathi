import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, Sparkles, AlertTriangle, ShieldCheck, BookOpen, Bot } from 'lucide-react';
import type { ChatMessage as ChatMessageType, RateLimitStatus } from '../types';
import { ChatMessage } from './ChatMessage';

interface ChatWindowProps {
  messages: ChatMessageType[];
  onSendMessage: (text: string) => void;
  isLoading: boolean;
  rateLimit: RateLimitStatus;
  onBrowseTopics?: () => void;
}

const SUGGESTED_PROMPTS = [
  "ఈమెయిల్ (Gmail) అకౌంట్ ఎలా తయారు చేయాలి? / How to set up an email account?",
  "ఈమెయిల్ ఎలా పంపాలి & చదవాలి? / How to use email?",
  "AP సంక్షేమ పథకాలు (Amma Vodi / Vidya Deevena) ఎలా చూడాలి?",
  "Play Store నుండి యాప్స్ సురక్షితంగా ఎలా డౌన్‌లోడ్ చేయాలి?",
  "గూగుల్ ట్రాన్స్‌లేట్ కెమెరాతో ఇంగ్లీష్‌ను తెలుగులోకి ఎలా మార్చాలి?",
  "వాట్సాప్ లో వీడియో కాల్ (Video Call) ఎలా చేయాలి?"
];

export const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  onSendMessage,
  isLoading,
  rateLimit,
  onBrowseTopics
}) => {
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading || rateLimit.isCapped) return;

    setInput('');
    onSendMessage(trimmedInput);
  };

  /**
   * Voice Input (Speech-to-Text) using Web Speech Recognition API
   */
  const toggleSpeechRecognition = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("ఈ బ్రౌజర్‌లో వాయిస్ టైపింగ్ మద్దతు లేదు. దయచేసి టైప్ చేయండి (Speech recognition is not supported in your browser).");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'te-IN';

      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognition.start();
    } catch (err) {
      console.warn("Speech recognition error:", err);
      setIsListening(false);
    }
  };

  return (
    <div className="flex flex-col chat-viewport max-w-4xl mx-auto px-2.5 sm:px-4 py-2">
      {/* Chat Messages Container */}
      <div className="flex-1 overflow-y-auto pr-1 sm:pr-2 space-y-2.5">
        {/* Welcome Card — Empty State */}
        {messages.length <= 1 && (
          <div className="glass-panel p-5 sm:p-6 rounded-3xl border-emerald-200/90 bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 my-3 card-elevated animate-slide-up">
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="p-3 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-500 text-white shadow-md shadow-emerald-200/80">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-snug">
                  నమస్కారం! నేను మీ డిజిటల్ సాథిని 🙏
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Welcome to Digital Sathi! Your patient guide for smartphone usage, UPI safety & government apps.
                </p>
              </div>
            </div>

            {/* Quick Safety Pledge — Warm Amber/Golden Safety Touch */}
            <div className="bg-amber-50/90 p-3.5 rounded-2xl border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5 mb-4 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-amber-950">భద్రతా సూచన / Safety Guarantee:</strong> మీ <strong>UPI PIN</strong> లేదా <strong>OTP</strong> నంబర్‌లను ఎవరికీ చెప్పవద్దు. డిజిటల్ సాథి మీ బ్యాంకింగ్ వివరాలు ఎప్పుడూ అడగదు.
              </div>
            </div>

            {/* Suggested Question Pills */}
            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-500 mb-2.5 uppercase tracking-wider">
                ఈ క్రింది ప్రశ్నల పై నొక్కి అడగండి / Tap to ask:
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                {SUGGESTED_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (isLoading || rateLimit.isCapped) return;
                      setInput('');
                      onSendMessage(prompt);
                    }}
                    disabled={rateLimit.isCapped || isLoading}
                    className="prompt-pill text-xs text-slate-700 bg-white hover:bg-emerald-50/80 border border-slate-200/90 hover:border-emerald-300 px-3.5 py-2.5 rounded-xl transition-all duration-150 font-medium text-left shadow-xs hover:shadow-md active:scale-98 flex items-center gap-2 group"
                  >
                    <span className="text-emerald-600 transition-transform group-hover:scale-110">💡</span>
                    <span>{prompt}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Browse Topics CTA */}
            {onBrowseTopics && (
              <div className="mt-5 pt-3.5 border-t border-emerald-100/80">
                <button
                  type="button"
                  onClick={onBrowseTopics}
                  id="browse-topics-btn"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border-2 border-dashed border-teal-300 text-teal-800 hover:bg-teal-50/80 transition-all duration-150 text-sm font-semibold active:scale-98"
                >
                  <BookOpen className="w-4.5 h-4.5 text-teal-600" />
                  అన్ని విషయాలు చూడండి / Browse All Topics
                </button>
              </div>
            )}
          </div>
        )}

        {/* Render Chat Messages */}
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {/* Natural Animated Typing Indicator while Waiting */}
        {isLoading && (
          <div className="flex gap-2.5 sm:gap-3 my-3 animate-slide-up">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Bot className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </div>
            <div className="bg-white/95 border border-emerald-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-[0_4px_16px_rgba(15,23,42,0.05)] flex items-center gap-3">
              <div className="flex items-center gap-1.5 py-1">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 typing-dot-1" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 typing-dot-2" />
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600 typing-dot-3" />
              </div>
              <span className="text-xs text-slate-500 font-medium">
                డిజిటల్ సాథి ఆలోచిస్తోంది... (Generating answer)
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Rate Limit Alert Banner if Quota Capped */}
      {rateLimit.isCapped && (
        <div className="bg-amber-50/90 border border-amber-200 text-amber-900 p-3.5 rounded-2xl my-2 flex items-center gap-3 text-xs sm:text-sm shadow-sm animate-slide-up">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <div className="leading-relaxed">
            <strong className="text-amber-950">ఈ రోజు ఉచిత పరిమితి ముగిసింది / Daily Limit Reached:</strong>
            <br />
            ఈ రోజుకు ప్రత్యక్ష ప్రశ్నల పరిమితి ముగిసింది. రేపు మళ్లీ ప్రయత్నించండి లేదా పైనున్న <strong>"విషయాలు / Topics"</strong> లో సేవ్ చేసిన సమాధానాలు చదవండి!
          </div>
        </div>
      )}

      {/* Input Box Form — High Contrast Elevated Focus Container */}
      <form onSubmit={handleSubmit} className="mt-2 pt-2 border-t border-emerald-100/60 input-bar-safe">
        <div className="glass-panel p-2 rounded-2xl flex items-center gap-2 border-teal-300/80 shadow-lg focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100 transition-all">
          {/* Voice Input Button */}
          <button
            type="button"
            onClick={toggleSpeechRecognition}
            className={`p-3 rounded-xl transition-all duration-150 flex items-center justify-center active:scale-95 ${
              isListening
                ? 'bg-rose-600 text-white mic-recording shadow-md shadow-rose-200'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/60'
            }`}
            title="Speak your question in Telugu or English"
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          {/* Text Input Field */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={rateLimit.isCapped || isLoading}
            placeholder={
              rateLimit.isCapped
                ? "పరిమితి ముగిసింది. రేపు మళ్లీ ప్రయత్నించండి..."
                : isListening
                ? "మాట్లాడండి... (Listening...)"
                : "మీ ప్రశ్న ఇక్కడ టైప్ చేయండి (Type question in Telugu or English)..."
            }
            className="flex-1 bg-transparent px-3 py-2 text-sm sm:text-base text-slate-800 outline-none placeholder:text-slate-400 font-medium"
          />

          {/* Primary Action Send Button — Rich Teal Accent */}
          <button
            type="submit"
            disabled={!input.trim() || isLoading || rateLimit.isCapped}
            className={`p-3 rounded-xl flex items-center justify-center transition-all duration-150 active:scale-95 ${
              !input.trim() || isLoading || rateLimit.isCapped
                ? 'bg-slate-100 text-slate-400 border border-slate-200/60 cursor-not-allowed'
                : 'bg-gradient-to-tr from-teal-600 to-emerald-600 text-white shadow-md shadow-teal-900/20 hover:from-teal-700 hover:to-emerald-700'
            }`}
            title="Send Message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};
