import React, { useState } from 'react';
import { ShieldAlert, CreditCard, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { KNOWLEDGE_BASE_SEED } from '../data/knowledgeBaseData';

export const SafetyReviewView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'payments' | 'scam_awareness'>('payments');

  const paymentEntries = KNOWLEDGE_BASE_SEED.filter(e => e.category === 'payments');
  const scamEntries = KNOWLEDGE_BASE_SEED.filter(e => e.category === 'scam_awareness');

  const currentEntries = activeTab === 'payments' ? paymentEntries : scamEntries;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Banner */}
      <div className="glass-panel p-6 rounded-3xl mb-6 border-rose-200 bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-white/20 rounded-2xl">
            <ShieldCheck className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              ఆర్ధిక భద్రత సమీక్ష • Financial Safety KB Manual Review
            </h2>
            <p className="text-rose-100 text-xs sm:text-sm">
              Payments & Scam Awareness entries review module (PIN/OTP Warnings + Cyber Helpline 1930)
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setActiveTab('payments')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
            activeTab === 'payments'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <CreditCard className="w-5 h-5" />
          <span>డిజిటల్ చెల్లింపులు / Payments ({paymentEntries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('scam_awareness')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
            activeTab === 'scam_awareness'
              ? 'bg-rose-600 text-white shadow-lg shadow-rose-200'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <ShieldAlert className="w-5 h-5" />
          <span>మోసాల అవగాహన / Scam Awareness ({scamEntries.length})</span>
        </button>
      </div>

      {/* Mandatory Guidelines Checklist */}
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl mb-6 text-xs sm:text-sm text-amber-900 space-y-1">
        <h4 className="font-bold flex items-center gap-1.5 text-amber-950">
          <Lock className="w-4 h-4 text-amber-700" />
          Safety Constraints & Compliance Checklist:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Never give live transaction execution steps.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>PIN/OTP warning included: "Never share PIN to receive money".</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Cyber Fraud Hotline 1930 highlighted for scams.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Short step-by-step navigation only.</span>
          </div>
        </div>
      </div>

      {/* Entry Cards */}
      <div className="space-y-6">
        {currentEntries.map((entry, idx) => (
          <div
            key={entry.id}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                Entry #{idx + 1} ({entry.id})
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ✓ Verified Safety Item
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">{entry.title_te}</h3>
              <h4 className="text-sm font-semibold text-slate-500">{entry.title_en}</h4>
            </div>

            {/* Highlighted Safety Box */}
            {(entry.safetyWarning_te || entry.safetyWarning_en) && (
              <div className="bg-rose-50 border-2 border-rose-300 p-4 rounded-2xl text-xs sm:text-sm font-bold text-rose-900 flex items-start gap-3 shadow-inner">
                <ShieldAlert className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>{entry.safetyWarning_te}</div>
                  <div className="text-rose-800 font-medium">{entry.safetyWarning_en}</div>
                </div>
              </div>
            )}

            {/* Bilingual Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                <h5 className="font-bold text-slate-800 border-b pb-1 mb-2">తెలుగు పాఠం</h5>
                <p className="text-slate-700 mb-2 leading-relaxed">{entry.content_te}</p>
                {entry.steps_te && (
                  <ol className="list-decimal list-inside space-y-1 text-slate-700">
                    {entry.steps_te.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ol>
                )}
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                <h5 className="font-bold text-slate-800 border-b pb-1 mb-2">English Text</h5>
                <p className="text-slate-700 mb-2 leading-relaxed">{entry.content_en}</p>
                {entry.steps_en && (
                  <ol className="list-decimal list-inside space-y-1 text-slate-700">
                    {entry.steps_en.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
