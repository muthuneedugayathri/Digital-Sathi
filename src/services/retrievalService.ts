import type { KnowledgeEntry } from '../types';
import { KNOWLEDGE_BASE_SEED } from '../data/knowledgeBaseData';

export interface RetrievalResult {
  matches: KnowledgeEntry[];
  topScore: number;
  isGrounded: boolean;
  detectedCategory?: string;
}

// ============================================================
// MINIMUM THRESHOLD: A match must score at least this many
// points to be treated as grounded retrieval context.
// Set to 22 — chosen to require strong overlap (multiple matches in title/tags)
// while still allowing specific Telugu queries with domain keywords to pass.
// This value is intentionally exported so it can be checked in tests.
// ============================================================
export const GROUNDING_THRESHOLD = 22;

// ============================================================
// TELUGU STOPWORDS: High-frequency Telugu functional words that
// appear in *any* sentence and must NOT contribute to scoring.
// These caused the critical bug: generic words like ఫోన్ (phone)
// and కాల్ (call) appeared in nav-07 tags AND in a scam query
// "నేను స్కామ్ అయ్యాను ఎవరికీ ఫోన్ చేయాలి", causing nav-07 to
// wrongly outscore scam-01 by 35 vs 22.
// ============================================================
const STOPWORDS = new Set<string>([
  // Telugu pronouns & subject markers
  'నాకు','నేను','మీరు','అతను','ఆమె','మనం','వారు','తాను','మీకు','వాళ్ళు',
  // Demonstratives & articles
  'ఒక','ఒకటి','అది','ఇది','అవి','ఇవి','ఆ','ఈ','అన్ని',
  // Question words (informational, too generic to indicate topic)
  'ఏం','ఏమి','ఎలా','ఎవరు','ఎవరికి','ఎవరికీ','ఎక్కడ','ఎప్పుడు','ఏది',
  // Postpositions / prepositions
  'మీద','పైన','కింద','లో','నుండి','తో','కి','కు','వల్ల','కోసం','కోసమని',
  // Common Telugu verb endings used in speech
  'వచ్చింది','వెళ్ళాలి','చేయాలి','చేయండి','చేసే','చేసి','చేసింది','చేయవచ్చు',
  'అయింది','అయ్యాను','అయితే','అయినా','అవుతుంది','అవుతాయి',
  'ఉంది','ఉంటుంది','ఉన్నది','ఉండాలి','ఉంటే',
  'పోయింది','పోతుంది','పొందవచ్చు',
  'వాడటం','వాడుకోండి','వాడవచ్చు',
  // Common conjunctions & adverbs
  'మళ్లీ','కూడా','మాత్రమే','అన్నీ','కొంచెం','అక్కడ','ఇక్కడ','ఆ','ఈ',
  'తర్వాత','ముందు','అప్పుడు','ఇప్పుడు','వెంటనే','దయచేసి','క్షమించండి',
  // English functional words
  'the','and','for','how','what','when','where','who','why','is','are',
  'this','that','with','from','have','you','your','our','can','do',
  'please','me','my','we','they','their','it','its','be','been'
]);

/**
 * Tokenize Telugu and English text into clean word tokens.
 */
export function tokenizeText(text: string): string[] {
  if (!text) return [];
  const cleaned = text
    .toLowerCase()
    .replace(/[^\w\s\u0C00-\u0C7F]/g, ' ')
    .trim();
  return cleaned.split(/\s+/).filter(t => t.length > 1);
}

/**
 * Score a single KB entry against the user query.
 *
 * Scoring rules (order matters for debugging):
 *  +15 — Exact full tag string found in the query (strongest signal)
 *  +6  — Partial overlap between a meaningful query token and a tag
 *  +5  — Exact word match between a query token and a title token
 *  +3  — Partial: query token is a substring of a title token (e.g. "ఫోన్" in "ఫోన్లో")
 *  +2  — Query token appears anywhere in entry content
 *
 * Stopwords are excluded from both sides of all comparisons.
 * Generic single-word tags that are in STOPWORDS are skipped entirely.
 */
export function scoreEntry(queryTokens: string[], entry: KnowledgeEntry, rawQuery: string): number {
  let score = 0;
  const lowerQuery = rawQuery.toLowerCase();

  // Precompute meaningful tokens (no stopwords, length > 2)
  const meaningfulTokens = queryTokens.filter(t => !STOPWORDS.has(t) && t.length > 2);

  // 1. Tag Matching
  const allTagTokens = new Set<string>();
  for (const tag of entry.tags) {
    const lowerTag = tag.toLowerCase();
    // Skip stopword-only or trivially short single-word tags
    if (STOPWORDS.has(lowerTag) || lowerTag.length <= 2) continue;

    if (lowerQuery.includes(lowerTag)) {
      score += 15;
    } else {
      lowerTag.split(/\s+/).forEach(t => allTagTokens.add(t));
    }
  }

  // Score partial tag matches once per unique query token
  for (const token of meaningfulTokens) {
    if (allTagTokens.has(token)) {
      score += 3;
    }
  }

  // 2. Title Matching
  const titleTokensEn = tokenizeText(entry.title_en).filter(t => !STOPWORDS.has(t) && t.length > 2);
  const titleTokensTe = tokenizeText(entry.title_te).filter(t => !STOPWORDS.has(t) && t.length > 2);
  const titleTokens = [...titleTokensEn, ...titleTokensTe];

  for (const qToken of meaningfulTokens) {
    for (const tToken of titleTokens) {
      if (qToken === tToken) {
        score += 5;
      } else if (qToken.length > 3 && tToken.includes(qToken)) {
        score += 3;
      }
    }
  }

  // 3. Content Matching
  const contentTokensEn = tokenizeText(entry.content_en).filter(t => !STOPWORDS.has(t));
  const contentTokensTe = tokenizeText(entry.content_te).filter(t => !STOPWORDS.has(t));
  const contentTokens = [...contentTokensEn, ...contentTokensTe];

  for (const qToken of meaningfulTokens) {
    if (contentTokens.includes(qToken)) {
      score += 2;
    }
  }

  return score;
}

/**
 * Search the knowledge base via RAG retrieval.
 *
 * Returns isGrounded:true only when the top score clears GROUNDING_THRESHOLD (12).
 * Below threshold → returns empty matches + isGrounded:false → Gemini answers
 * from general knowledge and the response is tagged "General AI" in the UI.
 */
export function searchKnowledgeBase(
  userQuery: string,
  customEntries: KnowledgeEntry[] = [],
  minScoreThreshold: number = GROUNDING_THRESHOLD
): RetrievalResult {
  const pool = customEntries.length > 0 ? customEntries : KNOWLEDGE_BASE_SEED;
  const tokens = tokenizeText(userQuery);

  if (tokens.length === 0) {
    return { matches: [], topScore: 0, isGrounded: false };
  }

  const scoredEntries = pool.map(entry => ({
    entry,
    score: scoreEntry(tokens, entry, userQuery)
  }));

  // Sort descending by score
  scoredEntries.sort((a, b) => b.score - a.score);

  const topScore = scoredEntries.length > 0 ? scoredEntries[0].score : 0;
  const topMatches = scoredEntries.filter(item => item.score >= minScoreThreshold);

  if (topMatches.length === 0) {
    // No entry clears the threshold → ungrounded; Gemini answers from general knowledge
    return {
      matches: [],
      topScore,
      isGrounded: false
    };
  }

  // Return top 3 entries above threshold as grounding context
  const matches = topMatches.slice(0, 3).map(item => item.entry);

  return {
    matches,
    topScore,
    isGrounded: true,
    detectedCategory: matches[0].category
  };
}
