# System Prompt Changelog

All notable changes to the Digital Sathi system prompt will be documented in this file.

## [v1.4] - 2026-08-06

### Changed
- **Refined Language Matching Rules**: Added explicit auto-detection instructions for user input language. If input is Telugu (Telugu script or Romanized Telugu like "PIN ela set cheyali"), respond in warm, natural Telugu script; for English input, respond in simple, clean English; for mixed code-switching, keep technical terms intact (UPI PIN, WhatsApp, App, Play Store).

### Why
- Users frequently ask questions in transliterated Telugu ("Telugish") or mixed code-switching. The prompt needed explicit guidance to consistently deliver output in Telugu script while retaining familiar digital terminology for clarity.

---

## [v1.3] - 2026-08-01

### Added
- **Scam Awareness Rules**: Mandated that for any scam, fraud, or phishing questions, the AI must explicitly mention India's Cyber Crime Helpline **1930**.

### Why
- Rural and first-time smartphone users are vulnerable targets for digital scams. Directing victims immediately to helpline 1930 ensures critical emergency action can be taken.

---

## [v1.2] - 2026-07-25

### Added
- **Payment & UPI Safety Constraints**: Added strict rules against facilitating live financial transactions (navigation/education only) and required safety reminders ("Never share your UPI PIN or OTP... You never need a PIN to receive money").

### Why
- Prevents potential liability and risk of live transaction mistakes, while educating novice users on universal UPI security principles to prevent financial fraud.

---

## [v1.1] - 2026-07-15

### Changed
- **Scope & Persona Redirection**: Transitioned system persona from general Telugu assistant to specialized smartphone, app, and digital literacy tutor ("Digital Sathi"). Added explicit redirection responses for off-topic queries (medical, legal, personal).

### Why
- Narrowed agent focus to digital literacy and online governance services, ensuring out-of-domain queries (such as medical diagnosis or legal counsel) are safely turned away.

---

## [v1.0] - 2026-07-01

### Added
- **Initial Baseline Prompt**: General-purpose AI assistant persona with basic Telugu language capabilities.

### Why
- Initial project prototype baseline.
