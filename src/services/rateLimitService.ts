import type { RateLimitStatus } from '../types';

const MAX_DAILY_LIMIT = 25;
const STORAGE_PREFIX = 'digital_sathi_rate_limit_';

/**
 * Get current date string formatted as YYYY-MM-DD
 */
function getTodayKey(): string {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

/**
 * Fetch current rate limit status for today
 */
export function getRateLimitStatus(): RateLimitStatus {
  const dateKey = getTodayKey();
  const storageKey = `${STORAGE_PREFIX}${dateKey}`;
  const storedValue = localStorage.getItem(storageKey);
  
  const dailyCount = storedValue ? parseInt(storedValue, 10) : 0;
  const remaining = Math.max(0, MAX_DAILY_LIMIT - dailyCount);
  const isCapped = dailyCount >= MAX_DAILY_LIMIT;

  // Calculate tomorrow's reset date label
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const resetDate = tomorrow.toLocaleDateString();

  return {
    dailyCount,
    maxLimit: MAX_DAILY_LIMIT,
    remaining,
    isCapped,
    resetDate
  };
}

/**
 * Increment daily API usage count
 */
export function incrementDailyUsage(): RateLimitStatus {
  const status = getRateLimitStatus();
  if (status.isCapped) return status;

  const dateKey = getTodayKey();
  const storageKey = `${STORAGE_PREFIX}${dateKey}`;
  const newCount = status.dailyCount + 1;
  
  localStorage.setItem(storageKey, newCount.toString());

  return getRateLimitStatus();
}

/**
 * Clear older rate limit keys to keep localStorage clean
 */
export function cleanupRateLimitStorage(): void {
  const todayKey = getTodayKey();
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(STORAGE_PREFIX) && !key.endsWith(todayKey)) {
      localStorage.removeItem(key);
    }
  }
}
