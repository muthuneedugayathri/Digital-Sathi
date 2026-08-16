import fs from 'fs';

const filePath = 'C:/Users/Hema/.gemini/antigravity/scratch/digital-sathi/src/data/knowledgeBaseData.ts';
let content = fs.readFileSync(filePath, 'utf-8');

const newEntries = `,
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
  }
];
`;

content = content.replace(/\];\s*$/, newEntries);
fs.writeFileSync(filePath, content);
console.log('Appended government scheme entries.');
