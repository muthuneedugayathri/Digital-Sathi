import { searchKnowledgeBase } from './src/services/retrievalService.ts';

const query = "how to do payments using contact";
const result = searchKnowledgeBase(query);
console.log(JSON.stringify(result, null, 2));
