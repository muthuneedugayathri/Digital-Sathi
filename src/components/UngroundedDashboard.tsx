import React, { useEffect, useState } from 'react';
import { HelpCircle, RefreshCw, Sparkles } from 'lucide-react';
import { fetchUngroundedQueries } from '../services/cacheService';
import type { ChatCacheItem } from '../types';

export const UngroundedDashboard: React.FC = () => {
  const [ungroundedItems, setUngroundedItems] = useState<ChatCacheItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    const items = await fetchUngroundedQueries();
    setUngroundedItems(items);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="glass-panel p-6 rounded-3xl mb-6 border-amber-200 bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-2xl">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold">
                ఆధారపడని ప్రశ్నల సమీక్ష • Ungrounded Queries Admin Dashboard
              </h2>
              <p className="text-amber-100 text-xs sm:text-sm">
                జ్ఞాన భాండాగారంలో లేని ప్రశ్నలు (Questions answered by general AI fallback). Review to expand KB.
              </p>
            </div>
          </div>

          <button
            onClick={loadData}
            className="p-2.5 bg-white/20 hover:bg-white/30 rounded-xl transition-all text-white"
            title="Refresh list"
          >
            <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="p-8 text-center text-slate-500 font-medium">
          డేటా సేకరిస్తోంది... (Loading ungrounded logs...)
        </div>
      ) : ungroundedItems.length === 0 ? (
        <div className="glass-panel p-8 text-center rounded-3xl bg-white text-slate-600">
          <Sparkles className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
          <h3 className="font-bold text-lg text-slate-800">నోటిఫికేషన్: ఆధారపడని ప్రశ్నలు లేవు!</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
            All recent user questions matched knowledge base entries! Any ungrounded fallback questions asked by users will automatically appear here for manual review.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            సమీక్షించాల్సిన ప్రశ్నలు ({ungroundedItems.length} Ungrounded Queries Logged)
          </div>

          {ungroundedItems.map((item, idx) => (
            <div
              key={item.id || idx}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    ⚠️ Grounded: False
                  </span>
                  <span className="font-semibold text-indigo-700 bg-indigo-50 px-2 py-1 rounded-md border border-indigo-100">
                    Prompt: {item.promptVersion || 'v1.4'}
                  </span>
                </div>
                <span>
                  {new Date(item.createdAt).toLocaleString()}
                </span>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  అడిగిన ప్రశ్న / User Question:
                </h4>
                <p className="text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200 mt-1 font-medium text-sm">
                  "{item.question}"
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-slate-600 text-xs mb-1">
                  ఏఐ అందించిన జవాబు / General AI Response:
                </h5>
                <p className="text-xs text-slate-700 bg-amber-50/50 p-3 rounded-xl border border-amber-100 leading-relaxed whitespace-pre-wrap">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
