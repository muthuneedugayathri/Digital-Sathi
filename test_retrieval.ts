import { searchKnowledgeBase } from './src/services/retrievalService.ts';

const queries = [
  "How to use mobile phone",
  "help me",
  "phone problems",
  "I need help",
  "what can this do"
];

console.log("--- FALSE-POSITIVE RETRIEVAL TEST ---\n");
for (const q of queries) {
  const result = searchKnowledgeBase(q);
  console.log(`Query: "${q}"`);
  console.log(`Grounded: ${result.isGrounded}`);
  if (result.isGrounded) {
    console.log(`Matched Entries: ${result.matches.map(m => m.id).join(', ')}`);
  } else {
    console.log(`Top Score: ${result.topScore} (Threshold not met)`);
  }
  console.log('---');
}
