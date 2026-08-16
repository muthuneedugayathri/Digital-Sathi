import { searchKnowledgeBase } from './src/services/retrievalService.ts';
import { generateGeminiAnswer } from './src/services/geminiService.ts';
import { normalizeQuestion } from './src/services/cacheService.ts';

async function testPromptVersioning() {
  const userText = "How do I reset my UPI PIN safely?";
  console.log(`Testing query: "${userText}"`);

  // 1. Retrieval
  const retrieval = searchKnowledgeBase(userText);
  console.log(`Knowledge Base matches found: ${retrieval.matches.length}`);

  // 2. Generation
  const geminiResult = await generateGeminiAnswer(userText, retrieval.matches);
  console.log(`\nAnswer generated:`);
  console.log(geminiResult.answer);

  // 3. Object to be saved to Cache (Firestore / LocalStorage)
  const cacheObject = {
    question: userText,
    question_normalized: normalizeQuestion(userText),
    answer: geminiResult.answer,
    language: geminiResult.language,
    grounded: geminiResult.grounded,
    promptVersion: geminiResult.promptVersion,
    category: retrieval.detectedCategory,
    matched_entry_ids: retrieval.matches.map(m => m.id)
  };

  console.log("\n--- EXACT JSON OBJECT SAVED TO CACHE/FIRESTORE ---");
  console.log(JSON.stringify(cacheObject, null, 2));
  console.log("--------------------------------------------------");
}

testPromptVersioning();
