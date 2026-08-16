import { checkChatCache, normalizeQuestion } from './src/services/cacheService.ts';
import { searchKnowledgeBase } from './src/services/retrievalService.ts';

async function testCacheStaleness() {
  const query = "how to do payments using contact";
  
  console.log("--- CACHE STALENESS AUTO-FIX TEST ---\n");
  
  // Create a fake stale entry in local storage
  // Note: it is marked grounded: false, but searchKnowledgeBase(query) will now return isGrounded: true
  const staleItem = {
    question: query,
    question_normalized: normalizeQuestion(query),
    answer: "I don't know how to do payments.",
    language: "english",
    grounded: false, 
    matched_entry_ids: [],
    createdAt: new Date().toISOString(),
    promptVersion: "v1.0"
  };
  
  // Mock localStorage for node environment
  class LocalStorageMock {
    private store: Record<string, string> = {};
    getItem(key: string) { return this.store[key] || null; }
    setItem(key: string, value: string) { this.store[key] = value.toString(); }
    removeItem(key: string) { delete this.store[key]; }
  }
  (globalThis as any).localStorage = new LocalStorageMock();
  
  // Inject stale item
  (globalThis as any).localStorage.setItem('digital_sathi_chat_cache_v2', JSON.stringify([staleItem]));
  console.log("1. INJECTED STALE CACHE ENTRY:");
  console.log(`   Question: "${staleItem.question}"`);
  console.log(`   Cached Answer: "${staleItem.answer}"`);
  console.log(`   Cached Grounded Flag: ${staleItem.grounded}`);
  
  console.log("\n2. RUNNING checkChatCache(query)...");
  const cacheHit = await checkChatCache(query);
  
  console.log("\n--- TEST RESULT ---");
  if (cacheHit) {
    console.log("❌ BUG: Returned the stale cache hit!");
    console.log(cacheHit);
  } else {
    console.log("✅ SUCCESS: cache invalidated automatically!");
    console.log("-> checkChatCache detected that searchKnowledgeBase now returns isGrounded: true, and rejected the stale ungrounded cache entry.");
    
    // Let's show what generateGeminiAnswer / searchKnowledgeBase actually returns now
    const retrieval = searchKnowledgeBase(query);
    console.log(`\nNew Grounded Status: ${retrieval.isGrounded}`);
    console.log(`New Matched Entry: ${retrieval.matches[0]?.id}`);
    console.log(`New Matched Title: ${retrieval.matches[0]?.title_en}`);
  }
}

testCacheStaleness();
