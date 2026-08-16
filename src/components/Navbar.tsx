import React from 'react';
import { MessageSquare, BookOpen, Smartphone } from 'lucide-react';
import type { RateLimitStatus } from '../types';

interface NavbarProps {
  activeTab: 'chat' | 'categories';
  setActiveTab: (tab: 'chat' | 'categories') => void;
  rateLimit: RateLimitStatus;
  onBrowseTopics?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="flex items-center justify-between px-3 py-2 max-w-4xl mx-auto">
        {/* Logo — compact on mobile */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-100">
            <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <h1 className="text-base sm:text-lg font-bold text-slate-800 leading-tight truncate">
              డిజిటల్ సాథి <span className="text-emerald-600 font-medium text-sm hidden xs:inline">Digital Sathi</span>
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-400 leading-tight hidden sm:block">
              Rural Smartphone Learning AI
            </p>
          </div>
        </div>

        {/* Right side: nav tabs */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Nav Tabs — Chat and Topics */}
          <nav className="flex items-center bg-slate-100 p-1 rounded-xl" role="navigation" aria-label="Main navigation">
            <button
              id="nav-chat-tab"
              onClick={() => setActiveTab('chat')}
              aria-pressed={activeTab === 'chat'}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all text-sm font-medium min-h-[40px] touch-manipulation ${
                activeTab === 'chat'
                  ? 'bg-white text-emerald-700 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span className="hidden xs:inline">చాట్</span>
              <span className="hidden sm:inline"> / Chat</span>
            </button>

            <button
              id="nav-topics-tab"
              onClick={() => setActiveTab('categories')}
              aria-pressed={activeTab === 'categories'}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all text-sm font-medium min-h-[40px] touch-manipulation ${
                activeTab === 'categories'
                  ? 'bg-white text-emerald-700 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span className="hidden xs:inline">విషయాలు</span>
              <span className="hidden sm:inline"> / Topics</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
