import React, { useState } from 'react';
import { Search, ChevronRight, ShieldAlert, ArrowLeft, Send } from 'lucide-react';
import { CATEGORIES, KNOWLEDGE_BASE_SEED } from '../data/knowledgeBaseData';
import type { CategoryId, KnowledgeEntry } from '../types';

interface CategoryBrowserProps {
  onAskQuestion: (q: string) => void;
}

export const CategoryBrowser: React.FC<CategoryBrowserProps> = ({ onAskQuestion }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeEntry, setActiveEntry] = useState<KnowledgeEntry | null>(null);

  // Filter entries
  const filteredEntries = KNOWLEDGE_BASE_SEED.filter(entry => {
    const matchesCategory = selectedCategory ? entry.category === selectedCategory : true;
    const matchesSearch = searchQuery.trim() === '' ||
      entry.title_te.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.title_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.content_te.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.content_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Search Header */}
      <div className="glass-panel p-6 rounded-3xl mb-8 border-emerald-200 bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-2">
          డిజిటల్ విజ్ఞాన భాండాగారం • Digital Knowledge Base
        </h2>
        <p className="text-emerald-100 text-sm mb-4">
          8 రకాల వర్గాలలో 50+ కి పైగా ఫోన్ వాడకం మరియు భద్రతా సమాధానాలు చదవండి.
        </p>

        <div className="relative max-w-xl">
          <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="పాఠాలు లేదా సమాచారం వెతకండి (Search topics or keywords)..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white text-slate-800 outline-none text-sm font-medium shadow-inner placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            selectedCategory === null
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          అన్నీ / All Categories ({KNOWLEDGE_BASE_SEED.length})
        </button>

        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat.id
                ? 'bg-emerald-600 text-white shadow-md font-bold'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat.name_te} ({cat.name_en})
          </button>
        ))}
      </div>

      {/* Entry Details Modal / Drawer if Active */}
      {activeEntry ? (
        <div className="glass-panel p-6 rounded-3xl border-emerald-200 bg-white mb-8 shadow-xl animate-fadeIn">
          <button
            onClick={() => setActiveEntry(null)}
            className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 mb-4 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
          >
            <ArrowLeft className="w-4 h-4" />
            తిరిగి జాబితాకు / Back to List
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-emerald-800 uppercase">
              {activeEntry.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-1">
            {activeEntry.title_te}
          </h3>
          <h4 className="text-sm font-semibold text-slate-500 mb-4">
            {activeEntry.title_en}
          </h4>

          {/* Safety Warning if present */}
          {(activeEntry.safetyWarning_te || activeEntry.safetyWarning_en) && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded-2xl mb-4 text-xs sm:text-sm font-medium flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <div>{activeEntry.safetyWarning_te}</div>
                <div className="mt-1 text-rose-700">{activeEntry.safetyWarning_en}</div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <h5 className="font-bold text-slate-800 mb-2 border-b pb-1">తెలుగు వివరణ</h5>
              <p className="text-sm text-slate-700 leading-relaxed">{activeEntry.content_te}</p>
              {activeEntry.steps_te && (
                <ol className="list-decimal list-inside text-xs text-slate-700 mt-3 space-y-1">
                  {activeEntry.steps_te.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ol>
              )}
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <h5 className="font-bold text-slate-800 mb-2 border-b pb-1">English Explanation</h5>
              <p className="text-sm text-slate-700 leading-relaxed">{activeEntry.content_en}</p>
              {activeEntry.steps_en && (
                <ol className="list-decimal list-inside text-xs text-slate-700 mt-3 space-y-1">
                  {activeEntry.steps_en.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ol>
              )}
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={() => onAskQuestion(activeEntry.title_te)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-700"
            >
              <Send className="w-4 h-4" />
              ఈ ప్రశ్నను బోట్‌ను అడగండి / Ask Bot This Question
            </button>
          </div>
        </div>
      ) : (
        /* Entries Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredEntries.map(entry => (
            <div
              key={entry.id}
              onClick={() => setActiveEntry(entry)}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {entry.category.replace('_', ' ')}
                  </span>
                  {entry.safetyWarning_te && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-700 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3" /> Safety
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-slate-800 group-hover:text-emerald-700 transition-colors text-base mb-1">
                  {entry.title_te}
                </h3>
                <h4 className="text-xs text-slate-500 font-medium mb-3">
                  {entry.title_en}
                </h4>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {entry.content_te}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-600 group-hover:text-emerald-700">
                <span>పూర్తి వివరాలు చూడండి / View Details</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
