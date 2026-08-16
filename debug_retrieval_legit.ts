import { searchKnowledgeBase, scoreEntry, tokenizeText } from './src/services/retrievalService.ts';
import { KNOWLEDGE_BASE_SEED } from './src/data/knowledgeBaseData.ts';

const queries = [
  "app ఎలా డౌన్లోడ్ చేయాలి",
  "phone స్టోరేజ్ ఫుల్ అయితే",
  "మొబైల్ రీఛార్జ్ ఎలా చేయాలి",
  "OTP విషయంలో help కావాలి"
];

for (const q of queries) {
  console.log(`\nQuery: "${q}"`);
  const tokens = tokenizeText(q);
  const scoredEntries = KNOWLEDGE_BASE_SEED.map(entry => ({
    id: entry.id,
    score: scoreEntry(tokens, entry, q)
  })).filter(e => e.score >= 12).sort((a,b) => b.score - a.score);
  console.log(scoredEntries);
}
