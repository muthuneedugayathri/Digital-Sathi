import { collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';
import type { ChatCacheItem } from '../types';
import { searchKnowledgeBase } from './retrievalService';

const LOCAL_CACHE_KEY = 'digital_sathi_chat_cache_v2';

/**
 * Normalize question string for consistent cache lookup
 */
export function normalizeQuestion(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^\w\s\u0C00-\u0C7F]/g, '')
    .trim();
}

/**
 * Clear local chat cache (useful when KB is expanded or cache needs reset)
 */
export function clearChatCache(): void {
  try {
    localStorage.removeItem(LOCAL_CACHE_KEY);
    console.log("🧹 LocalStorage Chat Cache cleared.");
  } catch (err) {
    console.warn("Error clearing local cache:", err);
  }
}

/**
 * Check Firestore or Local Cache for a previously answered question.
 *
 * CRITICAL FIX: If a cached item is tagged `grounded: false`, but the KB has
 * since been expanded such that `searchKnowledgeBase(rawQuestion)` NOW returns
 * `isGrounded: true`, we INVALIDATE the stale cache hit and return null so the
 * user gets the newly available grounded KB response!
 */
export async function checkChatCache(rawQuestion: string): Promise<ChatCacheItem | null> {
  const normQ = normalizeQuestion(rawQuestion);
  if (!normQ) return null;

  const isValidCacheItem = (item: ChatCacheItem): boolean => {
    if (!item.grounded) {
      const currentRetrieval = searchKnowledgeBase(rawQuestion);
      if (currentRetrieval.isGrounded) {
        console.log("🔄 Cache Invalidation: Previously ungrounded query now has a grounded KB match for:", normQ);
        return false; // Stale cache! Re-run RAG pipeline.
      }
    }
    return true;
  };

  // 1. Try Firestore if configured
  if (isFirebaseConfigured && db) {
    try {
      const qRef = collection(db, 'chat_cache');
      const qQuery = query(qRef, where('question_normalized', '==', normQ));
      const querySnapshot = await getDocs(qQuery);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const data = doc.data() as ChatCacheItem;
        if (isValidCacheItem(data)) {
          console.log("⚡ Firestore Cache Hit for:", normQ);
          return { ...data, id: doc.id };
        }
      }
    } catch (err) {
      console.warn("Firestore cache query failed, trying local fallback:", err);
    }
  }

  // 2. Try LocalStorage Fallback
  try {
    const rawLocal = localStorage.getItem(LOCAL_CACHE_KEY);
    if (rawLocal) {
      const localCache: ChatCacheItem[] = JSON.parse(rawLocal);
      const match = localCache.find(item => item.question_normalized === normQ);
      if (match) {
        if (isValidCacheItem(match)) {
          console.log("⚡ LocalStorage Cache Hit for:", normQ);
          return match;
        } else {
          // Remove invalid item from local cache
          const updatedCache = localCache.filter(c => c.question_normalized !== normQ);
          localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(updatedCache));
        }
      }
    }
  } catch (err) {
    console.warn("Local storage cache read error:", err);
  }

  return null;
}

/**
 * Save new Q&A result to Firestore and Local Cache
 */
export async function saveToChatCache(item: Omit<ChatCacheItem, 'id' | 'createdAt'>): Promise<void> {
  const fullItem: ChatCacheItem = {
    ...item,
    createdAt: new Date().toISOString()
  };

  // 1. Save to Firestore if available
  if (isFirebaseConfigured && db) {
    try {
      const qRef = collection(db, 'chat_cache');
      await addDoc(qRef, {
        ...fullItem,
        createdAt: serverTimestamp()
      });
      console.log("💾 Saved Q&A to Firestore Chat Cache (Grounded:", item.grounded, ")");
    } catch (err) {
      console.warn("Error saving to Firestore cache:", err);
    }
  }

  // 2. Always update LocalStorage cache
  try {
    const rawLocal = localStorage.getItem(LOCAL_CACHE_KEY);
    let localCache: ChatCacheItem[] = rawLocal ? JSON.parse(rawLocal) : [];
    localCache = localCache.filter(c => c.question_normalized !== item.question_normalized);
    localCache.unshift(fullItem);
    if (localCache.length > 100) localCache.pop();
    localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(localCache));
  } catch (err) {
    console.warn("Error saving to LocalStorage cache:", err);
  }
}

/**
 * Fetch all ungrounded queries for Admin Review Dashboard
 */
export async function fetchUngroundedQueries(): Promise<ChatCacheItem[]> {
  const ungroundedList: ChatCacheItem[] = [];

  if (isFirebaseConfigured && db) {
    try {
      const qRef = collection(db, 'chat_cache');
      const qQuery = query(qRef, where('grounded', '==', false));
      const querySnapshot = await getDocs(qQuery);
      querySnapshot.forEach(doc => {
        ungroundedList.push({ id: doc.id, ...doc.data() } as ChatCacheItem);
      });
      if (ungroundedList.length > 0) return ungroundedList;
    } catch (err) {
      console.warn("Firestore ungrounded fetch error:", err);
    }
  }

  try {
    const rawLocal = localStorage.getItem(LOCAL_CACHE_KEY);
    if (rawLocal) {
      const localCache: ChatCacheItem[] = JSON.parse(rawLocal);
      return localCache.filter(item => !item.grounded);
    }
  } catch (err) {
    console.warn("LocalStorage ungrounded fetch error:", err);
  }

  return ungroundedList;
}
