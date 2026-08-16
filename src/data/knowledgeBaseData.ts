import type { CategoryInfo, KnowledgeEntry } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'navigation',
    name_te: 'ఫోన్ నావిగేషన్',
    name_en: 'Phone Navigation',
    icon: 'Smartphone',
    description_te: 'కాల్స్, వాట్సాప్, కెమెరా, అలారం, సెట్టింగ్స్ మరియు యాప్స్ వాడకం',
    description_en: 'Calls, WhatsApp, Camera, Alarm, Settings, and App usage',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300'
  },
  {
    id: 'payments',
    name_te: 'డిజిటల్ చెల్లింపులు',
    name_en: 'Digital Payments',
    icon: 'CreditCard',
    description_te: 'UPI, QR కోడ్ స్కాన్, బ్యాలెన్స్ చెక్ (సురక్షితమైన మార్గాలు మాత్రమే)',
    description_en: 'UPI apps, QR scanners, Balance check (Navigation & Safety only)',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    id: 'scam_awareness',
    name_te: 'మోసాల అవగాహన',
    name_en: 'Scam Awareness',
    icon: 'ShieldAlert',
    description_te: 'OTP మోసాలు, ఫేక్ మెసేజ్‌లు, కాల్స్ మరియు 1930 హెల్ప్‌లైన్',
    description_en: 'OTP scams, fake lottery SMS, bank fraud & Cyber Helpline 1930',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300'
  },
  {
    id: 'gov_docs',
    name_te: 'ప్రభుత్వ సేవలు & పత్రాలు',
    name_en: 'Govt Services & Docs',
    icon: 'FileText',
    description_te: 'ఆధార్, డిజిలాకర్, ఇ-శ్రమ్ కార్డ్ మరియు సంక్షేమ పథకాలు',
    description_en: 'Aadhaar, DigiLocker, e-Shram card and welfare scheme portals',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    id: 'learning',
    name_te: 'చదువు & సమాచారం',
    name_en: 'Learning Resources',
    icon: 'GraduationCap',
    description_te: 'యూట్యూబ్ చదువులు, గూగుల్ సెర్చ్, PDF పుస్తకాలు చదవడం',
    description_en: 'YouTube for study, Google search skills, reading PDFs',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300'
  },
  {
    id: 'communication',
    name_te: 'సమాచార మార్పిడి',
    name_en: 'Communication',
    icon: 'MessageSquare',
    description_te: 'ఈమెయిల్ (Gmail), వీడియో కాల్స్, ఆన్‌లైన్ ఫారాలు నింపడం',
    description_en: 'Gmail basics, video calling, filling online application forms',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300'
  },
  {
    id: 'english_phrases',
    name_te: 'ప్రాథమిక ఇంగ్లీష్ పదాలు',
    name_en: 'Basic English Phrases',
    icon: 'Languages',
    description_te: 'ఫోన్ వాడకంలో రోజూ కనిపించే ఇంగ్లీష్ పదాలు & అర్థాలు',
    description_en: 'Common everyday English terms used on smartphones',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300'
  },
  {
    id: 'digital_hygiene',
    name_te: 'ఫోన్ భద్రత & ప్రైవసీ',
    name_en: 'Digital Hygiene',
    icon: 'Lock',
    description_te: 'యాప్ పర్మిషన్లు, నకిలీ యాప్‌ల గుర్తింపు, స్క్రీన్ లాక్',
    description_en: 'App permissions, spotting fake apps, privacy & screen lock',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300'
  }
];

