import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ShieldCheck, Lightbulb, Zap, User, Bot, ChevronDown, ChevronUp, AlertCircle, ListOrdered } from 'lucide-react';
import type { ChatMessage as ChatMessageType } from '../types';

interface ChatMessageProps {
  message: ChatMessageType;
}

/**
 * Helper to split dense response text into a short primary answer and detailed steps
 */
function splitAnswerAndSteps(text: string): { summary: string; stepsText: string | null } {
  if (!text) return { summary: '', stepsText: null };

  // Match headers like "\n\nదశలు:\n" or "\n\nSteps:\n"
  const headerMatch = text.match(/(\n\n|\n)(దశలు:|Steps:|చేయాల్సిన విధానం:|దశలవారీగా:)/i);
  if (headerMatch && headerMatch.index !== undefined) {
    const summary = text.substring(0, headerMatch.index).trim();
    const stepsText = text.substring(headerMatch.index).trim();
    if (summary && stepsText) {
      return { summary, stepsText };
    }
  }

  // Match numbered list starting at newline, e.g. "\n1. " or "\n\n1. "
  const numMatch = text.match(/(\n\n|\n)(1\.\s+)/);
  if (numMatch && numMatch.index !== undefined && numMatch.index > 10) {
    const summary = text.substring(0, numMatch.index).trim();
    const stepsText = text.substring(numMatch.index).trim();
    if (summary && stepsText) {
      return { summary, stepsText };
    }
  }

  return { summary: text, stepsText: null };
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSource, setShowSource] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [voiceWarning, setVoiceWarning] = useState<string | null>(null);

  useEffect(() => {
    if (voiceWarning) {
      const timer = setTimeout(() => setVoiceWarning(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [voiceWarning]);

  const { summary, stepsText } = isUser
    ? { summary: message.text, stepsText: null }
    : splitAnswerAndSteps(message.text);

  /**
   * Text-to-Speech audio reader with strict language detection & Telugu voice check
   */
  const handleSpeak = () => {
    setVoiceWarning(null);

    if (!('speechSynthesis' in window)) {
      setVoiceWarning("ఈ బ్రౌజర్‌లో వాయిస్ సేవలు మద్దతు ఇవ్వవు (Speech not supported).");
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel();

    const isTeluguText = /[\u0C00-\u0C7F]/.test(message.text) || message.language === 'telugu';
    const voices = window.speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(message.text);

    if (isTeluguText) {
      const teVoice = voices.find(v => v.lang.toLowerCase().includes('te'));
      if (teVoice) {
        utterance.voice = teVoice;
        utterance.lang = 'te-IN';
      } else {
        console.warn("No Telugu TTS voice found in browser voices:", voices);
        setVoiceWarning("ఈ పరికరంలో తెలుగు వాయిస్ లేదు (Telugu voice not installed on this device).");
        return;
      }
    } else {
      const enVoice = voices.find(v => v.lang.toLowerCase().includes('en-in') || v.lang.toLowerCase().includes('en-us'));
      if (enVoice) utterance.voice = enVoice;
      utterance.lang = 'en-IN';
    }

    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    setIsPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={`flex gap-2.5 sm:gap-3 my-3 animate-slide-up ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar with subtle depth shadow */}
      <div
        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 ${
          isUser
            ? 'bg-slate-700 text-slate-100 shadow-slate-300'
            : 'bg-gradient-to-tr from-teal-600 to-emerald-500 text-white shadow-emerald-200'
        }`}
      >
        {isUser ? <User className="w-4 h-4 sm:w-4.5 sm:h-4.5" /> : <Bot className="w-4 h-4 sm:w-4.5 sm:h-4.5" />}
      </div>

      {/* Tactile Chat Bubble */}
      <div
        className={`max-w-[88%] sm:max-w-[78%] rounded-2xl px-4 py-3.5 relative transition-all ${
          isUser
            ? 'bg-gradient-to-br from-teal-600 to-emerald-700 text-white rounded-tr-none shadow-[0_4px_14px_rgba(13,148,136,0.22)]'
            : 'bg-white/95 border border-emerald-100/90 text-slate-800 rounded-tl-none shadow-[0_4px_16px_rgba(15,23,42,0.05)]'
        }`}
      >
        {/* Integrated Top Corner Badges & Inline Listen Icon */}
        {!isUser && (
          <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-emerald-50/80">
            <div className="flex items-center gap-1.5 flex-wrap">
              {message.grounded ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  ఆధారితం / Grounded
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200/80">
                  <Lightbulb className="w-3 h-3 text-amber-600" />
                  సాధారణ ఏఐ / General AI
                </span>
              )}

              {message.isCached && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-teal-50 text-teal-700 border border-teal-200/60">
                  <Zap className="w-2.5 h-2.5 text-teal-600" />
                  Cached
                </span>
              )}
            </div>

            {/* Listen Button — high tap contrast, gentle hover state */}
            <button
              onClick={handleSpeak}
              className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all duration-150 flex items-center gap-1 active:scale-95 min-h-[32px] ${
                isPlaying
                  ? 'bg-rose-100 text-rose-700 border border-rose-200 animate-pulse'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/70 shadow-xs'
              }`}
              title="Listen to response in Telugu or English"
            >
              {isPlaying ? <VolumeX className="w-3.5 h-3.5 text-rose-600" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-600" />}
              <span className="text-[11px] font-medium">{isPlaying ? 'ఆపు' : 'వినండి'}</span>
            </button>
          </div>
        )}

        {/* Telugu Voice Missing Warning Toast */}
        {voiceWarning && (
          <div className="mb-2 p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-1.5 animate-slide-up">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{voiceWarning}</span>
          </div>
        )}

        {/* Primary Content Text — Short 1-2 sentence primary answer */}
        <div className="whitespace-pre-wrap text-sm sm:text-[15px] leading-relaxed font-normal tracking-normal">
          {summary}
        </div>

        {/* Collapsible Steps Section — Lighter Formatting */}
        {!isUser && stepsText && (
          <div className="mt-3 pt-2 border-t border-emerald-100/80">
            <button
              onClick={() => setShowSteps(!showSteps)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 text-xs font-semibold transition-all duration-150 active:scale-98"
            >
              <span className="flex items-center gap-1.5">
                <ListOrdered className="w-3.5 h-3.5 text-emerald-600" />
                <span>{showSteps ? 'దశలు దాచు / Hide steps' : 'పూర్తి దశలు చూడండి / Show step-by-step instructions'}</span>
              </span>
              {showSteps ? <ChevronUp className="w-4 h-4 text-emerald-600" /> : <ChevronDown className="w-4 h-4 text-emerald-600" />}
            </button>

            {showSteps && (
              <div className="mt-2 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap animate-slide-up shadow-inner">
                {stepsText}
              </div>
            )}
          </div>
        )}

        {/* Collapsible Source Citation — Low Contrast Receded Metadata */}
        {!isUser && message.matchedEntries && message.matchedEntries.length > 0 && (
          <div className="mt-2.5 pt-2 border-t border-slate-100/90">
            <button
              onClick={() => setShowSource(!showSource)}
              className="flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-emerald-700 transition-colors"
            >
              {showSource ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              <span>{showSource ? 'దాచు / Hide Source' : 'మూలం / View Source'}</span>
            </button>

            {showSource && (
              <div className="mt-1.5 p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 animate-slide-up">
                <span className="font-semibold text-slate-700">{message.matchedEntries[0].title_te}</span>
                <span className="text-slate-400 ml-1">({message.matchedEntries[0].title_en})</span>
              </div>
            )}
          </div>
        )}

        {/* Timestamp — Light, Receded */}
        <div className={`text-[10px] mt-1.5 text-right font-medium tracking-tight ${isUser ? 'text-teal-100/80' : 'text-slate-400'}`}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};
