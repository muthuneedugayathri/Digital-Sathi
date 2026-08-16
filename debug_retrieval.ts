import { searchKnowledgeBase, scoreEntry, tokenizeText } from './src/services/retrievalService.ts';
import { KNOWLEDGE_BASE_SEED } from './src/data/knowledgeBaseData.ts';

const queries = [
  "How to use mobile phone",
  "help me",
  "phone problems",
  "I need help",
  "what can this do"
];

for (const q of queries) {
  console.log(`\nQuery: "${q}"`);
  const tokens = tokenizeText(q);
  const scoredEntries = KNOWLEDGE_BASE_SEED.map(entry => ({
    id: entry.id,
    score: scoreEntry(tokens, entry, q)
  })).filter(e => e.score > 0).sort((a,b) => b.score - a.score);
  console.log(scoredEntries.slice(0, 3));
}