export const KNOWLEDGE_BASE_SEED: KnowledgeEntry[] = [
  // --- 1. PHONE NAVIGATION (7 entries) ---
  {
    id: 'nav-01',
    category: 'navigation',
    title_te: 'ఫోన్‌లో అలారం (Alarm) ఎలా పెట్టుకోవాలి?',
    title_en: 'How to set an Alarm on your phone?',
    content_te: 'స్మార్ట్‌ఫోన్‌లో ఉదయాన్నే మేల్కొనడానికి అలారం సెట్ చేయడం చాలా సులభం. మీ ఫోన్‌లోని "Clock" (గడియారం) యాప్ ఓపెన్ చేసి + గుర్తు నొక్కి సమయం ఎంచుకోవాలి.',
    content_en: 'Setting an alarm helps you wake up or get reminders on time. Open the Clock app, tap the + icon, set your desired time, and select repeat days.',
    tags: ['alarm', 'clock', 'time', 'reminder', 'అలారం', 'గడియారం', 'సమయం'],
    steps_te: [
      'ఫోన్ స్క్రీన్‌పై "Clock" (గడియారం) యాప్‌ను నొక్కండి.',
      'కింద లేదా పైన ఉన్న + (ప్లస్) గుర్తుపై క్లిక్ చేయండి.',
      'మీకు కావలసిన గంటలు మరియు నిమిషాలు (AM / PM) ఎంచుకోండి.',
      '"Save" లేదా గ్రీన్ మార్క్ నొక్కి అలారం ప్రారంభించండి.'
    ],
    steps_en: [
      'Open the "Clock" app on your smartphone.',
      'Tap the "+" icon at the bottom or top of the screen.',
      'Select the hour and minute (AM for morning, PM for evening).',
      'Tap "Save" to activate the alarm.'
    ]
  },
  {
    id: 'nav-02',
    category: 'navigation',
    title_te: 'వాట్సాప్ (WhatsApp) లో ఫోటోలు మరియు మెసేజ్‌లు ఎలా పంపాలి?',
    title_en: 'How to send photos and messages on WhatsApp?',
    content_te: 'వాట్సాప్‌లో మీ స్నేహితులు మరియు కుటుంబ సభ్యులకు ఉచితంగా మెసేజ్ లేదా ఫోటోలు పంపవచ్చు. చాట్ ఓపెన్ చేసి టైప్ చేయవచ్చు లేదా పేపర్ క్లిప్/కెమెరా గుర్తు నొక్కి ఫోటో ఎంచుకోవచ్చు.',
    content_en: 'WhatsApp allows sending text, audio, and photos easily. Open a contact chat, type your message, or tap the clip/camera icon to select photos.',
    tags: ['whatsapp', 'message', 'photo', 'chat', 'వాట్సాప్', 'మెసేజ్', 'ఫోటో'],
    steps_te: [
      'WhatsApp యాప్ ఓపెన్ చేసి, మీరు మాట్లాడాలనుకుంటున్న వ్యక్తి పేరుపై నొక్కండి.',
      'కింద ఉన్న "Type a message" పెట్టెలో టైప్ చేసి పచ్చటి విమానం గుర్తుపై నొక్కండి.',
      'ఫోటో పంపడానికి, కింద ఉన్న పేపర్ క్లిప్ (📎) లేదా కెమెరా గుర్తుపై నొక్కండి.',
      'గ్యాలరీ నుండి ఫోటో ఎంచుకుని Send నొక్కండి.'
    ],
    steps_en: [
      'Open WhatsApp and tap on the person\'s name in your chat list.',
      'Type your message in the box at the bottom and tap the green send arrow.',
      'To send a photo, tap the paperclip (📎) or camera icon next to the message box.',
      'Select a photo from your gallery and tap Send.'
    ]
  },
  {
    id: 'nav-03',
    category: 'navigation',
    title_te: 'ఫోన్ స్టోరేజ్ (Storage) నిండిపోతే ఏం చేయాలి?',
    title_en: 'What to do when phone storage is full?',
    content_te: 'ఫోన్ మెమరీ నిండిపోతే ఫోన్ స్లో అవుతుంది. వాట్సాప్‌లోని అనవసరమైన వీడియోలు డిలీట్ చేయడం లేదా Google Photos కి బ్యాకప్ చేయడం ద్వారా జాగ తయారుచేసుకోవచ్చు.',
    content_en: 'When memory is full, smartphones run slow. Delete unnecessary WhatsApp videos, clear app cache, or back up photos to Google Photos.',
    tags: ['storage', 'memory', 'clean', 'delete', 'ఫుల్', 'స్టోరేజ్', 'మెమరీ', 'డిలీట్'],
    steps_te: [
      'Settings > Storage కి వెళ్ళి ఏ యాప్ ఎక్కువ జాగ తీసుకుందో చూడండి.',
      'WhatsApp లో "Good Morning" వీడియోలు మరియు అనవసరమైన ఫైళ్లను డిలీట్ చేయండి.',
      'Google Photos యాప్‌లో Photos బ్యాకప్ చేసుకుని ఫోన్ నుండి ఉచితంగా ఖాళీ చేయండి.'
    ],
    steps_en: [
      'Go to Settings > Storage to check available free space.',
      'Delete large forward videos in WhatsApp chat media.',
      'Use Google Photos or Files by Google app to clear junk files safely.'
    ]
  },
  {
    id: 'nav-04',
    category: 'navigation',
    title_te: 'ఫోన్‌లో సైలెంట్ / వైబ్రేషన్ (Silent/Vibrate) ఎలా పెట్టాలి?',
    title_en: 'How to switch phone to Silent or Vibrate mode?',
    content_te: 'సభలు, గుడులు లేదా నిద్రపోయే సమయంలో ఫోన్ శబ్దం రాకుండా సైలెంట్ లేదా వైబ్రేట్ మోడ్‌లో పెట్టవచ్చు. ఫోన్ పక్కన ఉన్న వాల్యూమ్ తగ్గించే బటన్ నొక్కి సెట్ చేయవచ్చు.',
    content_en: 'To prevent loud ringing during meetings or sleep, switch to Silent or Vibrate using the physical volume down button or Quick Settings menu.',
    tags: ['silent', 'vibrate', 'sound', 'volume', 'సైలెంట్', 'వైబ్రేషన్', 'శబ్దం'],
    steps_te: [
      'ఫోన్ స్క్రీన్‌ను పైనుండి కిందకి స్వైప్ చేసి (Quick Settings) సూచికల ప్యానెల్ తెరిచి Sound/Vibrate చిహ్నంపై నొక్కండి.',
      'లేదా ఫోన్ పక్కన ఉన్న Volume Down బటన్ నొక్కి స్క్రీన్ పై వచ్చే బెల్ గుర్తును Silent కి మార్చండి.'
    ],
    steps_en: [
      'Swipe down from the top of your screen to open Quick Settings.',
      'Tap the Sound icon to cycle between Ringing, Vibrate, and Silent mode.',
      'Alternatively, press the Volume Down button on the side of your phone.'
    ]
  },
  {
    id: 'nav-05',
    category: 'navigation',
    title_te: 'ప్లే స్టోర్ (Play Store) నుండి కొత్త యాప్ ఎలా డౌన్‌లోడ్ చేయాలి?',
    title_en: 'How to download a new app from Google Play Store?',
    content_te: 'ఆండ్రాయిడ్ ఫోన్‌లో కొత్త యాప్‌లు లేదా గేమ్‌లను గూగుల్ ప్లే స్టోర్ (Google Play Store) నుండి మాత్రమే సురక్షితంగా డౌన్‌లోడ్ చేసుకోవాలి.',
    content_en: 'Download safe apps only from the official Google Play Store. Search the app name, check downloads/ratings, and tap Install.',
    tags: ['play store', 'download', 'app', 'install', 'ప్లే స్టోర్', 'యాప్', 'డౌన్‌లోడ్'],
    steps_te: [
      'ఫోన్‌లో "Play Store" యాప్ ఓపెన్ చేయండి.',
      'పైన ఉన్న Search బార్‌లో మీకు కావలసిన యాప్ పేరు (ఉదా: PhonePe, WhatsApp) టైప్ చేయండి.',
      'సరైన యాప్ పక్కన ఉన్న "Install" బటన్ నొక్కండి.',
      'డౌన్‌లోడ్ పూర్తయిన తర్వాత "Open" నొక్కి యాప్ వాడవచ్చు.'
    ],
    steps_en: [
      'Open the Google Play Store app on your smartphone.',
      'In the top search bar, type the name of the app (e.g., WhatsApp).',
      'Tap the official app from the search results and click "Install".',
      'Wait for installation to finish, then tap "Open".'
    ]
  },
  {
    id: 'nav-06',
    category: 'navigation',
    title_te: 'ఫోన్ కెమెరాతో మంచి ఫోటోలు మరియు వీడియోలు ఎలా తీయాలి?',
    title_en: 'How to take photos and videos using phone Camera?',
    content_te: 'కెమెరా యాప్‌తో మీ కుటుంబ సభ్యుల ఫోటోలు లేదా ముఖ్యమైన పత్రాల ఫోటోలు తీయవచ్చు. లెన్స్ శుభ్రంగా ఉంచి వెలుతురు వైపు నిలబడి క్లిక్ చేయాలి.',
    content_en: 'Use the Camera app to take photos of documents or memories. Ensure good lighting, clean camera lens, and tap the white circle button.',
    tags: ['camera', 'photo', 'video', 'picture', 'కెమెరా', 'ఫోటో', 'వీడియో'],
    steps_te: [
      'ఫోన్ స్క్రీన్ పై "Camera" యాప్ తెరవండి.',
      'Photo లేదా Video మోడ్ ఎంచుకోండి.',
      'స్క్రీన్ మధ్యలో ఉండే తెల్లటి రౌండ్ బటన్ నొక్కి ఫోటో తీయండి.'
    ],
    steps_en: [
      'Open the Camera app on your phone home screen.',
      'Select Photo or Video mode at the bottom.',
      'Focus on your subject and press the circular shutter button to capture.'
    ]
  },
  {
    id: 'nav-07',
    category: 'navigation',
    title_te: 'ఫోన్‌లో డయలర్ ఉపయోగించి కాల్స్ చేయడం ఎలా?',
    title_en: 'How to make phone calls using the Phone Dialer?',
    content_te: 'ఎవరికైనా కాల్ చేయడానికి పచ్చటి ఫోన్ చిహ్నం (Phone app) ఉపయోగించాలి. నంబర్ డయల్ చేసి సబ్మిట్ చేయవచ్చు లేదా Contacts లో వెతికి నేరుగా కాల్ చేయవచ్చు.',
    content_en: 'Making calls is simple. Open the green Phone app, enter the 10-digit mobile number, and press the green Call button.',
    // NOTE: Generic single-word Telugu tags like 'ఫోన్' and 'కాల్' removed.
    // They appear in ANY Telugu sentence and caused mis-scoring on scam queries.
    tags: ['phone dialer', 'make a call', 'dial number', 'phone calls', 'calling someone', 'కాల్ చేయడం', 'డయలర్', 'నంబర్ డయల్'],
    steps_te: [
      'పచ్చటి ఫోన్ బొమ్మ (Phone) యాప్‌ను తాకండి.',
      'Keypad తెరచి 10 అంకెల మొబైల్ నంబర్ టైప్ చేయండి.',
      'పచ్చటి కాల్ బటన్‌ను నొక్కి మాట్లాడండి.'
    ],
    steps_en: [
      'Tap the green Phone app icon.',
      'Open Keypad and enter the 10-digit mobile number.',
      'Tap the green Call icon to start the call.'
    ]
  },

  // --- 2. PAYMENTS (6 entries) --- (Navigation & Safety Only! Pin/OTP Reminders Included)
  {
    id: 'pay-01',
    category: 'payments',
    title_te: 'QR కోడ్ స్కాన్ చేసి డబ్బులు ఎలా పంపాలి? (UPI)',
    title_en: 'How to scan a QR Code for UPI payment navigation?',
    content_te: 'షాపుల్లో QR కోడ్ స్కాన్ చేసి సులభంగా చెల్లింపు చేయవచ్చు. అయితే UPI PIN టైప్ చేసేటప్పుడు పక్కన ఎవరూ చూడకుండా జాగ్రత్త పడాలి. గమనిక: డబ్బులు పంపేటప్పుడు మాత్రమే PIN అడుగుతుంది, డబ్బులు స్వీకరించడానికి (Receive) PIN అవసరం లేదు!',
    content_en: 'Scan vendor QR codes using PhonePe, Google Pay, or Paytm. Remember: UPI PIN is ONLY required to send money. You NEVER enter a PIN to receive money!',
    tags: ['upi', 'qr code', 'scan', 'gpay', 'phonepe', 'యుపిఐ', 'క్యూఆర్', 'స్కాన్', 'డబ్బులు'],
    safetyWarning_te: '⚠️ అత్యంత ముఖ్యం: UPI PIN మరియు OTP ని ఎవరితోనూ (బ్యాంక్ సిబ్బందితో సహా) పంచుకోవద్దు! డబ్బులు స్వీకరించడానికి PIN ఎంట్రీ అవసరం లేదు.',
    safetyWarning_en: '⚠️ CRITICAL SAFETY: Never share your UPI PIN or OTP with anyone. You NEVER need a PIN to receive money into your bank account!',
    steps_te: [
      'GPay లేదా PhonePe యాప్ ఓపెన్ చేసి "Scan QR" పై నొక్కండి.',
      'షాప్‌లోని QR కోడ్‌పై ఫోన్ కెమెరా చూపించండి.',
      'పంపాల్సిన మొత్తం (అమౌంట్) టైప్ చేయండి.',
      'మీ 4 లేదా 6 అంకెల రహస్య UPI PIN టైప్ చేసి గ్రీన్ టిక్ నొక్కండి.'
    ],
    steps_en: [
      'Open GPay, PhonePe, or BHIM app and select "Scan QR".',
      'Point your phone camera directly at the merchant QR code.',
      'Enter the correct payment amount.',
      'Enter your secret 4 or 6-digit UPI PIN securely.'
    ]
  },
  {
    id: 'pay-02',
    category: 'payments',
    title_te: 'UPI యాప్‌లో బ్యాంక్ బ్యాలెన్స్ (Bank Balance) ఎలా తనిఖీ చేయాలి?',
    title_en: 'How to check Bank Balance on UPI apps?',
    content_te: 'మీ బ్యాంక్ ఖాతాలో ఎంత డబ్బు ఉందో తెలుసుకోవడానికి మీ ఫోన్ యాప్ ఉపయోగించవచ్చు. "Check Balance" నొక్కి మీ రహస్య UPI PIN టైప్ చేస్తే బ్యాలెన్స్ కనిపిస్తుంది.',
    content_en: 'You can check your savings account balance safely at any time using PhonePe/Google Pay by entering your registered UPI PIN.',
    tags: ['balance', 'bank', 'check balance', 'upi pin', 'బ్యాలెన్స్', 'బ్యాంక్', 'ఖాతా'],
    safetyWarning_te: '🔒 రక్షణ సూచన: మీ బ్యాలెన్స్ చూసేటప్పుడు మీ UPI PIN ని ఇతరులకు కనబడకుండా టైప్ చేయండి.',
    safetyWarning_en: '🔒 Safety Tip: Keep your phone screen hidden while typing your secret UPI PIN.',
    steps_te: [
      'Google Pay లేదా PhonePe యాప్ ఓపెన్ చేయండి.',
      'కిందికి వచ్చి "Check Bank Balance" పై నొక్కండి.',
      'మీ బ్యాంక్ ఖాతాను ఎంచుకుని 4 లేదా 6 అంకెల UPI PIN ఎంటర్ చేయండి.',
      'స్క్రీన్ పై మీ మిగిలిన డబ్బు చూపిస్తుంది.'
    ],
    steps_en: [
      'Open Google Pay or PhonePe on your phone.',
      'Scroll down and tap "Check Bank Balance".',
      'Select your linked bank account.',
      'Enter your private UPI PIN to view your remaining balance.'
    ]
  },
  {
    id: 'pay-03',
    category: 'payments',
    title_te: 'UPI PIN అంటే ఏమిటి? దానిని ఎలా భద్రంగా ఉంచుకోవాలి?',
    title_en: 'What is a UPI PIN and how to keep it safe?',
    content_te: 'UPI PIN అనేది మీ ఎటిఎమ్ పిన్ లాంటి రహస్య సంఖ్య. దీని ద్వారానే మీ బ్యాంక్ నుండి డబ్బులు ఇతరులకు వెళ్తాయి. దీనిని ఎప్పుడూ కాగితంపై రాసి ఉంచకూడదు లేదా ఎవరికీ చెప్పకూడదు.',
    content_en: 'Your UPI PIN is a secret 4-6 digit passcode that authorizes all money transfers. Treat it like your ATM PIN—never disclose it to anyone.',
    tags: ['upi pin', 'pin safety', 'password', 'పిన్', 'సెక్యూరిటీ', 'రహస్యం', 'యూపిఐ', 'యూపిఐ పిన్', 'సెట్', 'సెట్ చేయాలి', 'సెట్ చేసుకోవాలి', 'set up upi', 'upi set up', 'activate upi', 'set upi pin', 'upi setup', 'యాక్టివేషన్', 'యాక్టివేట్', 'పిన్ తయారు'],
    safetyWarning_te: '⚠️ గుర్తుంచుకోండి: ఫోన్ కాల్ చేసి "మీ అకౌంట్ బ్లాక్ అయింది, PIN చెప్పండి" అని అడిగితే అది 100% నకిలీ మోసం!',
    safetyWarning_en: '⚠️ REMINDER: Bank officials will NEVER call to ask for your UPI PIN or OTP. Never reveal it.',
    steps_te: [
      'UPI PIN మీ మనస్సులో మాత్రమే గుర్తుంచుకోండి.',
      'ఎవరికైనా డబ్బు పంపేటప్పుడు మాత్రమే PIN ఎంటర్ చేయండి.',
      'మీ పిన్ ఇతరులకు తెలిస్తే వెంటనే యాప్‌లో "Change PIN" ఎంచుకుని మార్చండి.'
    ],
    steps_en: [
      'Memorize your UPI PIN—never write it down near your phone.',
      'Enter PIN only when you are sending money or checking balance.',
      'If you suspect someone saw your PIN, change it immediately in app settings.'
    ]
  },
  {
    id: 'pay-04',
    category: 'payments',
    title_te: 'మొబైల్ రీఛార్జ్ (Mobile Recharge) UPI ద్వారా ఎలా చేసుకోవాలి?',
    title_en: 'How to do Mobile Recharge using UPI apps?',
    content_te: 'దుకాణానికి వెళ్లకుండానే మీ ఫోన్ నుండి మీ మొబైల్ లేదా మీ కుటుంబ సభ్యుల మొబైల్ రీఛార్జ్ చేయవచ్చు. "Mobile Recharge" ఎంచుకుని నంబర్ కొట్టి ప్లాన్ ఎంచుకోవాలి.',
    content_en: 'Recharge prepaid mobile plans directly from home using Google Pay, PhonePe, or Paytm by choosing your operator and plan.',
    tags: ['recharge', 'mobile recharge', 'plans', 'రీఛార్జ్', 'మొబైల్', 'టాప్‌అప్'],
    safetyWarning_te: '⚠️ సూచన: రీఛార్జ్ చేసేముందు 10 అంకెల మొబైల్ నంబర్ సరైనదో కాదో 2 సార్లు తనిఖీ చేయండి.',
    safetyWarning_en: '⚠️ Tip: Always verify the 10-digit mobile number before confirming the payment.',
    steps_te: [
      'PhonePe / GPay యాప్‌లో "Mobile Recharge" బటన్‌పై నొక్కండి.',
      'మొబైల్ నంబర్ టైప్ చేయండి లేదా కాంటాక్ట్స్ నుండి ఎంచుకోండి.',
      'మీకు కావలసిన రీఛార్జ్ ప్లాన్ (ఉదా: ₹299 - 28 Days) ఎంచుకోండి.',
      'UPI PIN టైప్ చేసి చెల్లింపు పూర్తి చేయండి.'
    ],
    steps_en: [
      'Tap "Mobile Recharge" on PhonePe / GPay / Paytm.',
      'Enter the mobile number or pick from your contacts.',
      'Select the desired validity recharge pack.',
      'Enter your secret UPI PIN to complete recharge.'
    ]
  },
  {
    id: 'pay-05',
    category: 'payments',
    title_te: 'కరెంట్ బిల్లు (Electricity Bill) ఫోన్ నుండి ఎలా చెల్లించాలి?',
    title_en: 'How to pay Electricity Bill using UPI?',
    content_te: 'విద్యుత్ బిల్లుల లైనులో నిలబడకుండా మీ సర్వీసు నంబర్ (USC / Service Number) ద్వారా ఫోన్ నుండే బిల్లు చెల్లించవచ్చు.',
    content_en: 'Avoid standing in long bill payment lines by settling your electricity bill online via UPI with your Consumer/Service Number.',
    tags: ['electricity bill', 'power bill', 'current bill', 'కరెంట్ బిల్లు', 'విద్యుత్', 'బిల్లు'],
    safetyWarning_te: '🔒 ప్రైవసీ హెచ్చరిక: కరెంట్ కట్ చేస్తామని వచ్చే నకిలీ SMS / వాట్సాప్ లింక్‌లను ఎప్పుడూ నమ్మకండి!',
    safetyWarning_en: '🔒 Warning: Beware of fake SMS claiming your electricity will be disconnected tonight!',
    steps_te: [
      'UPI యాప్ తెరిచి "Electricity" విభాగాన్ని ఎంచుకోండి.',
      'మీ రాష్ట్రం & విద్యుత్ డిస్కం (ఉదా: TSSPDCL / APSPDCL) ఎంచుకోండి.',
      'మీ కరెంట్ బిల్లుపై ఉండే 8 లేదా 9 అంకెల సర్వీస్ నంబర్ నమోదు చేయండి.',
      'బిల్లు అమౌంట్ సరిచూసుకుని UPI PIN నొక్కి పే చేయండి.'
    ],
    steps_en: [
      'Open your UPI app and tap "Electricity" under Bill Payments.',
      'Select your electricity board (e.g. TSSPDCL / APSPDCL).',
      'Type your Service Number / Unique Service Code.',
      'Check the bill amount and authorize with your UPI PIN.'
    ]
  },
  {
    id: 'pay-06',
    category: 'payments',
    title_te: 'పొరపాటున తప్పుడు నంబర్‌కు డబ్బులు వెళ్తే ఏం చేయాలి?',
    title_en: 'What to do if money is accidentally sent to wrong UPI number?',
    content_te: 'పొరపాటున వేరే నంబర్‌కు UPI డబ్బులు పంపితే, కంగారు పడకుండా వెంటనే మీ బ్యాంక్ కస్టమర్ కేర్‌కు మరియు NPCI పోర్టల్ (npci.org.in) లో ఫిర్యాదు చేయాలి.',
    content_en: 'If you accidentally transfer funds to an incorrect UPI account, immediately contact your bank customer care and lodge a dispute on NPCI portal.',
    tags: ['wrong transaction', 'upi refund', 'bank complaint', 'తప్పుడు చెల్లింపు', 'ఫిర్యాదు', 'రిఫండ్'],
    safetyWarning_te: '⚠️ ముఖ్యం: గూగుల్‌లో దొరికే నకిలీ కస్టమర్ కేర్ నంబర్‌లకు కాల్ చేయకండి. మీ ఒరిజినల్ బ్యాంక్ పాస్‌బుక్ లేదా యాప్‌లోని నంబర్ మాత్రమే వాడండి.',
    safetyWarning_en: '⚠️ Alert: Do NOT call random customer care numbers found on Google search—they are often scammers!',
    steps_te: [
      'చెల్లింపు జరిగిన మెసేజ్ యొక్క UTR/Transaction ID ని నోట్ చేసుకోండి.',
      'వెంటనే మీ బ్యాంక్ అధికారిక హెల్ప్‌లైన్‌కు ఫోన్ చేసి లావాదేవీని బ్లాక్ చేయమనండి.',
      'NPCI వెబ్‌సైట్ (www.npci.org.in) లో "UPI Complaint" విభాగంలో వివరాలు నమోదు చేయండి.'
    ],
    steps_en: [
      'Note down the 12-digit UTR / Transaction reference ID.',
      'Call your official bank customer care number printed on your passbook immediately.',
      'File an online complaint at npci.org.in under UPI Disputes.'
    ]
  },

  // --- 3. SCAM AWARENESS (7 entries) --- (Cyber Helpline 1930 Highlighted!)
  {
    id: 'scam-01',
    category: 'scam_awareness',
    title_te: 'OTP మరియు సైబర్ మోసాల నుండి ఎలా రక్షించుకోవాలి?',
    title_en: 'How to protect yourself from OTP & Cyber Scams?',
    content_te: 'సైబర్ నేరగాళ్ళు బ్యాంక్ అధికారులుగా లేదా లక్కీ డ్రా విన్నర్లుగా ఫోన్ చేసి OTP చెప్పమని అడుగుతారు. OTP చెప్పడం అంటే మీ బ్యాంక్ ఖాతా తాళం చెవి చేతికి ఇవ్వడమే! భారతదేశ సైబర్ క్రైమ్ హెల్ప్‌లైన్ నంబర్ 1930.',
    content_en: 'Scammers pose as bank staff or lottery organizers asking for OTPs. Sharing an OTP gives complete access to your bank account. Report cyber financial fraud immediately to National Cyber Crime Helpline 1930.',
    // Added: 'స్కామ్', 'otp phone call', 'otp వచ్చింది' to capture natural-language scam reports
    tags: ['otp scam', 'fraud', 'bank scam', '1930', 'scam phone call', 'otp phone call', 'సైబర్ నేరం', 'ఓటిపి', 'మోసం', 'స్కామ్', 'otp వచ్చింది', 'హెల్ప్‌లైన్'],
    safetyWarning_te: '🚨 సైబర్ హెల్ప్‌లైన్: మోసపోయిన వెంటనే ఉచిత సంఖ్య 1930 కి కాల్ చేయండి లేదా cybercrime.gov.in లో ఫిర్యాదు చేయండి!',
    safetyWarning_en: '🚨 CYBER HELPLINE 1930: If scammed, immediately dial 1930 within 2 hours to freeze the fraud transfer!',
    steps_te: [
      'ఫోన్‌లో వచ్చిన OTP నంబర్‌ను ఎవరికీ (స్నేహితులకు కూడా) చెప్పకండి.',
      'బ్యాంక్ సిబ్బంది ఎప్పుడూ ఫోన్ చేసి OTP లేదా PIN అడగరని గుర్తుంచుకోండి.',
      'మోసం జరిగినట్లు అనుమానం వస్తే వెంటనే 1930 నంబర్‌కు కాల్ చేయండి.'
    ],
    steps_en: [
      'Never reveal your 6-digit OTP to anyone over phone call or SMS.',
      'Remember: Genuine bank managers never ask for passwords or OTPs.',
      'If money is stolen, dial 1930 within 1-2 hours for immediate bank freeze.'
    ]
  },
  {
    id: 'scam-02',
    category: 'scam_awareness',
    title_te: 'లాటరీ / ప్రైజ్ గెలుచుకున్నారు (Fake Lottery SMS) అనే మెసేజ్ వస్తే ఏం చేయాలి?',
    title_en: 'What to do upon receiving Fake Lottery/Prize SMS?',
    content_te: '"మీకు ₹25 లక్షల లాటరీ వచ్చింది, ఈ లింక్ క్లిక్ చేయండి" అని వచ్చే SMS లన్నీ 100% నకిలీ మోసాలు. ఆ లింక్‌లు క్లిక్ చేస్తే మీ ఫోన్ హ్యాక్ అయ్యే ప్రమాదం ఉంది.',
    content_en: 'SMS claims offering millions or cars in lotteries (like KBC lottery) are 100% fraudulent. Clicking those links can compromise your phone and banking info.',
    tags: ['lottery scam', 'prize sms', 'fake link', 'లాటరీ', 'నకిలీ మెసేజ్', 'ప్రైజ్', 'లింక్'],
    safetyWarning_te: '🛑 హెచ్చరిక: మీరు పాల్గొనని లాటరీలో మీకు బహుమతి రాదు. లింక్‌లు క్లిక్ చేయవద్దు!',
    safetyWarning_en: '🛑 Warning: You cannot win a lottery you never bought a ticket for. Delete such messages!',
    steps_te: [
      'అలాంటి మెసేజ్‌లలో ఉన్న బ్లూ కలర్ లింక్‌లను ఎప్పుడూ నొక్కవద్దు.',
      'ప్రాసెస్ ఫీజు రూపంలో కొంత డబ్బు పంపమంటే రూపాయి కూడా పంపకండి.',
      'ఆ నంబర్‌ను వాట్సాప్‌లో లేదా ఫోన్‌లో Block & Report చేయండి.'
    ],
    steps_en: [
      'Never tap suspicious web links received via SMS or WhatsApp.',
      'Never transfer "processing fees" or "tax money" to claim prizes.',
      'Block and report the sender number immediately.'
    ]
  },
  {
    id: 'scam-03',
    category: 'scam_awareness',
    title_te: 'నకిలీ బ్యాంక్ కాల్స్ (Fake Bank Calls / KYC Update Scam) ని ఎలా గుర్తించాలి?',
    title_en: 'How to spot Fake Bank KYC Update phone calls?',
    content_te: '"మీ బ్యాంక్ ఖాతా / ఎటిఎమ్ కార్డ్ బ్లాక్ అయింది, వెంటనే KYC అప్‌డేట్ చేయకపోతే అకౌంట్ పనిచేయదు" అని బెదిరిస్తూ కాల్స్ వస్తే నమ్మకండి. బ్యాంక్‌కి స్వయంగా వెళ్ళి సరిచూసుకోవాలి.',
    content_en: 'Scammers threaten that your bank account or ATM card will be blocked unless you update KYC over the phone. Real banks never update KYC via suspicious phone calls.',
    tags: ['kyc scam', 'bank call', 'atm block', 'కేవైసీ', 'బ్యాంక్ కాల్', 'బ్లాక్', 'నకిలీ'],
    safetyWarning_te: '⚠️ గుర్తుంచుకోండి: బ్యాంక్ ఖాతా సేవలు ఫోన్ ద్వారా నిలిపివేయబడవు. మీ బ్యాంక్ శాఖకు నేరుగా వెళ్లండి.',
    safetyWarning_en: '⚠️ Remember: Genuine account updates require visiting your local bank branch directly.',
    steps_te: [
      'ఫోన్ చేసిన వ్యక్తికి మీ కార్డ్ నంబర్, CVV లేదా Expiry డేట్ చెప్పకండి.',
      'కాల్ కట్ చేసి మీ పాస్‌బుక్ పై ఉన్న బ్యాంక్ అధికారిక నంబర్‌కు ఫోన్ చేయండి.',
      'కాల్ మాట్లాడకుండా నేరుగా మీ ఊరిలోని బ్యాంక్ బ్రాంచ్‌కు వెళ్ళి అడగండి.'
    ],
    steps_en: [
      'Never share debit card number, 3-digit CVV, or expiry date on call.',
      'Disconnect the call and call the customer care number on your passbook.',
      'Visit your nearest home bank branch in person.'
    ]
  },
  {
    id: 'scam-04',
    category: 'scam_awareness',
    title_te: 'నకిలీ ఉద్యోగ ప్రకటనలు (Fake Job Offers / Part-time Task Scam)',
    title_en: 'How to spot Fake Job Offers & Part-Time Task Scams?',
    content_te: 'యూట్యూబ్ వీడియోలకు లైక్ కొడితే రోజూ ₹3,000 ఇస్తామని వాట్సాప్ లేదా టెలిగ్రామ్‌లో వచ్చే ఆఫర్‌లు నకిలీవి. మొదట చిన్న మొత్తం ఇచ్చి, తర్వాత పెద్ద మొత్తంలో డబ్బులు గుంజుతారు.',
    content_en: 'Work-from-home offers promising ₹3,000/day just for liking YouTube videos or completing ratings are scams designed to loot your savings.',
    tags: ['job scam', 'work from home', 'part time scam', 'ఉద్యోగం', 'నకిలీ జాబ్', 'పార్ట్ టైమ్'],
    safetyWarning_te: '🚨 హెచ్చరిక: నిజమైన ఉద్యోగానికి ఎవరూ మీ నుండి రిజిస్ట్రేషన్ ఫీజు లేదా డిపాజిట్ డబ్బులు అడగరు.',
    safetyWarning_en: '🚨 Alert: Legitimate employers never ask candidates to pay money to get a job or task.',
    steps_te: [
      'ఉద్యోగం ఇస్తామని ముందస్తుగా డబ్బులు (Deposit) అడిగితే అది మోసం అని గ్రహించండి.',
      'టెలిగ్రామ్ గ్రూపులలో చేరకండి.',
      'సందేహం ఉంటే 1930 నేషనల్ సైబర్ హెల్ప్‌లైన్‌కు నివేదించండి.'
    ],
    steps_en: [
      'Refuse to pay advance registration fees or investment deposits for jobs.',
      'Avoid unverified Telegram earning groups.',
      'Report financial fraud to National Cyber Helpline 1930.'
    ]
  },
  {
    id: 'scam-05',
    category: 'scam_awareness',
    title_te: 'సైబర్ మోసానికి గురైతే వెంటనే ఏం చేయాలి? (Cyber Helpline 1930)',
    title_en: 'What immediate steps to take if scammed? (Cyber Helpline 1930)',
    content_te: 'ఒకవేళ పొరపాటున మీ అకౌంట్ నుండి సైబర్ నేరగాళ్ళు డబ్బులు కాజేస్తే, మొదటి 2 గంటలలోపు (Golden Hour) 1930 కి కాల్ చేస్తే డబ్బులు రికవరీ అయ్యే అవకాశం ఎక్కువగా ఉంటుంది.',
    content_en: 'If scammed, acting within the "Golden Hour" (first 1-2 hours) by calling 1930 increases chances of recovering stolen money by freezing scammer bank accounts.',
    // Added: 'స్కామ్ అయ్యాను', 'మోసం అయింది', 'scammed' to match Telugu sentences reporting fraud
    tags: ['1930', 'helpline', 'cyber crime', 'money lost', 'scammed', 'cheated', 'what to do scam', 'సైబర్ క్రైమ్', 'హెల్ప్‌లైన్', 'డబ్బులు పోయాయి', 'స్కామ్ అయ్యాను', 'మోసం అయింది'],
    safetyWarning_te: '🚨 అత్యవసర సంఖ్య 1930: భారత ప్రభుత్వ సైబర్ క్రైమ్ ఉచిత హెల్ప్‌లైన్ 24/7 అందుబాటులో ఉంటుంది.',
    safetyWarning_en: '🚨 Emergency Hotline 1930: Government of India toll-free cyber fraud reporting 24/7.',
    steps_te: [
      'వెంటనే 1930 సంఖ్యకు డయల్ చేయండి.',
      'మీ పేరు, బ్యాంక్ పేరు, మోసపోయిన మొత్తం మరియు SMS ట్రాన్సాక్షన్ వివరాలు చెప్పండి.',
      'cybercrime.gov.in వెబ్‌సైట్‌లో అధికారిక ఆన్‌లైన్ ఫిర్యాదు నమోదు చేయండి.',
      'మీ బ్యాంక్‌కు వెళ్ళి అకౌంట్ మరియు ఎటిఎమ్ కార్డ్ తాత్కాలికంగా బ్లాక్ చేయించండి.'
    ],
    steps_en: [
      'Dial 1930 toll-free immediately from your mobile.',
      'Provide your bank details, amount lost, and transaction ID from the SMS.',
      'File a formal report on cybercrime.gov.in.',
      'Inform your bank branch to freeze your debit card and Internet banking.'
    ]
  },
  {
    id: 'scam-06',
    category: 'scam_awareness',
    title_te: 'ఫోన్ పోయినా లేదా దొంగతనం జరిగితే SIM బ్లాక్ చేయడం ఎలా? (CEIR Portal)',
    title_en: 'How to block lost/stolen mobile phone via CEIR Portal?',
    content_te: 'మీ స్మార్ట్‌ఫోన్ పోయినట్లయితే కేంద్ర ప్రభుత్వ CEIR (ceir.sancharsaathi.gov.in) పోర్టల్ ద్వారా మీ ఫోన్ ఉపయోగించకుండా బ్లాక్ చేయవచ్చు.',
    content_en: 'If your phone is lost or stolen, block its IMEI number using the Govt Sanchar Saathi (CEIR) portal so no one can misuse it with any SIM.',
    tags: ['lost phone', 'ceir', 'block sim', 'imei', 'ఫోన్ పోయింది', 'సిమ్ బ్లాక్', 'దొంగతనం'],
    safetyWarning_te: '🔒 భద్రతా చర్య: ఫోన్ పోయిన వెంటనే ముందుగా మీ సిమ్ కార్డ్ డుప్లికేట్ తీసుకోవాలి.',
    safetyWarning_en: '🔒 Security Action: First block your SIM with telecom provider (Airtel/Jio/BSNL/Vi) then block IMEI on CEIR.',
    steps_te: [
      'మీ సిమ్ కంపెనీ (Jio/Airtel/Vi/BSNL) షాప్‌కి వెళ్ళి పాత సిమ్ బ్లాక్ చేసి కొత్త సిమ్ తీసుకోండి.',
      'మీ దగ్గరలోని పోలీసు స్టేషన్‌లో ఫోన్ పోయినట్లు రసీదు (Police Complaint) తీసుకోండి.',
      'ceir.sancharsaathi.gov.in పోర్టల్‌లో "Block Stolen/Lost Mobile" ఎంచుకుని వివరాలు నింపండి.'
    ],
    steps_en: [
      'Visit your telecom shop (Jio/Airtel/Vi) to block the old SIM and get a duplicate SIM.',
      'File an online lost mobile report at local police station.',
      'Visit ceir.sancharsaathi.gov.in to block the phone IMEI number.'
    ]
  },
  {
    id: 'scam-07',
    category: 'scam_awareness',
    title_te: 'వాట్సాప్‌లో వచ్చే నకిలీ లింక్‌లు (Fake WhatsApp Viral Links) ని ఎలా గుర్తుపట్టాలి?',
    title_en: 'How to identify Fake Viral Links on WhatsApp?',
    content_te: '"ఉచితంగా రూ.500 రీఛార్జ్", "రైతులకు ఉచిత స్మార్ట్‌ఫోన్‌లు" అంటూ వాట్సాప్ గ్రూపులలో వచ్చే వైరల్ లింక్‌లన్నీ నకిలీవి. వాటిని ఇతరులకు ఫార్వర్డ్ చేయకూడదు.',
    content_en: 'Forwarded WhatsApp messages claiming free mobile recharges, free scooters, or festive gifts from Tata/Amazon are phishing link scams. Never forward them.',
    tags: ['whatsapp link', 'viral scam', 'free recharge', 'వాట్సాప్ లింక్', 'నకిలీ లింక్', 'ఉచితం'],
    safetyWarning_te: '🛑 గమనిక: ప్రభుత్వ లేదా ప్రముఖ కంపెనీల అధికారిక వెబ్‌సైట్‌లు మాత్రమే .gov.in లేదా సురక్షితమైన https:// తో మొదలవుతాయి.',
    safetyWarning_en: '🛑 Tip: Genuine government websites strictly end with .gov.in domain name.',
    steps_te: [
      'లింక్‌లలో బ్లూ కలర్ వెబ్‌సైట్ పేరును శ్రద్ధగా పరిశీలించండి (ఉదా: free-recharge-2026.xyz అనేది మోసం).',
      'అలాంటి మెసేజ్‌లను వాట్సాప్ గ్రూపుల్లో ఫార్వర్డ్ చేయడం ఆపండి.',
      'లింక్ ఓపెన్ చేసి మీ పేరు, ఆధార్ నంబర్ లేదా బ్యాంక్ వివరాలు నమోదు చేయకండి.'
    ],
    steps_en: [
      'Carefully check the web link address before clicking.',
      'Stop forwarding unverified message offers in family WhatsApp groups.',
      'Never enter personal details like Aadhaar or phone numbers on external links.'
    ]
  },

  // --- 4. GOVT SERVICES & DOCS (6 entries) ---
  {
    id: 'gov-01',
    category: 'gov_docs',
    title_te: 'డిజిలాకర్ (DigiLocker) అంటే ఏమిటి? ప్రభుత్వ పత్రాలు ఫోన్‌లో ఎలా దాచుకోవాలి?',
    title_en: 'What is DigiLocker and how to store Govt Documents on mobile?',
    content_te: 'డిజిలాకర్ అనేది భారత ప్రభుత్వ ఉచిత యాప్. ఇందులో మీ ఆధార్ కార్డ్, డ్రైవింగ్ లైసెన్స్, పదవ తరగతి సర్టిఫికేట్లు ఒరిజినల్ కాపీల రూపంలో డిజిటల్‌గా భద్రపరుచుకోవచ్చు.',
    content_en: 'DigiLocker is an official Govt of India app to issue and access authentic digital documents like Aadhaar, Driving License, and vehicle Registration.',
    tags: ['digilocker', 'aadhaar', 'driving license', 'certificates', 'డిజిలాకర్', 'ఆధార్', 'పత్రాలు'],
    steps_te: [
      'Play Store నుండి "DigiLocker" యాప్ డౌన్‌లోడ్ చేయండి.',
      'మీ ఆధార్ నంబర్ మరియు ఆధార్‌కి లింక్ అయిన మొబైల్ OTP తో సైన్ అప్ అవ్వండి.',
      '"Issued Documents" విభాగంలో మీ ఆధార్, పాన్ కార్డ్, డ్రైవింగ్ లైసెన్స్ డౌన్‌లోడ్ చేసుకోండి.',
      'పోలీసులు లేదా అధికారులకు ఈ డిజిటల్ పత్రాలు చూపిస్తే చెల్లుబాటు అవుతాయి.'
    ],
    steps_en: [
      'Download the official DigiLocker app from Google Play Store.',
      'Register using your Aadhaar number and OTP received on mobile.',
      'Access "Issued Documents" to fetch official digital Aadhaar, PAN, and Driving License.',
      'These digital documents are legally recognized across India under IT Act.'
    ]
  },
  {
    id: 'gov-02',
    category: 'gov_docs',
    title_te: 'ఆధార్ కార్డు ఫోన్‌లో ఎలా డౌన్‌లోడ్ చేసుకోవాలి? (mAadhaar)',
    title_en: 'How to download Aadhaar card on mobile using mAadhaar app?',
    content_te: 'మీ ఆధార్ కార్డు కాగితం పోయినా, మీ ఫోన్‌లో mAadhaar యాప్ లేదా uidai.gov.in వెబ్‌సైట్ ద్వారా ఒరిజినల్ PDF ఆధార్ డౌన్‌లోడ్ చేసుకోవచ్చు.',
    content_en: 'You can download an electronic copy (e-Aadhaar) of your Aadhaar card anytime using the official mAadhaar mobile app or uidai.gov.in portal.',
    tags: ['aadhaar', 'maadhaar', 'download aadhaar', 'uidai', 'ఆధార్', 'డౌన్‌లోడ్', 'కార్డు'],
    steps_te: [
      'Play Store లో "mAadhaar" యాప్ ఇన్‌స్టాల్ చేయండి.',
      '"Download Aadhaar" ఎంచుకుని మీ 12 అంకెల ఆధార్ నంబర్ టైప్ చేయండి.',
      'క్యాప్చా కోడ్ కొట్టి "Get OTP" పై నొక్కండి.',
      'మొబైల్‌కి వచ్చిన OTP కొట్టి PDF ఆధార్ డౌన్‌లోడ్ చేసుకోండి (PDF ఓపెన్ చేయడానికి మీ పేరులోని మొదటి 4 ఇంగ్లీష్ అక్షరాలు + పుట్టిన సంవత్సరం పాస్‌వర్డ్).'
    ],
    steps_en: [
      'Install "mAadhaar" app or visit myaadhaar.uidai.gov.in.',
      'Tap "Download Aadhaar" and type your 12-digit Aadhaar number.',
      'Enter captcha and click "Send OTP".',
      'Enter the OTP received on your registered mobile to open the PDF.'
    ]
  },
  {
    id: 'gov-03',
    category: 'gov_docs',
    title_te: 'ఇ-శ్రమ్ కార్డ్ (e-Shram Card) అంటే ఏమిటి? ఎవరికి ఉపయోగపడుతుంది?',
    title_en: 'What is e-Shram Card and who can benefit?',
    content_te: 'అసంగటిత రంగ కార్మికులు (రైతులు, భవన నిర్మాణ కార్మికులు, డ్రైవర్లు, చేతివృత్తుల వారు) సంక్షేమ పథకాలు పొందడానికి కేంద్ర ప్రభుత్వం ఇ-శ్రమ్ కార్డ్ అందిస్తోంది.',
    content_en: 'e-Shram card is issued by Union Ministry of Labour for unorganized workers to get social security benefits and accident insurance cover.',
    tags: ['eshram', 'e-shram', 'worker card', 'labour card', 'ఇ-శ్రమ్', 'కార్మికులు', 'పథకాలు'],
    steps_te: [
      'eshram.gov.in వెబ్‌సైట్ ఓపెన్ చేయండి.',
      'మీ ఆధార్‌కి లింక్ అయిన మొబైల్ నంబర్ టైప్ చేయండి.',
      'మీ వృత్తి, బ్యాంక్ అకౌంట్ వివరాలు నమోధు చేయండి.',
      'ఉచితంగా ఇ-శ్రమ్ డిజిటల్ కార్డ్ డౌన్‌లోడ్ చేసుకోండి.'
    ],
    steps_en: [
      'Visit official portal eshram.gov.in.',
      'Enter mobile number linked with Aadhaar card.',
      'Fill in your occupation and bank account details.',
      'Download your 12-digit Universal Account Number (UAN) e-Shram card.'
    ]
  },
  {
    id: 'gov-04',
    category: 'gov_docs',
    title_te: 'పిఎం కిసాన్ (PM-Kisan) డబ్బులు పడ్డాయో లేదో ఫోన్‌లో ఎలా చూడాలి?',
    title_en: 'How to check PM-Kisan installment status on mobile?',
    content_te: 'రైతులు తమ ఖాతాలో పిఎం కిసాన్ సమ్మాన్ నిధి రూ.2,000 పడ్డాయో లేదో pmkisan.gov.in పోర్టల్‌లో నంబర్ కొట్టి సరిచూసుకోవచ్చు.',
    content_en: 'Farmers can track their PM-Kisan scheme 2,000 rupees installment payment status online using their registered Aadhaar or Mobile number.',
    tags: ['pm kisan', 'farmer scheme', 'status check', 'పిఎం కిసాన్', 'రైతు', 'డబ్బులు పడ్డాయా'],
    steps_te: [
      'pmkisan.gov.in వెబ్‌సైట్‌కి వెళ్ళండి.',
      '"Know Your Status" ఆప్షన్ పై క్లిక్ చేయండి.',
      'మీ PM-Kisan رجسٹریشن నంబర్ లేదా ఆధార్ నంబర్ టైప్ చేయండి.',
      'స్క్రీన్ పై విడతల వారీగా జమ అయిన డబ్బుల వివరాలు కనిపిస్తాయి.'
    ],
    steps_en: [
      'Go to website pmkisan.gov.in.',
      'Click on "Know Your Status" icon on the homepage.',
      'Type your Registration Number or mobile number with Captcha.',
      'View installment payment status report.'
    ]
  },
  {
    id: 'gov-05',
    category: 'gov_docs',
    title_te: 'మీసేవ / సచివాలయం సేవలను ఆన్‌లైన్‌లో ఎలా దరఖాస్తు చేయాలి?',
    title_en: 'How to apply for MeeSeva / Secretariat services online?',
    content_te: 'ఆదాయ ధృవీకరణ పత్రం (Income Certificate), కుల ధృవీకరణ పత్రం (Caste Certificate) వంటి పత్రాల కోసం ఆన్‌లైన్ పోర్టల్‌లలో దరఖాస్తు చేసుకోవచ్చు.',
    content_en: 'Apply for essential Govt certificates like Caste, Income, and Residence certificates online through state MeeSeva/Secretariat citizen portals.',
    tags: ['meeseva', 'caste certificate', 'income certificate', 'మీసేవ', 'కులం', 'ఆదాయం'],
    steps_te: [
      'మీ రాష్ట్ర అధికారిక సేవా పోర్టల్ తెరిచి పౌరుడి (Citizen) ఖాతా సృష్టించండి.',
      'కావలసిన సర్టిఫికేట్ (ఉదా: Income Certificate) ఎంచుకోండి.',
      'అడిగిన పత్రాలు (ఆధార్, రేషన్ కార్డ్ ఫోటోలు) అప్‌లోడ్ చేయండి.',
      'దరఖాస్తు సంఖ్య (Application No) దాచుకుని స్టేటస్ ట్రాక్ చేయండి.'
    ],
    steps_en: [
      'Visit state MeeSeva / Grama Sachivalayam web portal.',
      'Register for a new citizen account using Aadhaar OTP.',
      'Upload required scanned documents (Aadhaar, Ration Card).',
      'Track status using the Application Acknowledgement Number.'
    ]
  },
  {
    id: 'gov-06',
    category: 'gov_docs',
    title_te: 'పాస్‌పోర్ట్ సేవా (Passport Seva) అపాయింట్‌మెంట్ ఫోన్‌లో పొందే విధానం',
    title_en: 'How to check Passport Seva steps on mobile?',
    content_te: 'పాస్‌పోర్ట్ దరఖాస్తు చేయడానికి mPassport Seva యాప్ లేదా passportindia.gov.in అధికారిక పోర్టల్ మాత్రమే ఉపయోగించాలి.',
    content_en: 'Apply for new passports safely via official app mPassport Seva or govt portal passportindia.gov.in. Avoid fake scam websites.',
    tags: ['passport', 'mpassport', 'gov portal', 'పాస్‌పోర్ట్', 'అప్లికేషన్'],
    steps_te: [
      'అధికారిక వెబ్‌సైట్ passportindia.gov.in మాత్రమే ఓపెన్ చేయండి (నకిలీ ఏజెంట్ సైట్‌లు నమ్మవద్దు).',
      'User Registration పూర్తి చేసి దరఖాస్తు ఫారమ్ నింపండి.',
      'ఫీజు చెల్లించి దగ్గరలోని పాస్‌పోర్ట్ సేవా కేంద్రం (PSK) లో అపాయింట్‌మెంట్ బుక్ చేసుకోండి.'
    ],
    steps_en: [
      'Use strictly official site passportindia.gov.in (beware of fake agent sites).',
      'Complete new user registration and fill the online application form.',
      'Pay fee online and schedule appointment at nearest PSK center.'
    ]
  },

  // --- 5. LEARNING RESOURCES (6 entries) ---
  {
    id: 'learn-01',
    category: 'learning',
    title_te: 'యూట్యూబ్‌లో (YouTube) పాఠాలు మరియు చదువు విషయాలు ఎలా వెతకాలి?',
    title_en: 'How to search educational topics and tutorials on YouTube?',
    content_te: 'యూట్యూబ్‌లో కేవలం సినిమాలు మాత్రమే కాకుండా 1st క్లాస్ నుండి డిగ్రీ వరకు పాఠాలు, కంప్యూటర్ కోర్సులు, వ్యవసాయ చిట్కాలు ఉచితంగా నేర్చుకోవచ్చు.',
    content_en: 'YouTube has millions of free educational videos in Telugu & English for school subjects, spoken English, farming, and job skills.',
    tags: ['youtube', 'study', 'video tutorial', 'education', 'యూట్యూబ్', 'పాఠాలు', 'చదువు', 'శిక్షణ'],
    steps_te: [
      'YouTube యాప్ ఓపెన్ చేసి పైన ఉన్న శోధన బొమ్మ (🔍 Search) పై నొక్కండి.',
      'మీకు కావలసిన విషయం టైప్ చేయండి (ఉదా: "10th Class Maths Telugu", "Spoken English Classes").',
      'మైక్ గుర్తు (🎤) నొక్కి నోటితో మాట్లాడి కూడా వెతకవచ్చు.',
      'మంచి కామెంట్స్ మరియు లైక్స్ ఉన్న ఎడ్యుకేషన్ ఛానెల్స్ సబ్‌స్క్రైబ్ చేసుకోండి.'
    ],
    steps_en: [
      'Open YouTube app and tap the search magnifying glass icon 🔍.',
      'Type your learning topic (e.g. "Spoken English for beginners", "7th class science in Telugu").',
      'You can also tap the Microphone icon 🎤 to speak your search topic.',
      'Subscribe to high quality educational channels for regular learning.'
    ]
  },
  {
    id: 'learn-02',
    category: 'learning',
    title_te: 'గూగుల్ సెర్చ్ (Google Search) సరిగ్గా ఉపయోగించి జవాబులు వెతకడం ఎలా?',
    title_en: 'How to search effectively on Google Search?',
    content_te: 'మీ మనస్సులో ఉన్న ఏ సందేహానికైనా గూగుల్‌లో సమాధానం దొరుకుతుంది. స్పష్టమైన పదాలు ఉపయోగించి గూగుల్ మైక్ లేదా టెక్స్ట్ ద్వారా వెతకవచ్చు.',
    content_en: 'Google Search can answer questions instantly. Use specific keywords or Google Voice Search in Telugu or English for quick results.',
    tags: ['google search', 'google search tips', 'voice search', 'గూగుల్', 'సెర్చ్', 'సమాచారం'],
    steps_te: [
      'గూగుల్ సెర్చ్ బార్ లేదా Google Chrome యాప్ తెరవండి.',
      'మీ ప్రశ్నను స్పష్టంగా టైప్ చేయండి లేదా మైక్రోఫోన్ నొక్కి మాట్లాడండి.',
      'వచ్చిన ఫలితాలలో అధికారిక లేదా నమ్మకమైన వెబ్‌సైట్‌లపై క్లిక్ చేయండి.'
    ],
    steps_en: [
      'Open Google App or Chrome browser.',
      'Type your specific question or tap the mic icon to speak.',
      'Click on trusted websites like Wikipedia or Govt portals.'
    ]
  },
  {
    id: 'learn-03',
    category: 'learning',
    title_te: 'ఫోన్‌లో PDF పుస్తకాలు మరియు నోట్స్ ఎలా తెరిచి చదవాలి?',
    title_en: 'How to open and read PDF books and notes on mobile?',
    content_te: 'బడి లేదా కాలేజీ పుస్తకాలు, గవర్నమెంట్ జాబ్ మెటీరియల్ PDF రూపంలో ఫోన్‌లో చదువుకోవచ్చు. Google Drive లేదా Drive PDF Viewer ద్వారా ఇవి ఓపెన్ అవుతాయి.',
    content_en: 'Educational ebooks and exam prep notes come as PDF files. Use Drive PDF Viewer or Adobe Acrobat app to read, highlight, and zoom pages.',
    tags: ['pdf', 'ebook', 'read books', 'drive viewer', 'పిడిఎఫ్', 'పుస్తకాలు', 'నోట్స్'],
    steps_te: [
      'వాట్సాప్ లేదా వెబ్‌సైట్ నుండి డౌన్‌లోడ్ చేసిన PDF ఫైల్ పై నొక్కండి.',
      '"Drive PDF Viewer" లేదా "Adobe Acrobat" ఎంచుకోండి.',
      'రెండు వేళ్లతో స్క్రీన్ జూమ్ చేసి పెద్ద అక్షరాలతో చదువుకోవచ్చు.'
    ],
    steps_en: [
      'Tap on any downloaded .pdf file in WhatsApp or File Manager.',
      'Select "Drive PDF Viewer" to open instantly.',
      'Pinch to zoom in on text for easy reading.'
    ]
  },
  {
    id: 'learn-04',
    category: 'learning',
    title_te: 'ఫోన్‌లో డిక్షనరీ (Google Translate) ఉపయోగించి ఇంగ్లీష్ ముక్కలకు అర్థాలు తెలుసుకోవడం',
    title_en: 'How to use Google Translate to learn English words?',
    content_te: 'ఇంగ్లీష్ పుస్తకం లేదా పేపర్‌లో అర్థం కాని పదాలు ఉంటే, గూగుల్ ట్రాన్స్‌లేట్ కెమెరాతో ఫోటో తీస్తే వెంటనే తెలుగులోకి అనువాదం అవుతుంది.',
    content_en: 'Google Translate allows translating English text, posters, or books to Telugu instantly by taking a camera photo or typing words.',
    tags: ['google translate', 'dictionary', 'english to telugu', 'గూగుల్ ట్రాన్స్‌లేట్', 'అనువాదం', 'అర్థాలు'],
    steps_te: [
      'Play Store నుండి "Google Translate" యాప్ ఇన్‌స్టాల్ చేసుకోండి.',
      'English -> Telugu భాషలను ఎంచుకోండి.',
      '"Camera" బటన్ నొక్కి ఇంగ్లీష్ పేపర్ పై చూపిస్తే అది తెలుగు అక్షరాల్లోకి మారుతుంది.'
    ],
    steps_en: [
      'Install "Google Translate" app from Play Store.',
      'Select source language English and target language Telugu.',
      'Use the Camera feature to scan English text for instant Telugu translation.'
    ]
  },
  {
    id: 'learn-05',
    category: 'learning',
    title_te: 'గవర్నమెంట్ నోటిఫికేషన్లు & జాబ్ అప్‌డేట్లు పొందే నమ్మకమైన మార్గాలు',
    title_en: 'Reliable sources to track Government Exam & Job updates',
    content_te: 'ప్రభుత్వ ఉద్యోగ ప్రకటనలు మరియు పథకాల వివరాలు పొందడానికి నమ్మకమైన అధికారిక వెబ్‌సైట్‌లు మరియు ఎంప్లాయిమెంట్ న్యూస్ ఫాలో అవ్వాలి.',
    content_en: 'Stay updated on public sector exams, hall tickets, and notifications by regularly checking official Commission portals.',
    tags: ['job updates', 'gov exams', 'notifications', 'ఉద్యోగ ప్రకటనలు', 'నోటిఫికేషన్'],
    steps_te: [
      'రాష్ట్ర పబ్లిక్ సర్వీస్ కమిషన్ వెబ్‌సైట్‌లు (APPSC / TSPSSB) రోజువారీ చూడండి.',
      'నకిలీ బ్లాగులు కాకుండా .gov.in లేదా .nic.in సైట్‌లను మాత్రమే నమ్మండి.'
    ],
    steps_en: [
      'Check state Public Service Commission portals regularly.',
      'Rely exclusively on official .gov.in domains for notification PDFs.'
    ]
  },
  {
    id: 'learn-06',
    category: 'learning',
    title_te: 'దీక్ష (DIKSHA) యాప్ ద్వారా స్కూల్ పుస్తకాలు ఆన్‌లైన్‌లో పొందడం',
    title_en: 'How to access school textbooks via DIKSHA portal?',
    content_te: 'డిజిటల్ ఇన్‌ఫ్రాస్ట్రక్చర్ ఫర్ నాలెడ్జ్ షేరింగ్ (DIKSHA) భారత ప్రభుత్వ యాప్. దీనిలో 1 నుండి 12వ తరగతి వరకు స్టేట్ బోర్డ్ మరియు NCERT పుస్తకాలు QR కోడ్ స్కాన్ ద్వారా ఉచితంగా లభిస్తాయి.',
    content_en: 'DIKSHA is a National Education Portal providing free interactive textbooks, worksheets, and QR-coded lesson videos for Classes 1 to 12.',
    tags: ['diksha app', 'school books', 'ncert', 'scert', 'దీక్ష యాప్', 'బడి పుస్తకాలు'],
    steps_te: [
      'Play Store లో "DIKSHA" యాప్ ఇన్‌స్టాల్ చేసుకోండి.',
      'విద్యార్థి (Student) లేదా ఉపాధ్యాయుడు (Teacher) గా లాగిన్ అవ్వండి.',
      'మీ తరగతి మరియు మీడియం (తెలుగు / ఇంగ్లీష్) ఎంచుకోండి.',
      'పాఠ్యపుస్తకాల్లోని QR కోడ్ స్కాన్ చేసి వీడియాలు చూడవచ్చు.'
    ],
    steps_en: [
      'Download DIKSHA app from Google Play Store.',
      'Select role as Student, Medium as Telugu or English, and Class.',
      'Scan QR codes printed in physical SCERT textbooks to watch video lessons.'
    ]
  },

  // --- 6. COMMUNICATION (6 entries) ---
  {
    id: 'comm-01',
    category: 'communication',
    title_te: 'జీమెయిల్ (Gmail) ఖాతా తెరవడం మరియు ఈమెయిల్ పంపడం ఎలా?',
    title_en: 'How to create a Gmail account and send an Email?',
    content_te: 'ప్రభుత్వ సేవలు, ఉద్యోగాలు మరియు ఆన్‌లైన్ దరఖాస్తులకు ఈమెయిల్ ఐడి (Email ID) తప్పనిసరి. Gmail యాప్‌లో "Compose" నొక్కి ఈమెయిల్ పంపవచ్చు.',
    content_en: 'Email is essential for official work and job applications. Open Gmail app, tap Compose, enter recipient email address, write message, and send.',
    tags: ['gmail', 'email', 'compose', 'జీమెయిల్', 'ఈమెయిల్', 'మెయిల్ పంపడం'],
    steps_te: [
      'ఫోన్‌లోని "Gmail" యాప్‌ను తాకండి.',
      'కింద కుడివైపు ఉన్న "Compose" (పెన్సిల్ గుర్తు ✏️) పై నొక్కండి.',
      '"To" వద్ద మీరు మెయిల్ పంపాలనుకుంటున్న వ్యక్తి Email ID టైప్ చేయండి.',
      'విషయం (Subject) మరియు సందేశం (Message) టైప్ చేసి పైన ఉన్న నీలిరంగు బాణం ➔ నొక్కండి.'
    ],
    steps_en: [
      'Open the Gmail app on your smartphone.',
      'Tap the "Compose" pencil icon at the bottom right.',
      'In the "To" field, type recipient email address (e.g. example@gmail.com).',
      'Fill in Subject, type your message, and tap the blue paper airplane send icon.'
    ]
  },
  {
    id: 'comm-02',
    category: 'communication',
    title_te: 'వాట్సాప్ లేదా గూగుల్ మీట్ (Google Meet) ద్వారా వీడియో కాల్ మాట్లాడటం ఎలా?',
    title_en: 'How to make Video Calls on WhatsApp or Google Meet?',
    content_te: 'దూరంగా ఉండే బంధువులు లేదా ఉపాధ్యాయులతో ముఖాముఖి వీడియో కాల్ మాట్లాడవచ్చు. వాట్సాప్ చాట్‌లో పైన ఉండే వీడియో కెమెరా గుర్తును నొక్కి వీడియో కాల్ చేయవచ్చు.',
    content_en: 'Video calling allows face-to-face communication. Open WhatsApp chat and tap the Video Camera icon at the top right.',
    tags: ['video call', 'google meet', 'whatsapp video', 'వీడియో కాల్', 'మాట్లాడటం'],
    steps_te: [
      'WhatsApp లో వ్యక్తి చాట్ బాక్స్ తెరవండి.',
      'పైన పక్కన ఉన్న "Video Camera" (📹) గుర్తుపై నొక్కండి.',
      'ఇతర వ్యక్తి కాల్ ఎత్తగానే మీ కెమెరా స్క్రీన్ పై కనిపిస్తుంది.'
    ],
    steps_en: [
      'Open the target contact chat in WhatsApp.',
      'Tap the Video Camera 📹 icon on the top right bar.',
      'Wait for the person to accept the incoming video call.'
    ]
  },
  {
    id: 'comm-03',
    category: 'communication',
    title_te: 'ఆన్‌లైన్ ఫారాలు (Online Forms) నింపేటప్పుడు తీసుకోవాల్సిన జాగ్రత్తలు',
    title_en: 'Safety & accuracy tips for filling Online Application Forms',
    content_te: 'కాలేజీ అడ్మిషన్ లేదా స్కాలర్‌షిప్ ఫారాలు నింపేటప్పుడు పేరు, పుట్టిన తేదీ ఆధార్ ప్రకారమే టైప్ చేయాలి. స్పెల్లింగ్ తప్పులు లేకుండా జాగ్రత్తపడాలి.',
    content_en: 'When filling scholarship or job forms online, match your name, date of birth, and parents details strictly with your 10th Certificate / Aadhaar.',
    tags: ['online form', 'application', 'scholarship form', 'ఆన్‌లైన్ ఫారం', 'దరఖాస్తు'],
    steps_te: [
      'మీ మార్కుల మేమో మరియు ఆధార్ కార్డు దగ్గర ఉంచుకుని టైప్ చేయండి.',
      'ఫోటో మరియు సంతకం (Signature) అడిగిన సైజులోనే (KB లలో) అప్‌లోడ్ చేయండి.',
      'Submit నొక్కేముందు "Preview" నొక్కి అక్షరాలన్నీ సరిచూసుకోండి.',
      'ఫారమ్ పూర్తి అయిన తర్వాత దరఖాస్తు కాపీని PDF గా సేవ్ చేసుకోండి.'
    ],
    steps_en: [
      'Keep physical certificates handy while typing names.',
      'Upload passport photo and signature in required file size limit.',
      'Always click "Preview Form" before final submission.',
      'Save and print the final submitted Application PDF.'
    ]
  },
  {
    id: 'comm-04',
    category: 'communication',
    title_te: 'ఫోటో సైజు తగ్గించడం (Compress Photo Size for Forms) ఎలా?',
    title_en: 'How to reduce/compress image size for online forms?',
    content_te: 'ఆన్‌లైన్ దరఖాస్తుల వద్ద ఫోటోలు 100 KB కంటే తక్కువ సైజు మాత్రమే అడుగుతారు. "Photo Resizer" యాప్ లేదా రిసైజ్ వెబ్‌సైట్‌ల ద్వారా సైజు తగ్గించవచ్చు.',
    content_en: 'Most official web portals require document photos to be below 100 KB. Use free Photo Resizer tools to compress image size.',
    tags: ['compress photo', 'resize image', 'photo kb size', 'ఫోటో సైజు', 'రిసైజ్'],
    steps_te: [
      'Play Store లో "Photo & Picture Resizer" ఇన్‌స్టాల్ చేసుకోండి.',
      'మీ ఫోటోను ఎంచుకుని "Resize" నొక్కండి.',
      '100 KB లేదా 50 KB సైజు ఎంచుకుని సేవ్ చేసుకోండి.'
    ],
    steps_en: [
      'Download a free Photo Resizer app from Play Store.',
      'Select your document photo from Gallery.',
      'Choose target file size under 100 KB and export.'
    ]
  },
  {
    id: 'comm-05',
    category: 'communication',
    title_te: 'వాట్సాప్ గ్రూపులలో మెసేజ్ ఆడియో (Voice Message) పంపడం ఎలా?',
    title_en: 'How to send Voice Messages on WhatsApp?',
    content_te: 'టైపింగ్ రాకపోయినా బాధలేదు! వాట్సాప్‌లో మైక్ గుర్తును నొక్కి పట్టుకుని మీ నోటి మాటల ద్వారా వాయిస్ మెసేజ్ పంపవచ్చు.',
    content_en: 'If typing is slow or difficult, hold the green Microphone icon in WhatsApp to record and send voice messages directly.',
    tags: ['voice message', 'audio note', 'mic', 'వాయిస్ మెసేజ్', 'ఆడియో', 'మైక్'],
    steps_te: [
      'WhatsApp చాట్ తెరిచి కింద కుడివైపు ఉన్న పచ్చటి "Microphone" (🎤) గుర్తును నొక్కి పట్టుకోండి.',
      'మీరు చెప్పాలనుకున్న విషయం ఫోన్‌లో మాట్లాడండి.',
      'చేయి తీసేస్తే ఆడియో మెసేజ్ వెంటనే వెళ్తుంది.'
    ],
    steps_en: [
      'Open WhatsApp chat window.',
      'Press and hold the green Microphone 🎤 icon on the bottom right.',
      'Speak your message clearly into your phone mic.',
      'Release your finger to send the recorded audio note instantly.'
    ]
  },
  {
    id: 'comm-06',
    category: 'communication',
    title_te: 'గూగుల్ మ్యాప్స్ (Google Maps) లో ఊరి దారి వెతకడం ఎలా?',
    title_en: 'How to search location directions using Google Maps?',
    content_te: 'కొత్త ఊరు లేదా ఆసుపత్రికి వెళ్ళేటప్పుడు దారి తెలియకపోతే గూగుల్ మ్యాప్స్ ఉపయోగించి సరైన రూట్ తెలుసుకోవచ్చు.',
    content_en: 'Google Maps provides turn-by-turn navigation for walking, bus, or bike travel to any hospital, village, or town.',
    tags: ['google maps', 'location', 'navigation route', 'గూగుల్ మ్యాప్స్', 'దారి', 'మ్యాప్'],
    steps_te: [
      'ఫోన్‌లో "Maps" యాప్ ఓపెన్ చేయండి.',
      'పైన ఊరి పేరు లేదా ఆసుపత్రి పేరు టైప్ చేయండి.',
      '"Directions" (బ్లూ కలర్ బటన్) పై నొక్కి Start నొక్కండి.',
      'ఫోన్ వాయిస్ ద్వారా "ముందుకు వెళ్ళండి / కుడికి తిరగండి" అని దారి చూపిస్తుంది.'
    ],
    steps_en: [
      'Open the Maps app on your phone.',
      'Type your destination village, town, or hospital name in search bar.',
      'Tap "Directions" and select Start.',
      'Follow the voice-guided turn-by-turn map route.'
    ]
  },

  // --- 7. BASIC ENGLISH PHRASES (6 entries) ---
  {
    id: 'eng-01',
    category: 'english_phrases',
    title_te: 'ఫోన్ వాడకంలో "Allow" మరియు "Deny" అంటే ఏమిటి?',
    title_en: 'What do "Allow" and "Deny" mean on smartphone popups?',
    content_te: 'కొత్త యాప్ ఓపెన్ చేసినప్పుడు "Allow" (అనుమతించు) లేదా "Deny" (తిరస్కరించు) అని అడుగుతుంది. కెమెరా లేదా లొకేషన్ పర్మిషన్ అవసరమైన యాప్‌లకు మాత్రమే Allow నొక్కాలి.',
    content_en: '"Allow" grants permission to an app to access phone features (like Camera or Contacts). "Deny" blocks access. Only click Allow for trusted apps.',
    tags: ['allow', 'deny', 'permission popup', 'అనుమతి', 'అలవ్', 'డినై'],
    steps_te: [
      'Allow = అనుమతించు (యాప్‌కి ఫోన్ ఫీచర్ వాడే హక్కు ఇవ్వడం).',
      'Deny = వద్దు / తిరస్కరించు (యాప్‌కి హక్కు ఇవ్వకపోవడం).',
      'టార్చ్ లైట్ యాప్ వంటివి కాంటాక్ట్స్ Permission అడిగితే Deny నొక్కడమే సురక్షితం.'
    ],
    steps_en: [
      'Allow = Grant access (gives app permission to use feature).',
      'Deny = Reject access (blocks app from accessing feature).',
      'If a simple Torch app asks for Contacts permission, always click Deny.'
    ]
  },
  {
    id: 'eng-02',
    category: 'english_phrases',
    title_te: 'ఫోన్ స్క్రీన్‌పై "Update", "Download", "Install" పదాల అర్థాలు',
    title_en: 'Meaning of "Update", "Download", and "Install"',
    content_te: 'ఈ 3 పదాలు యాప్‌లు వాడేటప్పుడు ఎప్పుడూ కనిపిస్తుంటాయి. వీటి అర్థం తెలుసుకుంటే ఫోన్ వాడకం చాలా తేలికవుతుంది.',
    content_en: 'Understanding standard digital English terms makes operating smartphones smooth and confident for beginners.',
    tags: ['update', 'download', 'install', 'అప్‌డేట్', 'డౌన్‌లోడ్', 'ఇన్‌స్టాల్'],
    steps_te: [
      'Download = ఇంటర్నెట్ నుండి ఫైల్ లేదా పాటను మీ ఫోన్‌లోకి తెచ్చుకోవడం.',
      'Install = డౌన్‌లోడ్ అయిన యాప్‌ను ఫోన్‌లో పనిచేసేలా అమర్చడం.',
      'Update = పాత యాప్‌లో కొత్త మార్పులు లేదా భద్రతా ఫీచర్లు చేర్చడం.'
    ],
    steps_en: [
      'Download = Fetching a file/app from internet onto your device storage.',
      'Install = Setting up downloaded app software on your phone.',
      'Update = Upgrading an existing app with newest features and security patches.'
    ]
  },
  {
    id: 'eng-03',
    category: 'english_phrases',
    title_te: '"OTP", "PIN", "Password" - తేడాలు ఏమిటి?',
    title_en: 'Difference between OTP, PIN, and Password',
    content_te: 'డిజిటల్ తాళాలుగా పనిచేసే ఈ 3 పదాల మధ్య తేడా తెలుసుకోవడం బ్యాంకింగ్ భద్రతకు చాలా అవసరం.',
    content_en: 'Knowing the difference between single-use OTPs, static PINs, and passwords ensures you never fall victim to fraudulent requests.',
    tags: ['otp', 'pin', 'password', 'ఓటిపి', 'పిన్', 'పాస్‌వర్డ్'],
    steps_te: [
      'OTP (One Time Password) = ఒకసారి మాత్రమే పనిచేసే 6 అంకెల రహస్య కోడ్ (SMS లో వస్తుంది).',
      'PIN (Personal Identification Number) = మీరు సెట్ చేసుకునే 4 లేదా 6 అంకెల స్థిరమైన సంఖ్య.',
      'Password = అక్షరాలు, సంఖ్యలు మరియు గుర్తులు (@#$) కలిగిన రహస్య పదం.'
    ],
    steps_en: [
      'OTP (One Time Password) = Temporary 6-digit code sent via SMS for single login.',
      'PIN = Secret 4-6 digit numeric passcode chosen by you for ATM/UPI.',
      'Password = Combination of letters, numbers, and special symbols for account safety.'
    ]
  },
  {
    id: 'eng-04',
    category: 'english_phrases',
    title_te: '"Account Locked" లేదా "Invalid Credentials" అంటే ఏమిటి?',
    title_en: 'What does "Account Locked" or "Invalid Credentials" mean?',
    content_te: 'యాప్‌లో తప్పు పాస్‌వర్డ్ కొట్టినప్పుడు ఈ హెచ్చరికలు వస్తాయి. కంగారు పడకుండా "Forgot Password" నొక్కి కొత్త పాస్‌వర్డ్ పెట్టుకోవాలి.',
    content_en: 'These error popups mean wrong password entered or security temporary lock. Tap Forgot Password to reset safely.',
    tags: ['account locked', 'invalid credentials', 'forgot password', 'అకౌంట్ లాక్', 'తప్పు పాస్‌వర్డ్'],
    steps_te: [
      'Invalid Credentials = మీరు కొట్టిన యూజర్ ఐడి లేదా పాస్‌వర్డ్ తప్పు.',
      'Account Locked = వరుసగా 3 సార్లు తప్పు పాస్‌వర్డ్ కొట్టడం వల్ల తాత్కాలికంగా లాక్ అయింది.',
      'పరిష్కారం: "Forgot Password" నొక్కి మీ మొబైల్ OTP ద్వారా కొత్తది సెట్ చేసుకోండి.'
    ],
    steps_en: [
      'Invalid Credentials = Wrong username or password typed.',
      'Account Locked = Temporarily disabled due to multiple failed password attempts.',
      'Fix: Click "Forgot Password" link and reset via mobile OTP.'
    ]
  },
  {
    id: 'eng-05',
    category: 'english_phrases',
    title_te: '"Storage Full" మరియు "Clear Cache" పదాల అర్థం',
    title_en: 'What do "Storage Full" and "Clear Cache" mean?',
    content_te: 'ఫోన్ మెమరీ నిండినప్పుడు ఈ నోటిఫికేషన్లు వస్తాయి. Clear Cache నొక్కితే తాత్కాలిక చెత్త ఫైళ్లు తొలిగిపోతాయి.',
    content_en: 'Clear Cache safely removes temporary web junk without deleting your personal photos or WhatsApp chats.',
    tags: ['storage full', 'clear cache', 'junk files', 'స్టోరేజ్ ఫుల్', 'క్యాచే'],
    steps_te: [
      'Storage Full = మీ ఫోన్ అంతర్గత మెమరీ నిండిపోయింది.',
      'Clear Cache = యాప్‌లు దాచుకున్న తాత్కాలిక చెత్త ఫైళ్లను శుభ్రం చేయడం (మీ ఫోటోలు డిలీట్ అవ్వవు).'
    ],
    steps_en: [
      'Storage Full = Internal device memory limit reached.',
      'Clear Cache = Cleans temporary application residual files safely.'
    ]
  },
  {
    id: 'eng-06',
    category: 'english_phrases',
    title_te: '"Verify", "Confirm", "Cancel" బటన్ల అర్థాలు',
    title_en: 'Meaning of "Verify", "Confirm", and "Cancel" buttons',
    content_te: 'ఏదైనా ఫారమ్ లేదా లావాదేవీ ముగించేటప్పుడు ఈ 3 బటన్లు ముఖ్యమైనవి. సరైన బటన్ ఎంచుకోవడం నేర్చుకోవాలి.',
    content_en: 'Verify validates your details, Confirm executes the transaction/action, and Cancel aborts the process immediately.',
    tags: ['verify', 'confirm', 'cancel', 'వెరిఫై', 'కన్ఫర్మ్', 'క్యాన్సిల్'],
    steps_te: [
      'Verify = మీ వివరాలు లేదా OTP నిజమైనవని సరిచూసుకోవడం.',
      'Confirm = పని చేయడానికి నా పూర్తి అంగీకారం అని ఖరారు చేయడం.',
      'Cancel = పని వద్దు అని రద్దు చేసుకోవడం.'
    ],
    steps_en: [
      'Verify = Validate identity or OTP code.',
      'Confirm = Approve and execute action.',
      'Cancel = Abort process without making changes.'
    ]
  },

  // --- 8. DIGITAL HYGIENE (6 entries) ---
  {
    id: 'hyg-01',
    category: 'digital_hygiene',
    title_te: 'ఫోన్‌కు స్క్రీన్ లాక్ (Screen Lock / Fingerprint) ఎందుకు పెట్టాలి?',
    title_en: 'Why and how to set up Screen Lock or Fingerprint?',
    content_te: 'ఫోన్ పోయినా లేదా వేరేవారు పట్టుకున్నా మీ ఫోటోలు, వాట్సాప్ చాట్‌లు, బ్యాంకింగ్ యాప్‌లు చూడకుండా ఉండటానికి స్క్రీన్ లాక్ తప్పనిసరి.',
    content_en: 'Screen Lock (PIN, Pattern, or Fingerprint) prevents unauthorized access to your private photos, WhatsApp, and financial apps if phone is misplaced.',
    tags: ['screen lock', 'fingerprint', 'pattern lock', ' privacy', 'స్క్రీన్ లాక్', 'ఫింగర్‌ప్రింట్', 'పాస్‌వర్డ్'],
    steps_te: [
      'ఫోన్ Settings > Security & Privacy కి వెళ్ళండి.',
      'Screen Lock ఎంచుకుని 4 అంకెల PIN లేదా Pattern సెట్ చేసుకోండి.',
      'ఫోన్‌లో Fingerprint ఆప్షన్ ఉంటే మీ వేలి ముద్ర నమోదు చేసుకోండి.',
      'మీ సులభమైన లాక్ పిన్ ఇతరులకు చెప్పకండి.'
    ],
    steps_en: [
      'Go to Settings > Security & Privacy on your device.',
      'Tap Screen Lock and choose PIN, Pattern, or Password.',
      'Add Fingerprint for fast and secure unlocking.',
      'Never use easy locks like 1234 or 0000.'
    ]
  },
  {
    id: 'hyg-02',
    category: 'digital_hygiene',
    title_te: 'యాప్ పర్మిషన్లు (App Permissions) ఎలా తనిఖీ చేయాలి?',
    title_en: 'How to inspect and manage App Permissions?',
    content_te: 'కొన్ని నకిలీ యాప్‌లు మీ అనుమతి లేకుండా మీ కెమెరా, కాంటాక్ట్‌లను సేకరిస్తాయి. అనవసరమైన యాప్‌లకు పర్మిషన్లు తీసివేయడం మంచిది.',
    content_en: 'Review app permissions regularly. A flashlight or calculator app has no need to access your Contacts, Location, or SMS.',
    tags: ['app permissions', 'privacy control', 'camera access', 'పర్మిషన్లు', 'యాప్ భద్రత', 'ప్రైవసీ'],
    steps_te: [
      'Settings > Apps > Permission Manager కి వెళ్ళండి.',
      'Camera, Contacts, Location పర్మిషన్లు ఏ యాప్‌లు వాడుతున్నాయో పరిశీలించండి.',
      'అనుమానాస్పద యాప్‌లకు "Don\'t Allow" ఎంచుకుని అనుమతి రద్దు చేయండి.'
    ],
    steps_en: [
      'Navigate to Settings > Apps > Permission Manager.',
      'Check which apps are accessing Camera, Microphone, Location, and Contacts.',
      'Revoke access for suspicious or unused apps by selecting "Don\'t Allow".'
    ]
  },
  {
    id: 'hyg-03',
    category: 'digital_hygiene',
    title_te: 'నకిలీ యాప్‌లను (Fake/Cloned Apps) ఎలా గుర్తుపట్టాలి?',
    title_en: 'How to spot Fake or Cloned Apps on Play Store?',
    content_te: 'అసలైన SBI, PhonePe యాప్‌ల లాగే కనిపించే నకిలీ యాప్‌లు ఉంటాయి. ఇవి డౌన్‌లోడ్ చేస్తే మీ బ్యాంక్ వివరాలు చోరీకి గురవుతాయి.',
    content_en: 'Scammers publish clone apps resembling popular bank or loan apps. Check publisher name, download count, and reviews before installing.',
    tags: ['fake apps', 'cloned apps', 'app security', 'నకిలీ యాప్‌లు', 'ప్లే స్టోర్', 'సేఫ్టీ'],
    steps_te: [
      'యాప్ డౌన్‌లోడ్ చేసేముందు దాని కింద ఉన్న Developer Name చూడండి (ఉదా: PhonePe Developer: PhonePe Private Limited).',
      'డౌన్‌లోడ్‌ల సంఖ్య కోట్లలో ఉందో లేదో సరిచూసుకోండి (నకిలీ యాప్‌లకు తక్కువ డౌన్‌లోడ్‌లు ఉంటాయి).',
      'వాట్సాప్‌లో వచ్చే .apk ఫైళ్లను ఎప్పుడూ డైరెక్ట్‌గా ఇన్‌స్టాల్ చేయకండి.'
    ],
    steps_en: [
      'Verify the official Developer Name listed under app title.',
      'Check download counts (official apps have millions/crores of downloads).',
      'Never install unknown .apk files sent via WhatsApp or Telegram.'
    ]
  },
  {
    id: 'hyg-04',
    category: 'digital_hygiene',
    title_te: 'ఉచిత పబ్లిక్ వైఫై (Free Public Wi-Fi) వాడేటప్పుడు జాగ్రత్తలు',
    title_en: 'Safety tips when using Free Public Wi-Fi networks',
    content_te: 'బస్ స్టాండులు, రైల్వే స్టేషన్లలో దొరికే ఉచిత ఓపెన్ వైఫై వాడి బ్యాంకింగ్ లావాదేవీలు లేదా UPI పేమెంట్లు చేయకూడదు.',
    content_en: 'Avoid logging into net banking or making UPI payments on open public Wi-Fi networks at bus stops or railway stations as hackers can intercept data.',
    tags: ['public wifi', 'cyber safety', 'hotspot safety', 'పబ్లిక్ వైఫై', 'ఉచిత నెట్', 'భద్రత'],
    steps_te: [
      'పబ్లిక్ వైఫై కనెక్ట్ అయినప్పుడు UPI లేదా బ్యాంకింగ్ యాప్‌లు తెరవద్దు.',
      'మీ సొంత మొబైల్ డేటా (4G/5G) ద్వారా మాత్రమే డబ్బుల లావాదేవీలు చేయండి.'
    ],
    steps_en: [
      'Do not perform UPI transactions while connected to open public Wi-Fi.',
      'Use your personal mobile cellular data for sensitive banking operations.'
    ]
  },
  {
    id: 'hyg-05',
    category: 'digital_hygiene',
    title_te: 'వాట్సాప్‌లో టూ-స్టెప్ వెరిఫికేషన్ (Two-Step Verification) ఎలా పెట్టుకోవాలి?',
    title_en: 'How to enable Two-Step Verification on WhatsApp?',
    content_te: 'మీ వాట్సాప్‌ను ఇతరులు హ్యాక్ చేయకుండా 6 అంకెల రహస్య PIN సెట్ చేసుకోవడం ద్వారా 100% రక్షణ పొందవచ్చు.',
    content_en: 'Two-Step Verification adds a 6-digit passcode lock to your WhatsApp account preventing anyone from hijacking your number.',
    tags: ['two step verification', 'whatsapp security', '2fa', 'టూ స్టెప్ వెరిఫికేషన్', 'వాట్సాప్ సెక్యూరిటీ'],
    steps_te: [
      'WhatsApp Settings > Account > Two-step verification కి వెళ్ళండి.',
      '"Turn on" పై నొక్కి 6 అంకెల రహస్య PIN నమోదు చేయండి.',
      'మీ ఈమెయిల్ ఐడి ఇచ్చి సేవ్ చేయండి.'
    ],
    steps_en: [
      'Open WhatsApp Settings > Account > Two-step verification.',
      'Tap Enable / Turn on and enter a 6-digit secret PIN.',
      'Add your email address for recovery and save settings.'
    ]
  },
  {
    id: 'hyg-06',
    category: 'digital_hygiene',
    title_te: 'ఫోన్ ఆపరేటింగ్ సిస్టమ్ (Software Update) ఎందుకు అప్‌డేట్ చేయాలి?',
    title_en: 'Why is it important to update Phone System Software?',
    content_te: 'ఫోన్‌లో వచ్చే "System Update" నోటిఫికేషన్‌ను నిర్లక్ష్యం చేయవద్దు. అప్‌డేట్ చేయడం వల్ల వైరస్‌లు, సైబర్ దాడుల నుండి ఫోన్‌కి రక్షణ పెరుగుతుంది.',
    content_en: 'Regular Android system software updates patch security vulnerabilities and protect your smartphone against malware attacks.',
    tags: ['software update', 'system update', 'security patch', 'సాఫ్ట్‌వేర్ అప్‌డేట్', 'సిస్టమ్ అప్‌డేట్'],
    steps_te: [
      'Settings > System Update / Software Update కి వెళ్ళండి.',
      'వైఫై కనెక్ట్ చేసి "Download & Install" నొక్కండి.',
      'అప్‌డేట్ అయ్యేటప్పుడు ఫోన్ ఆఫ్ చేయకుండా ఛార్జింగ్ ఉంచండి.'
    ],
    steps_en: [
      'Go to Settings > System Update / Software Update.',
      'Connect to Wi-Fi and tap Download & Install.',
      'Keep phone battery above 50% during installation.'
    ]
  },

  // ============================================================
  // NEW ENTRIES — Added after Step 2 Coverage Gap Analysis
  // Confirmed genuine gaps via retrieval scorer (score < 12 on all existing entries)
  // ============================================================

  // --- NAVIGATION: Additional entries ---
  {
    id: 'nav-08',
    category: 'navigation',
    title_te: 'ఫోన్ భాష (Language) తెలుగులోకి లేదా ఇంగ్లీష్‌లోకి ఎలా మార్చాలి?',
    title_en: 'How to change Phone Language to Telugu or English?',
    content_te: 'ఫోన్ భాష తెలుగులో కావాలంటే Settings (సెట్టింగ్స్) లో వెళ్ళి System > Language & Input > Language లో Telugu (India) ఎంచుకోవాలి. ఇది Airtel, Jio, మరియు Samsung ఫోన్లన్నింటిలో పనిచేస్తుంది.',
    content_en: 'Change your phone display language to Telugu or English by going to Settings > System > Language & Input > Language and selecting Telugu (India) or English (India).',
    tags: ['language settings', 'change language', 'telugu language', 'phone language', 'language change', 'భాష మార్చు', 'తెలుగు భాష', 'language setting telugu'],
    steps_te: [
      'Settings (సెట్టింగ్స్) తెరవండి.',
      'System > Language & Input లేదా General Management కి వెళ్ళండి.',
      'Language పై నొక్కండి.',
      'Add Language నొక్కి Telugu (India) ఎంచుకోండి.',
      'పైకి డ్రాగ్ చేసి Telugu ని మొదటి స్థానానికి తీసుకురండి.'
    ],
    steps_en: [
      'Open Settings on your phone.',
      'Tap System > Language & Input (or General Management on Samsung).',
      'Tap Language > Add a Language.',
      'Select Telugu (India) from the list.',
      'Drag Telugu to the top position to make it the primary language.'
    ]
  },
  {
    id: 'nav-09',
    category: 'navigation',
    title_te: 'ఫోన్ రింగ్‌టోన్ (Ringtone) ఎలా మార్చాలి?',
    title_en: 'How to change phone Ringtone on Android?',
    content_te: 'మీ ఫోన్ రింగ్‌టోన్ మార్చడానికి Settings > Sound లేదా Sounds & Vibration లో వెళ్ళి Phone Ringtone ఎంచుకోవచ్చు. WhatsApp, Alarm, మరియు Message రింగ్‌టోన్‌లు కూడా అక్కడ మార్చవచ్చు.',
    content_en: 'Change your Android ringtone by going to Settings > Sound > Phone Ringtone and selecting from the list or setting a music file from your gallery.',
    tags: ['ringtone', 'change ringtone', 'phone ringtone', 'notification sound', 'రింగ్టోన్', 'ringtone change', 'ringtone set', 'sound settings'],
    steps_te: [
      'Settings తెరిచి Sound లేదా Sounds & Vibration పై నొక్కండి.',
      'Phone Ringtone ఎంచుకోండి.',
      'జాబితాలో నుండి మీకు నచ్చిన రింగ్‌టోన్ ఎంచుకోండి.',
      'OK లేదా Apply నొక్కి సేవ్ చేయండి.'
    ],
    steps_en: [
      'Open Settings and tap Sound or Sounds & Vibration.',
      'Tap Phone Ringtone from the menu.',
      'Browse the list and select your preferred ringtone.',
      'Tap OK or Apply to save your selection.'
    ]
  },
  {
    id: 'nav-10',
    category: 'navigation',
    title_te: 'ఫోన్ స్క్రీన్‌షాట్ (Screenshot) ఎలా తీయాలి?',
    title_en: 'How to take a Screenshot on Android phone?',
    content_te: 'ఫోన్ స్క్రీన్‌పై ఉన్న విషయాన్ని ఫోటోగా సేవ్ చేయడాన్ని స్క్రీన్‌షాట్ అంటారు. బ్యాంకు SMS, అడ్రస్సు లేదా ముఖ్యమైన సమాచారం సేవ్ చేసుకోవడానికి ఇది ఉపయోగపడుతుంది.',
    content_en: 'A screenshot captures whatever is visible on your screen and saves it as a photo in your Gallery. Useful for saving bank messages, addresses, or important forms.',
    tags: ['screenshot', 'screen capture', 'capture screen', 'స్క్రీన్ షాట్', 'screenshot android', 'screen shot phone'],
    steps_te: [
      'Volume Down బటన్ + Power బటన్ ఒకేసారి 2 సెకన్లు నొక్కి పట్టుకోండి.',
      'స్క్రీన్ ఫ్లాష్ అవుతుంది — అది స్క్రీన్‌షాట్ సేవ్ అయిన సంకేతం.',
      'Gallery లేదా Photos యాప్‌లో "Screenshots" ఫోల్డర్‌లో చూడవచ్చు.',
      'Samsung ఫోన్లలో: Palm swipe లేదా Power + Volume Down పనిచేస్తుంది.'
    ],
    steps_en: [
      'Press the Volume Down button and Power button simultaneously for 2 seconds.',
      'Screen will flash briefly to confirm screenshot was saved.',
      'Find your screenshot in Gallery > Screenshots folder.',
      'On Samsung: you can also swipe your palm across the screen to capture.'
    ]
  },
  {
    id: 'nav-11',
    category: 'navigation',
    title_te: 'Google Photos లో ఫోటోలు Backup చేసుకోవడం ఎలా?',
    title_en: 'How to automatically backup Photos to Google Photos?',
    content_te: 'Google Photos యాప్‌లో Auto Backup ఆన్ చేస్తే మీ అన్ని ఫోటోలు ఉచితంగా Google లో సేవ్ అవుతాయి. ఫోన్ పోయినా, పాత అయినా ఫోటోలు భద్రంగా ఉంటాయి.',
    content_en: 'Enable Google Photos backup to automatically save all your photos to Google cloud for free. Photos remain safe even if your phone is lost or broken.',
    tags: ['google photos', 'backup photos', 'photo backup', 'cloud backup', 'గూగుల్ ఫోటోస్', 'photos backup', 'auto backup', 'save photos google'],
    steps_te: [
      'Google Photos యాప్ ఓపెన్ చేయండి.',
      'పైన ఉండే మీ Profile Photo నొక్కండి.',
      'Photos settings > Backup పై నొక్కండి.',
      'Backup ని On చేయండి. Wi-Fi ఉన్నప్పుడు మాత్రమే Backup వస్తుంది.'
    ],
    steps_en: [
      'Open the Google Photos app on your phone.',
      'Tap your Profile photo in the top right corner.',
      'Go to Photos settings > Backup.',
      'Toggle Backup to ON. Backup will use Wi-Fi to save photos automatically.'
    ]
  },
  {
    id: 'nav-12',
    category: 'navigation',
    title_te: 'ఫోన్ స్క్రీన్ పగిలిపోతే (Cracked Screen) ఏం చేయాలి?',
    title_en: 'What to do if your phone screen is cracked?',
    content_te: 'ఫోన్ స్క్రీన్ పగిలినా మీ డేటా మరియు ఫోటోలు సురక్షితంగా ఉంటాయి. ముందు Google Photos Backup ఆన్ చేయండి, తర్వాత దగ్గరలోని అధికారిక సర్వీస్ సెంటర్‌కు వెళ్ళండి.',
    content_en: 'A cracked phone screen does not mean data is lost. Your photos and contacts remain safe. Back up immediately via Google Photos, then visit an authorized service center.',
    tags: ['cracked screen', 'broken screen', 'screen repair', 'phone screen damaged', 'స్క్రీన్ పగిలింది', 'screen problem', 'display repair'],
    steps_te: [
      'ముందు Google Photos లో ఫోటోలు Backup చేసుకోండి (Wi-Fi లో).',
      'పగులు అల్యూమినియం ఫాయిల్ లేదా టేప్ తో తాత్కాలికంగా మూసుకోండి.',
      'మీ ఫోన్ బ్రాండ్ అధికారిక Service Center (Samsung, Vivo, Oppo మొదలైనవి) కి వెళ్ళండి.',
      'రోడ్‌సైడ్ నకిలీ రిపేర్ షాపులలో వేయకండి — డేటా చోరీ ప్రమాదం ఉంది.'
    ],
    steps_en: [
      'Immediately back up photos via Google Photos on Wi-Fi.',
      'Temporarily cover crack with protective tape or screen guard.',
      'Visit the official brand service center (Samsung Care, Mi Service etc.).',
      'Avoid unverified roadside repair shops to prevent data theft.'
    ],
    safetyWarning_te: '🔒 జాగ్రత్త: రిపేర్ సెంటర్‌లో ఫోన్ ఇచ్చేముందు Photos మరియు Contacts Backup తీసుకోండి.',
    safetyWarning_en: '🔒 Safety: Always backup your data before handing your phone to any repair shop.'
  },
  {
    id: 'nav-13',
    category: 'navigation',
    title_te: 'Jio / Airtel / Vi లో Mobile Data Balance ఎలా చెక్ చేయాలి?',
    title_en: 'How to check Mobile Data Balance on Jio, Airtel, or Vi?',
    content_te: 'మీ మొబైల్ డేటా ఎంత మిగిలిందో తెలుసుకోవడానికి మీ నెట్‌వర్క్ ప్రొవైడర్ యాప్ (MyJio, Airtel Thanks, Vi) వాడవచ్చు లేదా USSD కోడ్ డయల్ చేయవచ్చు.',
    content_en: 'Check remaining mobile data balance using your carrier app (MyJio, Airtel Thanks, Vi App) or dial a USSD code from the Phone Dialer.',
    tags: ['data balance', 'mobile data', 'check data balance', 'jio balance', 'airtel balance', 'vi balance', 'net balance', 'డేటా బ్యాలెన్స్', 'data check', 'internet balance', 'remaining data'],
    steps_te: [
      'Jio వాడకర్తలు: ఫోన్ డయలర్‌లో *333# డయల్ చేయండి లేదా MyJio యాప్ తెరవండి.',
      'Airtel వాడకర్తలు: *121*8# డయల్ చేయండి లేదా Airtel Thanks యాప్ తెరవండి.',
      'Vi వాడకర్తలు: *199# డయల్ చేయండి లేదా Vi App తెరవండి.',
      'ప్రతీ యాప్ మీ ప్రస్తుత డేటా మరియు Validity తేదీ చూపిస్తుంది.'
    ],
    steps_en: [
      'Jio users: Dial *333# from your phone dialer OR open the MyJio app.',
      'Airtel users: Dial *121*8# OR open the Airtel Thanks app.',
      'Vi users: Dial *199# OR open the Vi App.',
      'Each app shows current remaining data in GB/MB and plan expiry date.'
    ]
  },
  {
    id: 'nav-14',
    category: 'navigation',
    title_te: 'WhatsApp లో Deleted Messages మరియు Photos Recover ఎలా చేయాలి?',
    title_en: 'How to recover deleted WhatsApp messages or photos?',
    content_te: 'వాట్సాప్‌లో తప్పుగా డిలీట్ చేసిన మెసేజ్‌లు లేదా ఫోటోలు కొన్నిసార్లు Google Drive Backup నుండి రికవర్ చేయవచ్చు. WhatsApp మళ్లీ ఇన్‌స్టాల్ చేసి Backup Restore చేయాలి.',
    content_en: 'Accidentally deleted WhatsApp messages may be recovered by reinstalling WhatsApp and restoring from Google Drive backup — if backup was enabled previously.',
    tags: ['whatsapp deleted', 'recover messages', 'deleted whatsapp', 'whatsapp backup', 'restore whatsapp', 'వాట్సాప్ డిలీట్', 'whatsapp recovery', 'whatsapp restore'],
    steps_te: [
      'ముందు మీ Google Drive లో WhatsApp Backup ఉందో లేదో చూడండి.',
      'WhatsApp Settings > Chats > Chat Backup నొక్కి Backup On ఉందో తనిఖీ చేయండి.',
      'WhatsApp అన్‌ఇన్‌స్టాల్ చేసి మళ్లీ Play Store నుండి ఇన్‌స్టాల్ చేయండి.',
      'నంబర్ verify చేసిన తర్వాత "Restore Backup" ఆప్షన్ వస్తుంది — Restore నొక్కండి.'
    ],
    steps_en: [
      'First check: WhatsApp > Settings > Chats > Chat Backup to see last backup date.',
      'Uninstall WhatsApp fully from your phone.',
      'Reinstall WhatsApp from Google Play Store.',
      'After verifying your mobile number, tap "Restore Backup" when prompted.'
    ]
  },
  {
    id: 'pay-07',
    category: 'payments',
    title_te: 'UPI Lite అంటే ఏమిటి? సాధారణ UPI తో తేడా ఏమిటి?',
    title_en: 'What is UPI Lite and how is it different from regular UPI?',
    content_te: 'UPI Lite అనేది చిన్న చెల్లింపులు (₹500 వరకు) PIN లేకుండా వేగంగా చేయడానికి అనుమతించే ఫీచర్. ఇంటర్నెట్ నెమ్మదిగా ఉన్నప్పుడు కూడా పనిచేస్తుంది. Google Pay మరియు BHIM యాప్‌లలో UPI Lite ఉంది.',
    content_en: 'UPI Lite allows payments up to ₹500 without entering your UPI PIN — faster and works even on slow internet. Available on Google Pay and BHIM apps.',
    tags: ['upi lite', 'upi lite wallet', 'small payment upi', 'upi without pin', 'upi lite balance', 'యుపిఐ లైట్', 'upi lite enable'],
    safetyWarning_te: '🔒 గమనిక: UPI Lite వాలెట్‌లో ఉన్న మొత్తం పరిమితం (max ₹2000). మొత్తం bank balance ఇందులో ఉండదు.',
    safetyWarning_en: '🔒 Note: UPI Lite wallet holds a limited amount (max ₹2000 at a time) — not your full bank balance.',
    steps_te: [
      'Google Pay తెరిచి Settings > UPI Lite కి వెళ్ళండి.',
      'Enable UPI Lite నొక్కండి మరియు మీ బ్యాంక్ ఎంచుకోండి.',
      'Wallet లో Load చేయాల్సిన మొత్తం ఎంచుకుని UPI PIN ఇవ్వండి.',
      'లోడ్ అయిన తర్వాత ₹500 వరకు చెల్లింపులు PIN లేకుండా చేయవచ్చు.'
    ],
    steps_en: [
      'Open Google Pay and go to Settings > UPI Lite.',
      'Tap Enable UPI Lite and select your bank.',
      'Choose an amount to load into the UPI Lite wallet and authorize with PIN.',
      'Now make payments up to ₹500 without entering PIN each time.'
    ]
  },
  {
    id: 'pay-08',
    category: 'payments',
    title_te: 'ఫోన్ కాంటాక్ట్ లేదా మొబైల్ నంబర్‌కు UPI ద్వారా డబ్బులు ఎలా పంపాలి?',
    title_en: 'How to send money to a Phone Contact or Mobile Number via UPI?',
    content_te: 'గూగుల్ పే, ఫోన్‌పే లేదా పేటీఎంలలో మీ ఫోన్‌లోని కాంటాక్ట్స్ (మొబైల్ నంబర్) ఎంచుకుని నేరుగా వారి బ్యాంక్ ఖాతాకు డబ్బులు పంపవచ్చు. డబ్బులు పంపేముందు పేరు మరియూ నంబర్ 2 సార్లు తనిఖీ చేయాలి.',
    content_en: 'You can send money directly to any mobile number or phone contact registered on UPI (Google Pay, PhonePe, Paytm). Always double-check the recipient name on screen before entering your UPI PIN.',
    tags: ['send money contact', 'pay phone number', 'mobile number payment', 'contact payment', 'కాంటాక్ట్', 'ఫోన్ కాంటాక్ట్', 'ఫోన్ నంబర్ డబ్బులు', 'నంబర్ కి పంపాలి', 'మొబైల్ నంబర్ పేమెంట్', 'gpay contact', 'phonepe contact', 'కాంటాక్ట్ పేమెంట్', 'డబ్బులు పంపాలి', 'send money to contact'],
    safetyWarning_te: '⚠️ భద్రతా సూచన: డబ్బు పంపేముందు స్క్రీన్‌పై కనిపించే వ్యక్తి అసలు పేరు (Verified Bank Account Name) సరిచూసుకోండి. పొరపాటున వేరే నంబర్‌కి వెళ్తే రికవరీ కష్టం.',
    safetyWarning_en: '⚠️ Safety Tip: Always verify the bank account holder name displayed on screen before typing your secret UPI PIN.',
    steps_te: [
      'Google Pay, PhonePe లేదా Paytm యాప్ తెరవండి.',
      '"Pay Phone Number" లేదా "Send Money to Contact" పై నొక్కండి.',
      'మీ కాంటాక్ట్స్ నుండి నంబర్ ఎంచుకోండి లేదా 10 అంకెల మొబైల్ నంబర్ టైప్ చేయండి.',
      'అమౌంట్ నమోదు చేసి, చూపిస్తున్న పేరు సరిచూసుకుని మీ 4 లేదా 6 అంకెల UPI PIN నొక్కండి.'
    ],
    steps_en: [
      'Open Google Pay, PhonePe, or Paytm app.',
      'Select "Pay Phone Number" or "Send to Contact".',
      'Pick a contact from your phone address book or enter a 10-digit mobile number.',
      'Enter the payment amount, confirm the recipient name, and enter your secret UPI PIN.'
    ]
  }
,
  {
    id: 'gov-10',
    category: 'gov_docs',
    title_te: 'ప్రభుత్వ పథకాలు (Government Schemes) ఆన్‌లైన్‌లో ఎలా వెతకాలి?',
    title_en: 'How to search for Government Schemes online?',
    content_te: 'కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ పథకాలను తెలుసుకోవడానికి "myScheme" (myscheme.gov.in) అనే ప్రభుత్వ వెబ్‌సైట్ ఉపయోగపడుతుంది. ఇందులో మీ వివరాలు నమోదు చేస్తే మీకు సరిపోయే పథకాలు చూపిస్తుంది.',
    content_en: 'You can discover both central and state government schemes easily using the official "myScheme" portal (myscheme.gov.in). It filters schemes based on your eligibility.',
    tags: ['schemes', 'government schemes', 'myscheme', 'welfare', 'ప్రభుత్వ పథకాలు', 'పథకాలు వెతకడం', 'సంక్షేమ పథకాలు'],
    safetyWarning_te: '⚠️ హెచ్చరిక: పథకాల పేరుతో డబ్బులు అడిగే నకిలీ వెబ్‌సైట్‌లను నమ్మకండి. ఎల్లప్పుడూ .gov.in తో ఉన్న వెబ్‌సైట్‌లనే వాడండి.',
    safetyWarning_en: '⚠️ Alert: Never pay money to register for free government schemes. Always use official .gov.in websites.',
    steps_te: [
      'గూగుల్‌లో "myScheme.gov.in" అని టైప్ చేసి వెబ్‌సైట్ తెరవండి.',
      '"Find Schemes for You" (మీ కోసం పథకాలు వెతకండి) పై నొక్కండి.',
      'మీ వయస్సు, రాష్ట్రం, ఆదాయం వంటి వివరాలు ఎంచుకోండి.',
      'మీకు అర్హత ఉన్న పథకాలు మరియు దరఖాస్తు విధానం స్క్రీన్ పై కనిపిస్తుంది.'
    ],
    steps_en: [
      'Open myscheme.gov.in on your phone browser.',
      'Tap on "Find Schemes for You".',
      'Answer basic questions like your age, state, and income category.',
      'View eligible schemes and read the application process.'
    ]
  },
  {
    id: 'gov-11',
    category: 'gov_docs',
    title_te: 'రాష్ట్ర సంక్షేమ పథకాలకు (ఉదా: అమ్మ ఒడి, ఫీజు రీయింబర్స్‌మెంట్) ఎలా దరఖాస్తు చేయాలి?',
    title_en: 'How to apply for State Welfare Schemes (e.g. Amma Vodi, Fee Reimbursement)?',
    content_te: 'రాష్ట్ర ప్రభుత్వ పథకాలైన అమ్మ ఒడి లేదా ఫీజు రీయింబర్స్‌మెంట్ కోసం సాధారణంగా మీ గ్రామ/వార్డు సచివాలయం లేదా మీ కళాశాల ద్వారా దరఖాస్తు చేసుకోవాలి. నవశకం (Navasakam) లేదా సంబంధిత పోర్టల్స్‌లో వివరాలు చూడవచ్చు.',
    content_en: 'For state welfare schemes like Amma Vodi or Fee Reimbursement, applications are usually processed through your local Gram/Ward Sachivalayam or educational institution. Keep your Aadhaar and Rice Card ready.',
    tags: ['amma vodi', 'fee reimbursement', 'state scheme', 'sachivalayam', 'అమ్మ ఒడి', 'ఫీజు రీయింబర్స్‌మెంట్', 'సచివాలయం', 'రాష్ట్ర పథకాలు'],
    safetyWarning_te: '🔒 సూచన: దరఖాస్తు కోసం మీ ఆధార్ లేదా బ్యాంక్ వివరాలను కేవలం అధికారిక సచివాలయ సిబ్బందికి లేదా మీ కాలేజీకి మాత్రమే ఇవ్వండి.',
    safetyWarning_en: '🔒 Tip: Only submit your Aadhaar and bank details to official Sachivalayam staff or your college administration.',
    steps_te: [
      'మీకు అర్హత ఉందో లేదో తెలుసుకోవడానికి మీ దగ్గరి గ్రామ/వార్డు సచివాలయానికి వెళ్లండి.',
      'మీ వాలంటీర్ ద్వారా అవసరమైన పత్రాలు (ఆధార్, రేషన్ కార్డు, బ్యాంక్ పాస్‌బుక్) సమర్పించండి.',
      'మీ దరఖాస్తు స్థితిని ప్రభుత్వ అధికారిక వెబ్‌సైట్ లేదా సచివాలయంలో ఎప్పటికప్పుడు తెలుసుకోవచ్చు.'
    ],
    steps_en: [
      'Visit your nearest Gram/Ward Sachivalayam to check your eligibility.',
      'Submit necessary documents (Aadhaar, Rice Card, Bank Passbook) through your volunteer.',
      'Track your application status on the official state portal or at the Sachivalayam.'
    ]
  },
  {
    id: 'gov-12',
    category: 'gov_docs',
    title_te: 'వృద్ధాప్య / వితంతు పింఛను (Pension) కు దరఖాస్తు చేయడం ఎలా?',
    title_en: 'How to apply for Old Age / Widow Pension?',
    content_te: 'వృద్ధాప్య, వితంతు లేదా వికలాంగుల పింఛను కోసం మీ గ్రామ పంచాయతీ కార్యాలయం లేదా వార్డు సచివాలయంలో దరఖాస్తు చేసుకోవాలి. దీని కోసం సరైన వయసు మరియు ఆదాయ ధృవీకరణ పత్రాలు అవసరం.',
    content_en: 'To apply for Old Age, Widow, or Disability pension, you need to submit an application at your local Gram Panchayat or Ward Sachivalayam along with age and income proofs.',
    tags: ['pension', 'old age pension', 'widow pension', 'పింఛను', 'పెన్షన్', 'వృద్ధాప్య పింఛను', 'వితంతు పెన్షన్'],
    safetyWarning_te: '⚠️ గుర్తుంచుకోండి: పింఛను మంజూరు చేయిస్తామని ఎవరైనా మధ్యవర్తులు డబ్బులు అడిగితే ఇవ్వకండి.',
    safetyWarning_en: '⚠️ Remember: Do not pay bribes to middlemen promising to get your pension approved.',
    steps_te: [
      'సచివాలయం లేదా పంచాయతీ కార్యాలయం నుండి పింఛను దరఖాస్తు ఫారం తీసుకోండి.',
      'ఫారంలో వివరాలు నింపి, ఆధార్ కాపీ, రేషన్ కార్డు కాపీ, జనన ధృవీకరణ లేదా డాక్టర్ సర్టిఫికెట్ జత చేయండి.',
      'అధికారులకు ఫారం సమర్పించి, రసీదు (Acknowledgement) తీసుకోండి.'
    ],
    steps_en: [
      'Collect the pension application form from your Sachivalayam or Panchayat office.',
      'Fill the form and attach copies of Aadhaar, Ration Card, and age/medical certificates.',
      'Submit the form to the concerned official and collect your acknowledgement receipt.'
    ]
  },

  // --- AP-SPECIFIC GOVERNMENT SCHEMES (Task #1) ---
  {
    id: 'gov-ap-01',
    category: 'gov_docs',
    title_te: 'ఆంధ్రప్రదేశ్ జగనన్న అమ్మ ఒడి (Amma Vodi) పథకం వివరాలు & అర్హత చెక్',
    title_en: 'AP Jagananna Amma Vodi Scheme details & Mother Bank Account DBT',
    content_te: 'ఆంధ్రప్రదేశ్ ప్రభుత్వ "అమ్మ ఒడి" పథకం ద్వారా బడికి వెళ్లే పిల్లల తల్లులకు ఏడాదికి రూ.15,000 ఆర్థిక సహాయం అందిస్తారు. ఈ నిధులు నేరుగా తల్లుల ఆధార్‌కి లింక్ అయిన బ్యాంక్ ఖాతాలో (DBT) జమ అవుతాయి.',
    content_en: 'Under the AP Amma Vodi scheme, mothers sending their children to government/recognized schools receive ₹15,000 financial assistance annually directly transferred via Aadhaar-enabled DBT.',
    tags: ['amma vodi', 'jagananna amma vodi', 'ap scheme', 'school financial assistance', 'mother bank account', 'dbt', 'అమ్మ ఒడి', 'జగనన్న అమ్మ ఒడి', 'ఆంధ్రప్రదేశ్', 'బడి పిల్లలు', 'తల్లి ఖాతా', 'డబ్బులు'],
    steps_te: [
      'పాఠశాలలో విద్యార్థి ఆధార్ మరియు తల్లి బ్యాంక్ ఖాతా వివరాలను హెడ్‌మాస్టర్ వద్ద నమోదు చేయించాలి.',
      'తల్లి బ్యాంక్ అకౌంట్ ఆధార్ సీడెడ్ పేమెంట్ (Aadhaar Seeded DBT) తో లింక్ అయిందో లేదో చూడాలి.',
      'నవశకం పోర్టల్ (nbm.ap.gov.in) లేదా గ్రామ/వార్డు సచివాలయంలో బెనిఫిషియరీ లిస్ట్‌లో పేరు సరిచూసుకోవాలి.',
      'అర్హత ఉన్న తల్లుల అకౌంట్‌కు నేరుగా నిధులు జమ అవుతాయి.'
    ],
    steps_en: [
      'Ensure child Aadhaar and mother bank account details are verified at school.',
      'Confirm mother\'s bank account is linked to Aadhaar for Direct Benefit Transfer (DBT).',
      'Check eligible beneficiary list at NBM portal (nbm.ap.gov.in) or Grama Sachivalayam.',
      'Funds are directly transferred to the mother\'s Aadhaar-linked bank account.'
    ],
    safetyWarning_te: '⚠️ గమనిక: అమ్మ ఒడి నిధుల కోసం ఎలాంటి మధ్యవర్తులకు డబ్బులు ఇవ్వకూడదు. సచివాలయ సంక్షేమ సహాయకుడిని మాత్రమే సంప్రదించండి.',
    safetyWarning_en: '⚠️ Note: Never pay money to middlemen for Amma Vodi registration. Contact your local Grama/Ward Sachivalayam Welfare Assistant directly.'
  },
  {
    id: 'gov-ap-02',
    category: 'gov_docs',
    title_te: 'ఆంధ్రప్రదేశ్ జగనన్న విద్యా దీవెన (Vidya Deevena) ఫీజు రీయింబర్స్‌మెంట్',
    title_en: 'AP Jagananna Vidya Deevena 100% Tuition Fee Reimbursement Scheme',
    content_te: 'జగనన్న విద్యా దీవెన పథకం కింద AP ప్రభుత్వం ITI, పాలిటెక్నిక్, డిగ్రీ, B.Tech మరియు మెడికల్ చదివే విద్యార్థులకు 100% పూర్తి ట్నూషన్ ఫీజు రీయింబర్స్‌మెంట్ అందిస్తుంది. ఈ డబ్బులు తల్లుల ఖాతాల్లో 4 విడతలలో జమ చేస్తారు.',
    content_en: 'Jagananna Vidya Deevena provides 100% full tuition fee reimbursement for ITI, Polytechnic, Degree, B.Tech, and Medical students in Andhra Pradesh, credited directly into mothers\' accounts in quarterly installments.',
    tags: ['vidya deevena', 'jagananna vidya deevena', 'tuition fee reimbursement', 'ap fee reimbursement', 'college fee', 'btech degree fee', 'విద్యా దీవెన', 'జగనన్న విద్యా దీవెన', 'ఫీజు రీయింబర్స్‌మెంట్', 'కాలేజీ ఫీజు'],
    steps_te: [
      'జ్ఞానభూమి (jnanabhumi.ap.gov.in) పోర్టల్‌లో విద్యార్థి కళాశాల ద్వారా దరఖాస్తు చేసుకోవాలి.',
      'తల్లి బ్యాంక్ ఖాతా మరియు ఆధార్ క్యూఆర్ కోడ్ వెరిఫికేషన్ పూర్తి చేయాలి.',
      'ప్రతి త్రైమాసికంలో తల్లుల ఖాతాల్లో జమ అయిన ఫీజును 7 రోజుల్లోగా కాలేజీ మేనేజ్‌మెంట్‌కు చెల్లించాలి.',
      'స్టేటస్ తెలుసుకోవడానికి జ్ఞానభూమి లేదా NBM పోర్టల్‌లో ఆధార్ నంబర్ కొట్టి చూడవచ్చు.'
    ],
    steps_en: [
      'Apply through college management on JnanaBhumi portal (jnanabhumi.ap.gov.in).',
      'Complete mother\'s bank account Aadhaar link verification.',
      'Fee is released quarterly to mother\'s account and must be transferred to college within 7 days.',
      'Check payment status on JnanaBhumi or NBM portal using Aadhaar number.'
    ]
  },
  {
    id: 'gov-ap-03',
    category: 'gov_docs',
    title_te: 'ఆంధ్రప్రదేశ్ ఆదరణ (Adarana 3.0) పథకం — చేతివృత్తులు & BC/SC/ST కు సహాయం',
    title_en: 'AP Adarana 3.0 Scheme — Support & Modern Toolkits for Artisans & BC/SC/ST/BPL Families',
    content_te: 'ఆదరణ 3.0 పథకం ద్వారా ఆంధ్రప్రదేశ్‌లోని చేతివృత్తుల వారు, కల్లు గీత కార్మికులు, రజకులు, నయీ బ్రాహ్మణులు, BC/SC/ST/మైనారిటీ మరియు BPL కుటుంబాలకు ఆధునిక పనిముట్లు, టూల్‌కిట్స్ మరియు సబ్సిడీ రుణాలు అందిస్తారు.',
    content_en: 'AP Adarana 3.0 Scheme supports traditional artisans, toddy tappers, BC/SC/ST/Minority, and BPL families by providing modern machinery, work toolkits, and subsidized financial support.',
    tags: ['adarana', 'adarana 3.0', 'ap artisans', 'toddy tappers', 'bc sc st welfare', 'toolkits scheme', 'ఆదరణ', 'ఆదరణ 3.0', 'చేతివృత్తులు', 'కల్లు గీత కార్మికులు', 'పనిముట్లు', 'సబ్సిడీ'],
    steps_te: [
      'గ్రామ/వార్డు సచివాలయంలో సంక్షేమ సహాయకుడిని (Welfare Assistant) కలవండి.',
      'మీ కుల ధృవీకరణ పత్రం (Caste Certificate) మరియు ఆదాయ ధృవీకరణ పత్రం అందించండి.',
      'మీ వృత్తికి సంబంధించిన ఆధునిక టూల్‌కిట్ / యంత్ర పరికరాల ఎంపిక చేసుకోండి.',
      'దరఖాస్తు ఆమోదం పొందాక సబ్సిడీ పనిముట్లు మంజూరు అవుతాయి.'
    ],
    steps_en: [
      'Visit your local Grama/Ward Sachivalayam welfare desk.',
      'Submit Caste Certificate, Income Certificate, and Aadhaar card.',
      'Select the relevant traditional trade toolkit or equipment required for your trade.',
      'Approved applicants receive subsidized modern machinery and toolkits.'
    ]
  },
  {
    id: 'gov-ap-04',
    category: 'gov_docs',
    title_te: 'ఆంధ్రప్రదేశ్ అన్నదాత సుఖీభవ (Annadata Sukhibhava) రైతు ఆర్థిక సహాయం',
    title_en: 'AP Annadata Sukhibhava Scheme — State Farmer Financial Support (₹2,000/yr)',
    content_te: 'అన్నదాత సుఖీభవ పథకం ద్వారా ఆంధ్రప్రదేశ్‌లోని ప్రతి రైతు కుటుంబానికి కేంద్ర పిఎం-కిసాన్ సాయంతో పాటు అదనంగా రాష్ట్ర ప్రభుత్వ ఆర్థిక సహాయం రూ.2,000/ఏడాది నేరుగా బ్యాంక్ ఖాతాలో జమ అవుతుంది.',
    content_en: 'AP Annadata Sukhibhava is a state farmer support scheme complementing PM-Kisan by providing additional financial assistance per year directly to Andhra Pradesh farmers\' bank accounts.',
    tags: ['annadata sukhibhava', 'ap farmer scheme', 'annadata', 'farmer assistance ap', 'ap kisan', 'అన్నదాత సుఖీభవ', 'రైతు పథకం', 'ఆంధ్రప్రదేశ్ రైతులు', 'వ్యవసాయ సాయం'],
    steps_te: [
      'మీ పొలం పట్టాదార్ పాస్‌పుస్తకం మరియు ఆధార్ వివరాలు రైతు సేవా కేంద్రం (RSK) లో నమోదు చేయించండి.',
      'మీ బ్యాంక్ అకౌంట్ e-KYC మరియు ఆధార్ సీడింగ్ పూర్తయిందో లేదో చూడండి.',
      'రైతు భరోసా / అన్నదాత సుఖీభవ పోర్టల్ లేదా సచివాలయంలో ఎలిజిబిలిటీ లిస్ట్ తనిఖీ చేయండి.',
      'డబ్బులు పడినట్లు మొబైల్ SMS లేదా బ్యాంక్ స్టేట్‌మెంట్ ద్వారా నిర్ధారించుకోండి.'
    ],
    steps_en: [
      'Register land pattadar passbook and Aadhaar at your local Rythu Seva Kendram (RSK).',
      'Ensure bank account has completed e-KYC and Aadhaar DBT seeding.',
      'Check eligibility list at your village RSK or official AP agriculture portal.',
      'Receive installment updates via official SMS alert on registered mobile.'
    ]
  },
  {
    id: 'gov-ap-05',
    category: 'gov_docs',
    title_te: 'AP నవశకం NBM పోర్టల్ (nbm.ap.gov.in) లో పథకాల స్టేటస్ ఎలా తనిఖీ చేయాలి?',
    title_en: 'How to check AP Scheme Application Status on NBM Portal (nbm.ap.gov.in)?',
    content_te: 'ఆంధ్రప్రదేశ్ నవశకం లబ్ధిదారుల నిర్వహణ పోర్టల్ (NBM Portal - nbm.ap.gov.in) ద్వారా మీ అమ్మ ఒడి, విద్యా దీవెన, రైతు పథకాలు మరియు ఇతర సంక్షేమ పథకాల దరఖాస్తు స్టేటస్ ఫోన్‌లోనే ఉచితంగా చూడవచ్చు.',
    content_en: 'The Navasakam Beneficiary Management (NBM) portal at nbm.ap.gov.in allows citizens of Andhra Pradesh to track the application approval and payment disbursement status of all AP welfare schemes.',
    tags: ['nbm portal', 'nbm.ap.gov.in', 'navasakam', 'ap scheme status check', 'status check ap', 'application status', 'నవశకం', 'NBM పోర్టల్', 'స్టేటస్ చెక్', 'పథకం స్టేటస్', 'ఆధార్ నంబర్'],
    steps_te: [
      'మీ ఫోన్ బ్రౌజర్‌లో nbm.ap.gov.in వెబ్‌సైట్ ఓపెన్ చేయండి.',
      '"Scheme Application Status" లేదా "Citizen Corner" ఆప్షన్‌పై నొక్కండి.',
      'మీ పథకం పేరు (అమ్మ ఒడి / విద్యా దీవెన మొదలైనవి) ఎంచుకుని మీ 12 అంకెల ఆధార్ నంబర్ టైప్ చేయండి.',
      'మీ మొబైల్‌కి వచ్చిన OTP నమోదు చేస్తే మీ దరఖాస్తు మంజూరైందో లేదో స్క్రీన్ పై కనిపిస్తుంది.'
    ],
    steps_en: [
      'Open Chrome or browser and go to nbm.ap.gov.in.',
      'Tap on "Scheme Application Status" or "Citizen Corner".',
      'Select the scheme name and enter your 12-digit Aadhaar number.',
      'Enter OTP received on registered mobile to view current application status and payment details.'
    ]
  },

  // --- FOUNDATIONAL DIGITAL LITERACY CURRICULUM (Task #6) ---
  {
    id: 'comm-01',
    category: 'communication',
    title_te: 'ఫోన్‌లో కొత్త ఈమెయిల్ (Gmail Account) ఎలా తయారు చేయాలి?',
    title_en: 'How to set up a new Gmail account on your phone step-by-step?',
    content_te: 'స్మార్ట్‌ఫోన్‌లో ప్లే స్టోర్, ప్రభుత్వ పోర్టల్‌లు, ఉద్యోగ దరఖాస్తులకు ఈమెయిల్ (Email) చాలా అవసరం. గూగుల్ (Gmail) లో ఉచితంగా 2 నిమిషాల్లో ఈమెయిల్ తయారు చేసుకోవచ్చు.',
    content_en: 'Having a Google (Gmail) email account is foundational for using Play Store, government portals, and online services. You can easily set up a free Gmail account on your smartphone.',
    tags: ['gmail setup', 'create email', 'new email account', 'google account', 'email account', 'ఈమెయిల్ తయారు చేయడం', 'జిమెయిల్ అకౌంట్', 'కొత్త ఈమెయిల్', 'email setup'],
    steps_te: [
      'ఫోన్ సెట్టింగ్స్ ఓపెన్ చేసి "Accounts" > "Add account" > "Google" ఎంచుకోండి (లేదా Gmail యాప్ తెరిచి profile పైన క్లిక్ చేయండి).',
      '"Create account" > "For my personal use" పై నొక్కండి.',
      'మీ పేరు, ఇంటిపేరు, మరియు పుట్టిన తేదీ నమోదు చేయండి.',
      'మీకు నచ్చిన User ID (ఉదా: ramesh.ap2026@gmail.com) ఎంచుకుని, గుర్తుండే బలమైన పాస్‌వర్డ్ సెట్ చేసుకోండి.'
    ],
    steps_en: [
      'Open Settings > Accounts > Add Account > Google (or tap Profile icon inside Gmail app).',
      'Tap "Create account" > "For my personal use".',
      'Enter your First Name, Last Name, and Date of Birth.',
      'Choose a unique username (e.g. ramesh.ap2026@gmail.com) and set a strong password.'
    ],
    safetyWarning_te: '🔒 జాగ్రత్త: మీ ఈమెయిల్ పాస్‌వర్డ్ మరియు ఫోన్‌కి వచ్చే OTP ని ఎవరికీ చెప్పవద్దు.',
    safetyWarning_en: '🔒 Security: Never share your Gmail password or recovery OTP with anyone.'
  },
  {
    id: 'comm-02',
    category: 'communication',
    title_te: 'ఈమెయిల్ (Gmail) ఎలా వాడాలి? మెసేజ్‌లు & ఫోటోలు ఎలా పంపాలి?',
    title_en: 'How to use Gmail to read, write, and send emails with attachments?',
    content_te: 'జిమెయిల్ (Gmail) యాప్ ద్వారా అధికారులకు, కంపెనీలకు లేదా మిత్రులకు ఉత్తరాలు (Emails) మరియు ఫోటోలు/పత్రాలు (PDF Attachments) సులభంగా పంపవచ్చు.',
    content_en: 'Learn how to read incoming emails, write new email messages, attach photos or PDF documents, and send them using the Gmail app.',
    tags: ['use email', 'gmail guide', 'send email', 'read email', 'email attachment', 'ఈమెయిల్ వాడకం', 'జిమెయిల్ పంపడం', 'ఫైల్స్ పంపడం', 'how to use email'],
    steps_te: [
      'ఫోన్‌లో "Gmail" యాప్ ఓపెన్ చేయండి.',
      'క్రొత్త మెసేజ్ రాయడానికి కింద ఉన్న "Compose" (పెన్సిల్ గుర్తు ✏️) పై నొక్కండి.',
      '"To" విభాగంలో ఎవరికి పంపాలో వారి ఈమెయిల్ ఐడీ టైప్ చేయండి, "Subject" లో విషయం రాయండి.',
      'ఫోటో లేదా PDF జత చేయడానికి పైన ఉన్న పేపర్ క్లిప్ (📎) నొక్కి "Attach file" ఎంచుకుని Send (పచ్చటి విమానం ✈️) నొక్కండి.'
    ],
    steps_en: [
      'Open the "Gmail" app on your smartphone.',
      'Tap the "Compose" pencil icon ✏️ at the bottom right.',
      'Enter recipient email address in "To" field and write topic in "Subject".',
      'To add photos/documents, tap the paperclip icon 📎, select file, then tap Send ✈️.'
    ]
  },
  {
    id: 'nav-05',
    category: 'navigation',
    title_te: 'ఫోన్‌లో వెబ్ బ్రౌజర్ (Google Chrome) ఎలా వాడాలి? సెర్చ్ చేయడం ఎలా?',
    title_en: 'How to use Google Chrome web browser for searching and bookmarking?',
    content_te: 'గూగుల్ క్రోమ్ (Google Chrome) బ్రౌజర్ ద్వారా ఇంటర్నెట్‌లో సమాచారం వెతకడం, వెబ్‌సైట్‌లు ఓపెన్ చేయడం మరియు ఇష్టమైన పేజీలను బుక్‌మార్క్ (Bookmark) చేసుకోవడం సులభం.',
    content_en: 'Google Chrome is the primary web browser on Android phones. Learn how to search for websites, browse safely, and bookmark important government or useful web pages.',
    tags: ['chrome', 'browser', 'google search', 'web browser', 'bookmark', 'క్రోమ్', 'బ్రౌజర్', 'వెబ్ సెర్చ్', 'గూగుల్ వెతకడం'],
    steps_te: [
      'ఫోన్‌లోని "Chrome" (రెడ్, ఎల్లో, గ్రీన్ గుండ్రటి సింబల్) యాప్ నొక్కండి.',
      'పైన ఉన్న Search bar లో మీకు కావలసిన విషయం టైప్ చేసి సెర్చ్ (magnifying glass) నొక్కండి.',
      'అధికారిక వెబ్‌సైట్‌లపై మాత్రమే క్లిక్ చేయండి (URL సరిచూసుకోండి).',
      'ముఖ్యమైన పేజీని సేవ్ చేయడానికి పైన ఉన్న 3 చుక్కలు (⋮) నొక్కి నక్షత్రం (⭐ Bookmark) నొక్కండి.'
    ],
    steps_en: [
      'Open the "Chrome" app on your phone.',
      'Type your query or website name in the top address search bar.',
      'Click on genuine official links from the search results.',
      'To save a web page for quick access later, tap the 3 dots (⋮) and tap Star (⭐ Bookmark).'
    ]
  },
  {
    id: 'hygiene-05',
    category: 'digital_hygiene',
    title_te: 'Google Play Store నుండి యాప్స్ సురక్షితంగా డౌన్‌లోడ్ మరియు అప్‌డేట్ చేయడం ఎలా?',
    title_en: 'How to safely download and update apps from Google Play Store?',
    content_te: 'ఫోన్‌లో కొత్త యాప్‌లను ఎప్పుడూ అధికారిక Google Play Store నుండి మాత్రమే డౌన్‌లోడ్ చేయాలి. వాట్సాప్ లేదా ఎస్‌ఎంఎస్‌లలో వచ్చే తెలియని APK లింక్‌లను ఇన్‌స్టాల్ చేయకూడదు.',
    content_en: 'Always download and update smartphone applications through the verified Google Play Store. Never install untrusted APK files sent via WhatsApp or SMS.',
    tags: ['play store', 'download apps', 'update apps', 'safe install', 'apk scam', 'ప్లే స్టోర్', 'యాప్ డౌన్‌లోడ్', 'యాప్ అప్‌డేట్', 'సురక్షితం'],
    steps_te: [
      '"Play Store" యాప్ ఓపెన్ చేసి పైన సెర్చ్ బార్‌లో యాప్ పేరు టైప్ చేయండి.',
      'యాప్ కింద ఉన్న "Verified by Play Protect" మరియు డౌన్‌లోడ్‌ల సంఖ్య సరిచూసుకోండి.',
      '"Install" లేదా "Update" బటన్ పై నొక్కండి.',
      'వాట్సాప్‌లో వచ్చే ".apk" ఫైళ్లను ఎట్టి పరిస్థితుల్లోనూ ఇన్‌స్టాల్ చేయకండి.'
    ],
    steps_en: [
      'Open "Play Store" app and type desired app name in top search bar.',
      'Check for "Verified by Play Protect" badge and ratings before installing.',
      'Tap "Install" or "Update" button.',
      'Never install external unknown ".apk" files received on messaging apps.'
    ]
  },
  {
    id: 'hygiene-06',
    category: 'digital_hygiene',
    title_te: 'సోషల్ మీడియా (Facebook / Instagram) అంటే ఏమిటి? భద్రతా సూత్రాలు',
    title_en: 'Social Media basics (Facebook/Instagram) and Essential Privacy Rules',
    content_te: 'ఫేస్‌బుక్, ఇన్‌స్టాగ్రామ్ వంటి యాప్‌లు స్నేహితులు మరియు బంధువులతో ఫోటోలు పంచుకోవడానికి ఉపయోగపడతాయి. అయితే వ్యక్తిగత సమాచారం, ఫోన్ నంబర్లు, బ్యాంక్ వివరాలు బహిరంగంగా ఉంచకూడదు.',
    content_en: 'Social media platforms like Facebook and Instagram allow connecting with friends and family. Following basic privacy settings keeps your photos and personal identity safe.',
    tags: ['social media', 'facebook', 'instagram', 'privacy settings', 'safe social media', 'సోషల్ మీడియా', 'ఫేస్‌బుక్', 'ఇన్‌స్టాగ్రామ్', 'ప్రైవసీ', 'భద్రత'],
    steps_te: [
      'మీ అకౌంట్ సెట్టింగ్స్‌లో "Privacy Settings" కి వెళ్లి Profile ని "Friends Only" గా మార్చండి.',
      'మీ ఫోన్ నంబర్, ఇంటి చిరునామా, ఆధార్ నంబర్‌ను సోషల్ మీడియాలో పోస్ట్ చేయకండి.',
      'తెలియని వ్యక్తుల నుండి వచ్చే ఫ్రెండ్ రిక్వెస్ట్‌లు లేదా మెసేజ్‌లు ఆమోదించకండి.',
      'ఆకర్షణీయమైన బహుమతుల పేరుతో వచ్చే లింక్‌లపై క్లిక్ చేయకండి.'
    ],
    steps_en: [
      'Go to Account Settings > Privacy and set visibility to "Friends Only".',
      'Never post phone numbers, home address, or personal ID cards publicly.',
      'Do not accept friend requests or video calls from strangers.',
      'Ignore suspicious prize claims or message links on social platforms.'
    ]
  },
  {
    id: 'comm-03',
    category: 'communication',
    title_te: 'వాట్సాప్ (WhatsApp) & గూగుల్ మీట్ (Google Meet) లో వీడియో కాల్ ఎలా చేయాలి?',
    title_en: 'How to make Video Calls using WhatsApp and Google Meet?',
    content_te: 'దూరంగా ఉన్న బంధువులతో, పిల్లలతో ముఖాముఖి మాట్లాడటానికి వాట్సాప్ వీడియో కాల్ లేదా గూగుల్ మీట్ వాడవచ్చు. దీనికి ఇంటర్నెట్ (Data) ఉంటే చాలు, రూపాయి ఖర్చు ఉండదు.',
    content_en: 'Video calling enables seeing and speaking with family members face-to-face over mobile internet using WhatsApp or Google Meet.',
    tags: ['video call', 'whatsapp video call', 'google meet', 'online meet', 'వీడియో కాల్', 'వాట్సాప్ వీడియో', 'గూగుల్ మీట్'],
    steps_te: [
      'WhatsApp వీడియో కాల్: వాట్సాప్‌లో వ్యక్తి చాట్ ఓపెన్ చేసి పైన ఉన్న వీడియో కెమెరా 📹 గుర్తుపై నొక్కండి.',
      'Google Meet: లింక్ ద్వారా జాయిన్ అవ్వడానికి మీటింగ్‌ లింక్‌పై క్లిక్ చేసి "Join" నొక్కండి.',
      'మైక్రోఫోన్ 🎙️ మరియు కెమెరా 📷 ఆన్ లో ఉన్నాయో లేదో చూసుకోండి.',
      'కాల్ ముగించడానికి ఎర్రటి రౌండ్ (End Call) బటన్ నొక్కండి.'
    ],
    steps_en: [
      'WhatsApp Video Call: Open contact chat in WhatsApp and tap the Video Camera icon 📹 at the top right.',
      'Google Meet: Tap the shared meeting link and click "Join".',
      'Ensure your Microphone 🎙️ and Camera 📷 permissions are allowed.',
      'Tap the red phone button to hang up when finished.'
    ]
  },
  {
    id: 'nav-06',
    category: 'navigation',
    title_te: 'గూగుల్ ట్రాన్స్‌లేట్ కెమెరా (Google Translate) తో ఇంగ్లీష్‌ను తెలుగులోకి ఎలా మార్చాలి?',
    title_en: 'How to translate English text into Telugu using Google Translate Camera?',
    content_te: 'ఇంగ్లీష్‌లో ఉన్న బోర్డులు, ప్రభుత్వ నోటీసులు, లేదా యాప్ మెసేజ్‌లపై మీ ఫోన్ కెమెరా పెడితే గూగుల్ ట్రాన్స్‌లేట్ (Google Translate) దాన్ని వెంటనే తెలుగులోకి మార్చి చూపిస్తుంది.',
    content_en: 'Google Translate camera allows rural users to instantly translate English signs, app text, and printed notices into Telugu just by pointing their smartphone camera.',
    tags: ['google translate', 'camera translate', 'english to telugu', 'translate text', 'గూగుల్ ట్రాన్స్‌లేట్', 'కెమెరా ట్రాన్స్‌లేట్', 'ఇంగ్లీష్ తెలుగు', 'అనువాదం'],
    steps_te: [
      'Play Store నుండి "Google Translate" యాప్ డౌన్‌లోడ్ చేయండి.',
      'పైన ఎడమవైపు "English" మరియు కుడివైపు "Telugu" ఎంచుకోండి.',
      'కింద ఉన్న "Camera" 📷 గుర్తుపై నొక్కి, ఇంగ్లీష్ అక్షరాల వైపు ఫోన్ కెమెరా చూపించండి.',
      'స్క్రీన్ పై ఇంగ్లీష్ అక్షరాలు వెంటనే తెలుగులోకి మారిపోతాయి!'
    ],
    steps_en: [
      'Open "Google Translate" app (download from Play Store if needed).',
      'Set source language to "English" and target language to "Telugu".',
      'Tap the "Camera" 📷 icon and point your phone camera at any English text/sign.',
      'Watch the English words automatically transform into Telugu on your screen!'
    ]
  },
  {
    id: 'nav-07',
    category: 'navigation',
    title_te: 'ఫోన్ ప్రాథమిక సెట్టింగ్స్ (ప్రకాశం/Brightness, సౌండ్, నోటిఫికేషన్లు)',
    title_en: 'Essential Phone Settings: Screen Brightness, Notifications & Sound',
    content_te: 'ఫోన్ డిస్‌ప్లే వెలుతురు (Brightness) పెంచడం/తగ్గించడం, సైలెంట్ చేయడం, మరియు అనవసరమైన నోటిఫికేషన్ల శబ్దాలు ఆపడం సెట్టింగ్స్ ద్వారా సులభంగా నియంత్రించవచ్చు.',
    content_en: 'Mastering basic Android settings like screen brightness, notification ringtones, and battery saver ensures comfortable phone usage and longer battery life.',
    tags: ['brightness', 'notifications', 'phone settings', 'screen light', 'sound settings', 'సెట్టింగ్స్', 'వెలుతురు', 'బ్రైట్‌నెస్', 'నోటిఫికేషన్లు'],
    steps_te: [
      'ఫోన్ స్క్రీన్‌ను పైనుండి కిందకి స్వైప్ చేసి క్విక్ సెట్టింగ్స్ తెరిచి సూర్యుడి గుర్తు ☀️ తో ప్రకాశం జరపండి.',
      'రాాత్రి వేళల్లో కళ్లకు హాని కలగకుండా "Eye Comfort / Night Light" ఆన్ చేయండి.',
      'నోటిఫికేషన్ మెసేజ్‌లు వద్దనుకుంటే Settings > Notifications లో అనవసర యాప్‌లకు ఆఫ్‌ చేయండి.',
      'ఫోన్ ఛార్జింగ్ త్వరగా అయిపోతుంటే "Battery Saver" మోడ్ ఆన్ చేయండి.'
    ],
    steps_en: [
      'Swipe down from top of screen to access Quick Settings slider for brightness ☀️.',
      'Enable "Eye Comfort / Night Light" in evening to reduce eye strain.',
      'Go to Settings > Notifications to turn off unwanted app alert sounds.',
      'Enable "Battery Saver" mode when phone battery is low.'
    ]
  }
];
