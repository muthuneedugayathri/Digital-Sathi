import React, { useState } from 'react';
import { ShieldCheck, HelpCircle, Lock, LogOut, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { SafetyReviewView } from './SafetyReviewView';
import { UngroundedDashboard } from './UngroundedDashboard';

// ---------------------------------------------------------------
// Simple PIN gate — not real auth, just enough to stop accidental
// stumbling by an end user who somehow navigates to /#/admin.
// Change this value to your preferred 4-6 digit PIN.
// ---------------------------------------------------------------
const ADMIN_PIN = '1234';

type AdminTab = 'safety' | 'ungrounded';

export const AdminView: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('ungrounded');

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setIsUnlocked(true);
      setPinError(false);
      setPin('');
    } else {
      setPinError(true);
      setPin('');
      setTimeout(() => setPinError(false), 2000);
    }
  };

  // ---- Lock screen ----
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center mx-auto mb-4 shadow-xl">
              <Lock className="w-8 h-8 text-slate-300" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">Admin Panel</h1>
            <p className="text-slate-400 text-sm">Digital Sathi Builder Dashboard</p>
          </div>

          {/* PIN Form */}
          <form onSubmit={handlePinSubmit} className="space-y-4">
            <div className="relative">
              <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                Enter Admin PIN
              </label>
              <div className="relative">
                <input
                  id="admin-pin-input"
                  type={showPin ? 'text' : 'password'}
                  inputMode="numeric"
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="••••"
                  autoFocus
                  className={`w-full bg-slate-800 border-2 rounded-xl px-4 py-3.5 text-white text-center text-xl tracking-[0.5em] font-mono outline-none transition-all pr-12 ${
                    pinError
                      ? 'border-rose-500 animate-shake'
                      : 'border-slate-600 focus:border-emerald-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPin(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1"
                  tabIndex={-1}
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {pinError && (
                <p className="mt-2 text-rose-400 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> Incorrect PIN. Try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={pin.length < 4}
              id="admin-pin-submit"
              className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/30"
            >
              Unlock Admin Panel
            </button>
          </form>

          <p className="text-center text-slate-600 text-xs mt-6">
            <a href="/" className="hover:text-slate-400 underline transition-colors">
              ← Back to Digital Sathi
            </a>
          </p>
        </div>
      </div>
    );
  }

  // ---- Admin Dashboard (unlocked) ----
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 bg-slate-800 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sm leading-tight">Digital Sathi — Admin Panel</p>
              <p className="text-slate-400 text-[11px]">Builder view only • Not visible to end users</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Admin Tab Toggle */}
            <nav className="flex items-center bg-slate-700 p-0.5 rounded-lg text-xs font-medium">
              <button
                id="admin-tab-ungrounded"
                onClick={() => setActiveTab('ungrounded')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'ungrounded'
                    ? 'bg-white text-slate-800 shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                Admin Log
              </button>
              <button
                id="admin-tab-safety"
                onClick={() => setActiveTab('safety')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'safety'
                    ? 'bg-white text-slate-800 shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Safety Review
              </button>
            </nav>

            {/* Lock button */}
            <button
              id="admin-lock-btn"
              onClick={() => setIsUnlocked(false)}
              title="Lock admin panel"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-all text-xs font-medium"
            >
              <LogOut className="w-3.5 h-3.5" />
              Lock
            </button>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="max-w-6xl mx-auto">
        {activeTab === 'ungrounded' && <UngroundedDashboard />}
        {activeTab === 'safety' && <SafetyReviewView />}
      </main>
    </div>
  );
};
