import { searchKnowledgeBase } from './src/services/retrievalService.ts';

const testQueries = [
  "Amma Vodi scheme AP",
  "అమ్మ ఒడి పథకం డబ్బులు",
  "Vidya Deevena fee reimbursement",
  "ఆదరణ 3.0 పథకం",
  "Annadata Sukhibhava farmer support",
  "nbm.ap.gov.in status check",
  "How to set up an email account",
  "ఈమెయిల్ అకౌంట్ ఎలా తయారు చేయాలి",
  "How to use email in Gmail",
  "Chrome browser search tips",
  "Play Store safe app download",
  "WhatsApp video call guide",
  "Google Translate camera feature"
];

console.log("--- TESTING NEW AP SCHEMES & DIGITAL LITERACY QUERIES ---\n");
for (const q of testQueries) {
  const result = searchKnowledgeBase(q);
  console.log(`Query: "${q}"`);
  console.log(`Grounded: ${result.isGrounded}`);
  if (result.isGrounded && result.matches.length > 0) {
    console.log(`Matched ID: ${result.matches[0].id} - ${result.matches[0].title_te}`);
  } else {
    console.log(`Top Score: ${result.topScore} (UNGROUNDED)`);
  }
  console.log('---');
}
