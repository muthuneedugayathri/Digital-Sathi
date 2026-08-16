import { KNOWLEDGE_BASE_SEED } from './src/data/knowledgeBaseData.ts';
console.log(KNOWLEDGE_BASE_SEED.find(e => e.id === 'eng-03')?.title_en);
console.log(KNOWLEDGE_BASE_SEED.find(e => e.id === 'nav-05')?.title_en);
console.log(KNOWLEDGE_BASE_SEED.find(e => e.id === 'scam-01')?.title_en);
