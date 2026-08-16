# డిజిటల్ సాథి — Digital Sathi

**Rural Smartphone Digital Literacy AI Chatbot** — a bilingual (Telugu + English) RAG-powered chatbot that teaches first-time smartphone users how to navigate their phones safely.

Built for India's rural communities where digital literacy gaps lead to scam vulnerability and missed access to government services.

## Features

- 🤖 **AI Chat** — Ask questions in Telugu, English, or mixed; get grounded answers from a curated knowledge base
- 🛡️ **RAG Retrieval** — 75 knowledge base entries across 8 categories, scored and grounded before Gemini generates responses
- 🔒 **Scam Awareness** — Cyber helpline 1930 integration, UPI PIN safety warnings, fraud detection guidance
- 📚 **Topic Browser** — Browse all categories: Phone Navigation, Digital Payments, Scam Awareness, Govt Services, Learning, Communication, English Phrases, Digital Hygiene
- 🔊 **Text-to-Speech** — Listen to answers in Telugu or English
- 🎤 **Voice Input** — Speak your questions (Speech-to-Text)
- ⚡ **Smart Caching** — Dual-layer cache (Firestore + LocalStorage) with automatic invalidation when KB expands
- 🔧 **Admin Panel** — PIN-protected dashboard at `/#/admin` for reviewing ungrounded queries and safety content

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript |
| Styling | Tailwind CSS 4 |
| AI | Google Gemini 2.5 Flash |
| Database | Firebase Firestore (optional, falls back to LocalStorage) |
| Build | Vite 8 |
| Icons | Lucide React |

## Quick Start

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your API keys:
#   VITE_GEMINI_API_KEY=your_gemini_key
#   VITE_FIREBASE_PROJECT_ID=your_firebase_project (optional)

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_GEMINI_API_KEY` | Yes | Google Gemini API key for AI responses |
| `VITE_FIREBASE_PROJECT_ID` | No | Firebase project ID (enables Firestore caching) |
| `VITE_FIREBASE_API_KEY` | No | Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | No | Firebase auth domain |
| `VITE_FIREBASE_STORAGE_BUCKET` | No | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | No | Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | No | Firebase app ID |

> Without Firebase credentials, the app runs in **Local Cache Mode** using LocalStorage.
> Without a Gemini API key, the app uses an **offline fallback** that returns KB content directly.

## Project Structure

```
src/
├── App.tsx                    # Main app with hash routing
├── components/
│   ├── ChatWindow.tsx         # Chat interface with voice I/O
│   ├── ChatMessage.tsx        # Message bubble with badges & TTS
│   ├── CategoryBrowser.tsx    # Topic browser grid
│   ├── Navbar.tsx             # Header navigation
│   ├── AdminView.tsx          # Admin panel (PIN-gated)
│   ├── UngroundedDashboard.tsx # Review ungrounded queries
│   └── SafetyReviewView.tsx   # Safety content review
├── data/
│   └── knowledgeBaseData.ts   # 75 curated KB entries (bilingual)
├── services/
│   ├── retrievalService.ts    # RAG scoring engine & stopwords
│   ├── geminiService.ts       # Gemini API + offline fallback
│   ├── cacheService.ts        # Dual-layer cache with invalidation
│   ├── firebase.ts            # Firebase initialization
│   └── rateLimitService.ts    # Daily API usage limiter
├── types/
│   └── index.ts               # TypeScript interfaces
└── prompts/
    ├── system_prompt.md       # Gemini system instruction
    ├── index.ts               # Prompt exports
    └── CHANGELOG.md           # Prompt version history
```

## Knowledge Base Categories

| Category | Entries | Examples |
|----------|---------|---------|
| Phone Navigation | 17 | WiFi setup, Play Store, camera, storage management |
| Govt Services & Docs | 14 | DigiLocker, Aadhaar, e-Shram, welfare schemes |
| Communication | 9 | Gmail, video calls, online forms |
| Digital Payments | 8 | UPI, QR scan, recharge, bank balance |
| Digital Hygiene | 8 | Passwords, app permissions, phone cleanup |
| Scam Awareness | 7 | OTP fraud, fake SMS, cyber helpline 1930 |
| Learning Resources | 6 | YouTube, Google search, PDF reading |
| English Phrases | 6 | Common smartphone English terms explained in Telugu |

## Admin Panel

Access at `http://localhost:5173/#/admin` (default PIN: `1234`).

- **Ungrounded Dashboard** — Review queries that didn't match any KB entry
- **Safety Review** — Audit safety warnings across all KB entries

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build (TypeScript check + Vite build)
npm run preview  # Preview production build
npm run lint     # Run OxLint
```

## License

Private project.
