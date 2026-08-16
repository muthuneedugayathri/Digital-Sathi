export type CategoryId = 
  | 'navigation' 
  | 'payments' 
  | 'scam_awareness' 
  | 'gov_docs' 
  | 'learning' 
  | 'communication' 
  | 'english_phrases' 
  | 'digital_hygiene';

export interface CategoryInfo {
  id: CategoryId;
  name_te: string;
  name_en: string;
  icon: string;
  description_te: string;
  description_en: string;
  badgeColor: string;
}

export interface KnowledgeEntry {
  id: string;
  category: CategoryId;
  title_te: string;
  title_en: string;
  content_te: string;
  content_en: string;
  tags: string[];
  steps_te?: string[];
  steps_en?: string[];
  safetyWarning_te?: string;
  safetyWarning_en?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  language?: 'telugu' | 'english' | 'mixed';
  grounded?: boolean;
  promptVersion?: string;
  matchedEntries?: KnowledgeEntry[];
  category?: CategoryId;
  timestamp: Date;
  isCached?: boolean;
}

export interface ChatCacheItem {
  id?: string;
  question: string;
  question_normalized: string;
  answer: string;
  language: 'telugu' | 'english' | 'mixed';
  grounded: boolean;
  promptVersion?: string;
  category?: CategoryId;
  matched_entry_ids: string[];
  createdAt: string; // ISO string
}

export interface RateLimitStatus {
  dailyCount: number;
  maxLimit: number;
  remaining: number;
  isCapped: boolean;
  resetDate: string;
}
