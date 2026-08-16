import { GoogleGenAI } from '@google/genai';
import type { KnowledgeEntry } from '../types';
import { SYSTEM_PROMPT, PROMPT_VERSION } from '../../prompts';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

export const isGeminiKeyAvailable = Boolean(API_KEY && API_KEY !== 'demo-api-key' && API_KEY !== 'your_gemini_api_key');

export interface GeminiResponse {
  answer: string;
  language: 'telugu' | 'english' | 'mixed';
  grounded: boolean;
  promptVersion: string;
}

/**
 * Analyze input language for logging & badge metadata
 */
export function detectLanguage(text: string): 'telugu' | 'english' | 'mixed' {
  const teluguCharCount = (text.match(/[\u0C00-\u0C7F]/g) || []).length;
  const englishCharCount = (text.match(/[a-zA-Z]/g) || []).length;

  if (teluguCharCount > 0 && englishCharCount > 3) {
    return 'mixed';
  } else if (teluguCharCount > 0) {
    return 'telugu';
  } else {
    return 'english';
  }
}

/**
 * Generate answer using Gemini API with RAG Grounding Context
 */
export async function generateGeminiAnswer(
  question: string,
  matchedEntries: KnowledgeEntry[]
): Promise<GeminiResponse> {
  const lang = detectLanguage(question);
  const isGrounded = matchedEntries.length > 0;

  // Build Context String from Matched KB Entries
  let contextText = '';
  if (isGrounded) {
    contextText = matchedEntries.map((e, idx) => `
[Knowledge Base Entry #${idx + 1}]
Category: ${e.category}
Title (Telugu): ${e.title_te}
Title (English): ${e.title_en}
Content (Telugu): ${e.content_te}
Content (English): ${e.content_en}
${e.steps_te ? `Steps (Telugu): ${e.steps_te.join(' -> ')}` : ''}
${e.steps_en ? `Steps (English): ${e.steps_en.join(' -> ')}` : ''}
${e.safetyWarning_te ? `Safety Warning (Telugu): ${e.safetyWarning_te}` : ''}
${e.safetyWarning_en ? `Safety Warning (English): ${e.safetyWarning_en}` : ''}
`).join('\n---\n');
  }

  const userPrompt = `
User Question: "${question}"

Grounding Knowledge Base Context:
${isGrounded ? contextText : "NO SPECIFIC KNOWLEDGE BASE MATCH FOUND. Answer using general digital literacy knowledge, but maintain strict safety rules."}

Instructions:
1. Detect user's language and respond naturally in that language (Telugu script for Telugu/Telugish inputs, English for English).
2. If Grounding Context is provided above, base your answer primarily on it.
3. Keep it within 3-5 sentences or simple step-by-step points.
4. Ensure all payment/UPI safety reminders and Cyber Helpline 1930 (for scams) are included if relevant.
`;

  // Call Gemini API if Key is available
  if (isGeminiKeyAvailable) {
    try {
      const ai = new GoogleGenAI({ apiKey: API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userPrompt,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.3, // Low temperature for factual RAG responses
          maxOutputTokens: 400
        }
      });

      const text = response.text?.trim() || '';
      if (text) {
        return {
          answer: text,
          language: lang,
          grounded: isGrounded,
          promptVersion: PROMPT_VERSION
        };
      }
    } catch (error) {
      console.warn("Gemini API call error, using intelligent local fallback:", error);
    }
  }

  // Local RAG Fallback Generator if API key is not set or network fails
  return generateLocalFallbackAnswer(question, matchedEntries, lang, isGrounded);
}

/**
 * Local Fallback RAG Answer Generator (Runs offline / keyless)
 */
function generateLocalFallbackAnswer(
  question: string,
  matchedEntries: KnowledgeEntry[],
  lang: 'telugu' | 'english' | 'mixed',
  isGrounded: boolean
): GeminiResponse {
  // 1. Off-topic check
  const offTopicWords = ['fever', 'medicine', 'doctor', 'fever', 'court', 'case', 'recipe', 'biryani'];
  const lowerQ = question.toLowerCase();
  if (offTopicWords.some(w => lowerQ.includes(w))) {
    return {
      answer: lang === 'english'
        ? "I am Digital Sathi, your smartphone digital literacy tutor. I can only assist with phone usage, UPI safety, apps, and online services. Please consult a specialist for health or legal matters."
        : "క్షమించండి, నేను డిజిటల్ సాథిని. స్మార్ట్‌ఫోన్, ఇంటర్నెట్, యాప్‌లు మరియు ఆన్‌లైన్ సేవల గురించి మాత్రమే సమాధానాలు చెప్పగలను. దయచేసి ఈ విషయంపై సంబంధిత నిపుణుడిని సంప్రదించండి.",
      language: lang,
      grounded: false,
      promptVersion: PROMPT_VERSION
    };
  }

  // 2. Grounded KB Match Fallback
  if (isGrounded && matchedEntries.length > 0) {
    const entry = matchedEntries[0];
    const isTe = lang === 'telugu' || lang === 'mixed' || (question.match(/[\u0C00-\u0C7F]/g) || []).length > 0;

    let answer = isTe ? entry.content_te : entry.content_en;

    if (isTe && entry.steps_te) {
      answer += '\n\nదశలు:\n' + entry.steps_te.map((s, i) => `${i + 1}. ${s}`).join('\n');
    } else if (!isTe && entry.steps_en) {
      answer += '\n\nSteps:\n' + entry.steps_en.map((s, i) => `${i + 1}. ${s}`).join('\n');
    }

    if (entry.safetyWarning_te && isTe) {
      answer += `\n\n${entry.safetyWarning_te}`;
    } else if (entry.safetyWarning_en && !isTe) {
      answer += `\n\n${entry.safetyWarning_en}`;
    }

    return {
      answer,
      language: isTe ? 'telugu' : 'english',
      grounded: true,
      promptVersion: PROMPT_VERSION
    };
  }

  // 3. Ungrounded General AI Fallback
  const isTe = lang === 'telugu' || (question.match(/[\u0C00-\u0C7F]/g) || []).length > 0;
  const fallbackAnswer = isTe
    ? `మీ ప్రశ్న: "${question}" గురించి ప్రస్తుతం నా వద్ద నిర్దిష్ట సమాచారం లేదు. దయచేసి సంబంధిత అధికారిక వెబ్‌సైట్ లేదా యాప్‌లో చూడండి.`
    : `Regarding your query "${question}": I don't have specific information on this right now. Please check the official app or website for accurate details.`;

  return {
    answer: fallbackAnswer,
    language: isTe ? 'telugu' : 'english',
    grounded: false,
    promptVersion: PROMPT_VERSION
  };
}
