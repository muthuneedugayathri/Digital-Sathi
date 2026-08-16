// Test broad / vague query retrieval scoring

import { searchKnowledgeBase } from '../src/services/retrievalService';
import { KNOWLEDGE_BASE_SEED } from '../src/data/knowledgeBaseData';

const broadQueries = [
  "how to use mobile phone",
  "what is smartphone",
  "phone help",
  "how to use phone",
  "మొబైల్ ఫోన్ ఎలా వాడాలి"
];

console.log("=== Testing Broad/Vague Queries ===\n");

for (const q of broadQueries) {
  const res = searchKnowledgeBase(q, KNOWLEDGE_BASE_SEED);
  console.log(`Query: "${q}"`);
  console.log(`  isGrounded: ${res.isGrounded ? '✅ YES' : '❌ NO (General AI)'}`);
  console.log(`  Top Score:  ${res.topScore}`);
  if (res.matches.length > 0) {
    console.log(`  Matched:    ${res.matches[0].id} - ${res.matches[0].title_en}`);
  } else {
    console.log(`  Matched:    NONE (General AI)`);
  }
  console.log('----------------------------------------------------');
}
