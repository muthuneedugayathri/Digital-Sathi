// Test script for UPI setup queries and contact payment query

import { searchKnowledgeBase } from '../src/services/retrievalService';
import { KNOWLEDGE_BASE_SEED } from '../src/data/knowledgeBaseData';

const testQueries = [
  "యూపిఐ ఎలా సెట్ చేయాలి",
  "How to set up UPI on phone",
  "UPI PIN ఎలా సెట్ చేసుకోవాలి",
  "How to activate UPI PIN in GPay",
  "how to do payments using contact",
  "ఫోన్ కాంటాక్ట్స్ ద్వారా డబ్బులు ఎలా పంపాలి"
];

console.log("=== Testing Current Scores for UPI Setup & Contact Payment Queries ===\n");

for (const q of testQueries) {
  const res = searchKnowledgeBase(q, KNOWLEDGE_BASE_SEED);
  console.log(`Query: "${q}"`);
  console.log(`  isGrounded: ${res.isGrounded ? '✅ YES' : '❌ NO'}`);
  console.log(`  Top Score:  ${res.topScore}`);
  if (res.matches.length > 0) {
    console.log(`  Winner:     ${res.matches[0].id} - ${res.matches[0].title_en}`);
  } else {
    console.log(`  Winner:     NONE (Ungrounded / General AI)`);
  }
  console.log('----------------------------------------------------');
}
