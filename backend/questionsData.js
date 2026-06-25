// ============================================================
// Xtron MSME Deep-Discovery Survey v6.0 — Questions Data
// Feature Insight Edition | PRD v5.0 + FSD v4.0
// Languages: Marathi (mr) + Hindi (hi) + English (en)
// 76 questions across 9 sections (A3 split into A3 + A3b)
// All changes: AI→Digital Tool, Other (specify) options,
// B3 multi max:3, C5/C8/C12/C13 updated, Section H→MSME Acceptance
// ============================================================

const QUESTIONS_DATA = {
  meta: {
    version: "v6.0",
    title_mr: "Xtron MSME उत्पादन शोध सर्वेक्षण",
    title_en: "Xtron MSME Product Discovery Survey",
    subtitle_mr: "Feature Insight Edition — द्विभाषिक (मराठी + English)",
    subtitle_en: "Feature Insight Edition — Bilingual (Marathi + English)",
    total: 76
  },

  sections: [
    { id:"A", code:"A", title_hi:"अनुभाग A — फर्म जानकारी और वर्तमान सेटअप", note_hi:"आप कौन हैं — ७ प्रश्न",
      title_mr:"विभाग A — फर्म माहिती आणि वर्तमान सेटअप",
      title_en:"Section A — Firmographics & Current Setup",
      note_mr:"तुम्ही कोण आहात — ७ प्रश्न",
      note_en:"Who you are — 7 questions" },
    { id:"B", code:"B", title_hi:"अनुभाग B — ग्राहक व्यवहार और पैटर्न", note_hi:"आप आज कैसे काम करते हैं",
      title_mr:"विभाग B — ग्राहक वर्तन आणि पद्धत",
      title_en:"Section B — Customer Behaviour & Pattern",
      note_mr:"आज तुम्ही कसे काम करता — चूक/बरोबर उत्तर नाही",
      note_en:"How you work today — no right or wrong answers" },
    { id:"C", code:"C", title_hi:"अनुभाग C — मुख्य Feature खोज", note_hi:"Dashboard, डेटा, आवाज़, भाषा, कैमरा — १४ प्रश्न",
      title_mr:"विभाग C — मुख्य Feature शोध",
      title_en:"Section C — Core Feature Discovery",
      note_mr:"Dashboard, data entry, integration, offline, voice, language, camera, WhatsApp — १४ प्रश्न",
      note_en:"Dashboard, data entry, integration, offline, voice, language, camera, WhatsApp — 14 questions" },
    { id:"D", code:"D", title_hi:"अनुभाग D — Module प्राथमिकता", note_hi:"केवल सबसे महत्वपूर्ण चुनें",
      title_mr:"विभाग D — Module प्राधान्य (Forced Ranking)",
      title_en:"Section D — Module Priority (Forced Ranking)",
      note_mr:"फक्त सर्वात महत्त्वाचे निवडा — \"सर्वच महत्त्वाचे\" म्हटले तर काहीच कळणार नाही",
      note_en:"Pick only what matters most — 'all important' tells us nothing" },
    { id:"M", code:"M", title_hi:"अनुभाग M — ६ Module गहन विवरण", note_hi:"प्रत्येक module — features + insight + WTP",
      title_mr:"विभाग M — ६ Module Deep-Dive",
      title_en:"Section M — 6 Module Deep-Dives",
      note_mr:"प्रत्येक module — features + Digital Tool insight + integration + WTP",
      note_en:"Each module — features + Digital Tool insight + integration + WTP" },
    { id:"E", code:"E", title_hi:"अनुभाग E — Digital Business Manager", note_hi:"उत्पाद का हृदय — ८ प्रश्न",
      title_mr:"विभाग E — Digital Business Manager",
      title_en:"Section E — Digital Business Manager",
      note_mr:"व्यवसायाचे हृदय — ८ प्रश्न",
      note_en:"The heart of the product — 8 questions" },
    { id:"F", code:"F", title_hi:"अनुभाग F — Go-to-Market और अधिग्रहण", note_hi:"हम आप तक कैसे पहुँचें — ५ प्रश्न",
      title_mr:"विभाग F — Go-to-Market & Acquisition",
      title_en:"Section F — Go-to-Market & Acquisition",
      note_mr:"आम्ही तुमच्यापर्यंत कसे पोहोचावे — ५ प्रश्न",
      note_en:"How we reach and onboard you — 5 questions" },
    { id:"G", code:"G", title_hi:"अनुभाग G — मूल्य निर्धारण", note_hi:"Free / Rs 999 / Rs 1,999 — ५ प्रश्न",
      title_mr:"विभाग G — Pricing & Packaging",
      title_en:"Section G — Pricing & Packaging",
      note_mr:"Free / Rs 999 / Rs 1,999 — ५ प्रश्न",
      note_en:"Free / Rs 999 / Rs 1,999 — 5 questions" },
    { id:"H", code:"H", title_hi:"अनुभाग H — MSME स्वीकृति", note_hi:"अंतिम निर्णायक प्रश्न — ईमानदारी से उत्तर दें",
      title_mr:"विभाग H — MSME स्वीकृती",
      title_en:"Section H — MSME Acceptance",
      note_mr:"MSME स्वीकृती — प्रामाणिक उत्तर द्या",
      note_en:"MSME Acceptance — please be honest" }
  ],

  questions: [
    // ───────── SECTION A — FIRMOGRAPHICS (6 Q) ─────────
    {id:"A1", sec:"A", role:"A", type:"single", required:true,
      q_mr:"प्रमुख उद्योग क्षेत्र?", q_en:"Primary manufacturing sector?",
      options:[
        {mr:"वाहन घटक / इंजिनीअरिंग", en:"Auto components / Engineering"},
        {mr:"अन्न / औषध / रसायन", en:"Food / Pharma / Chemicals"},
        {mr:"कापड / प्लास्टिक / पॅकेजिंग", en:"Textiles / Plastics / Packaging"},
        {mr:"इलेक्ट्रॉनिक्स / फाउंड्री", en:"Electronics / Foundry / Castings"},
        {mr:"इतर", en:"Other (specify)"}
      ]},
    {id:"A2", sec:"A", role:"A", type:"single", required:true, branching:true,
      q_mr:"कंपनीतील आपली भूमिका?", q_en:"Your role?",
      options:[
        {mr:"मालक / डायरेक्टर", en:"Owner / Director"},
        {mr:"प्लांट मॅनेजर", en:"Plant Manager"},
        {mr:"सुपरवायझर", en:"Supervisor"},
        {mr:"ऑपरेटर / तंत्रज्ञ", en:"Operator / Technician"},
        {mr:"अकाउंटंट / प्रशासन", en:"Accountant / Admin"}
      ]},
    {id:"A3", sec:"A", role:"A", type:"single", required:true,
      q_mr:"एकूण कर्मचारी किती?", q_en:"Total number of employees?",
      options:[
        {mr:"५ ते १५", en:"5 to 15"},
        {mr:"१६ ते ५०", en:"16 to 50"},
        {mr:"५१ ते १००", en:"51 to 100"},
        {mr:"१०१ ते २५०", en:"101 to 250"},
        {mr:"२५० पेक्षा जास्त", en:"More than 250"}
      ]},
    {id:"A3b", sec:"A", role:"A", type:"single", required:true,
      q_mr:"वार्षिक उलाढाल किती?", q_en:"Annual turnover?",
      options:[
        {mr:"१ कोटीपेक्षा कमी", en:"Less than Rs 1 Cr"},
        {mr:"१ ते ५ कोटी", en:"Rs 1 to 5 Cr"},
        {mr:"५ ते २५ कोटी", en:"Rs 5 to 25 Cr"},
        {mr:"२५ ते १०० कोटी", en:"Rs 25 to 100 Cr"},
        {mr:"१०० कोटीपेक्षा जास्त", en:"More than Rs 100 Cr"}
      ]},
    {id:"A4", sec:"A", role:"O,M", type:"single", required:true,
      q_mr:"आज कोणते business software वापरता?", q_en:"What business software do you use today?",
      options:[
        {mr:"काहीच नाही — फक्त कागद / Excel", en:"None — only paper / Excel"},
        {mr:"फक्त Tally", en:"Tally only"},
        {mr:"Tally + WhatsApp + काही apps", en:"Tally + WhatsApp + few apps"},
        {mr:"SAP / Zoho / Odoo / ERP", en:"SAP / Zoho / Odoo / ERP"},
        {mr:"इतर (नमूद करा)", en:"Other (specify)"}
      ]},
    {id:"A5", sec:"A", role:"O,M", type:"single", required:true,
      q_mr:"किती काम अजून manual / कागदावर?", q_en:"How much work is still manual / on paper?",
      options:[
        {mr:"80%+", en:"More than 80%"},
        {mr:"60-80%", en:"60-80%"},
        {mr:"40-60%", en:"40-60%"},
        {mr:"20-40%", en:"20-40%"},
        {mr:"<20%", en:"Less than 20%"}
      ]},
    {id:"A6", sec:"A", role:"A", type:"single", required:true,
      q_mr:"कोणत्या device वर सर्वात जास्त काम कराल?", q_en:"Which device will you use the most for this tool?",
      options:[
        {mr:"फक्त मोबाईल", en:"Mobile phone only"},
        {mr:"मोबाईल + tablet", en:"Mobile + tablet"},
        {mr:"मोबाईल + laptop / desktop", en:"Mobile + laptop / desktop"},
        {mr:"फक्त desktop / laptop", en:"Desktop / laptop only"},
        {mr:"WhatsApp मधूनच", en:"Mostly through WhatsApp"}
      ]},

    // ───────── SECTION B — CUSTOMER BEHAVIOUR (6 Q) ─────────
    {id:"B1", sec:"B", role:"O", type:"multi", max:2, required:true,
      q_mr:"आज business ची स्थिती कशी तपासता? (टॉप 2)", q_en:"How do you check business status today? (pick top 2)",
      help_mr:"वर्तमान सवय — Digital Tool कुठे insert करायचे ते कळेल.",
      help_en:"Current behaviour — shows where Digital Tool should insert.",
      options:[
        {mr:"Bank balance + मनातील हिशेब", en:"Bank balance + mental math"},
        {mr:"Accountant ला विचारतो / WhatsApp", en:"Ask accountant / WhatsApp"},
        {mr:"Tally / software उघडतो", en:"Open Tally / software"},
        {mr:"Floor वर फिरून + supervisor", en:"Floor walk + supervisor"},
        {mr:"इतर (नमूद करा)", en:"Other (specify)"}
      ]},
    {id:"B2", sec:"B", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ Operational माहिती कुठे राहते?", q_en:"⭐ Where does your operational knowledge live?",
      help_mr:"हे सांगते की business किती एका माणसावर अवलंबून आहे.",
      help_en:"Shows how dependent the business is on one person.",
      options:[
        {mr:"मालकाच्या डोक्यात", en:"In owner's head"},
        {mr:"1-2 key लोकांच्या डोक्यात", en:"In 1-2 key people's heads"},
        {mr:"कागद + WhatsApp", en:"Paper + WhatsApp"},
        {mr:"Excel + Tally", en:"Excel + Tally"},
        {mr:"Documented + Software", en:"Documented + Software"}
      ]},
    {id:"B3", sec:"B", role:"O,M", type:"multi", max:3, required:true,
      q_mr:"गेल्या 12 महिन्यातील सर्वात मोठ्या अडचणी? (टॉप 3)", q_en:"Biggest operational headaches in last 12 months? (pick top 3)",
      options:[
        {mr:"Cash flow / payment उशीर", en:"Cash flow / payment delays"},
        {mr:"Production / मशीन बंद", en:"Production / machine breakdown"},
        {mr:"Material / vendor", en:"Material / vendor issues"},
        {mr:"Compliance / GST / दंड", en:"Compliance / GST / penalty"},
        {mr:"Worker / quality / तक्रारी", en:"Worker / quality / complaints"},
        {mr:"इतर (नमूद करा)", en:"Other (specify)"}
      ]},
    {id:"B4", sec:"B", role:"A", type:"single", required:true,
      q_mr:"नवीन digital tool बद्दल तुम्ही कसे?", q_en:"How ready are you for new digital tools?",
      options:[
        {mr:"लगेच वापरून बघणारा", en:"Early adopter — eager"},
        {mr:"सिद्ध झाल्यावर वापरतो", en:"Pragmatic — adopt when proven"},
        {mr:"सर्वात शेवटी", en:"Laggard — last to adopt"},
        {mr:"भाग पडल्यावरच", en:"Only when forced"},
        {mr:"manual च आवडते", en:"Resistant — prefer manual"}
      ]},
    {id:"B5", sec:"B", role:"O,M", type:"single", required:true,
      q_mr:"रोजचा आढावा (review) कधी होतो?", q_en:"When does your daily review happen?",
      options:[
        {mr:"सकाळी + संध्याकाळी", en:"Morning + evening"},
        {mr:"रोज एकदा", en:"Once daily"},
        {mr:"आठवड्यातून", en:"Weekly"},
        {mr:"अडचण आल्यावरच", en:"Only when problem arises"},
        {mr:"ठरलेला review नाही", en:"No structured review"}
      ]},
    {id:"B6", sec:"B", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ नवीन software का बंद केले / वापरले नाही (आधी)?", q_en:"⭐ If you tried software before and stopped — main reason?",
      options:[
        {mr:"खूप अवघड / गुंतागुंतीचे", en:"Too complex / complicated"},
        {mr:"इंग्रजी / भाषेची अडचण", en:"English / language barrier"},
        {mr:"वेळ मिळाला नाही / data entry जास्त", en:"No time / too much data entry"},
        {mr:"फायदा दिसला नाही", en:"Didn't see value"},
        {mr:"आधी कधी वापरलेच नाही", en:"Never tried before"}
      ]},

    // ───────── SECTION C — CORE FEATURE DISCOVERY (14 Q) ─────────
    {id:"C1", sec:"C", role:"O,M", type:"single", required:true, decisive:true,
      q_mr:"⭐ Dashboard तुम्ही स्वतः सजवता आला पाहिजे का?", q_en:"⭐ Should you be able to customize your own dashboard?",
      options:[
        {mr:"हो — पूर्ण माझ्या पद्धतीने", en:"Yes — fully my way (drag/drop widgets)"},
        {mr:"हो — पण ready-made निवडी हव्या", en:"Yes — but give me ready-made templates to pick"},
        {mr:"फरक नाही", en:"Doesn't matter"},
        {mr:"नको — simple ठेवा", en:"No — keep it simple / fixed"},
        {mr:"माहीत नाही", en:"Don't know"}
      ]},
    {id:"C2", sec:"C", role:"O", type:"multi", max:5, required:true,
      q_mr:"Dashboard वर पहिल्या नजरेत काय हवे? (टॉप 5)", q_en:"Top 5 things you want on your dashboard at a glance?",
      options:[
        {mr:"Cash + येणी (receivables)", en:"Cash + receivables"},
        {mr:"Order + production status", en:"Order + production status"},
        {mr:"Compliance deadline + alert", en:"Compliance deadlines + alerts"},
        {mr:"Quality / rejection", en:"Quality / rejection rate"},
        {mr:"आजच्या top 3 गोष्टी", en:"Today's top 3 priorities"}
      ]},
    {id:"C3", sec:"C", role:"A", type:"single", required:true, decisive:true,
      q_mr:"⭐ माहिती भरायची सर्वात सोपी पद्धत कोणती?", q_en:"⭐ Easiest way for you / your team to enter data?",
      help_mr:"Operator खरंच कोणती पद्धत वापरेल?",
      help_en:"Which method will the operator actually use?",
      options:[
        {mr:"बोलून (voice)", en:"By voice"},
        {mr:"एक-दोन tap / button", en:"Tap / buttons / icons"},
        {mr:"Camera ने scan / photo", en:"Scan / photo by camera"},
        {mr:"Type करून", en:"By typing"},
        {mr:"इतर (नमूद करा)", en:"Other (specify)"}
      ]},
    {id:"C4", sec:"C", role:"A", type:"single", required:true,
      q_mr:"माहिती भरणे किती किचकट असेल तर सोडून द्याल?", q_en:"Data entry is too much if it takes more than?",
      options:[
        {mr:"10 सेकंद", en:"10 seconds per entry"},
        {mr:"30 सेकंद", en:"30 seconds"},
        {mr:"1 मिनिट", en:"1 minute"},
        {mr:"2-3 मिनिटे चालेल", en:"2-3 minutes is OK"},
        {mr:"वेळेची अडचण नाही", en:"Time is not an issue"}
      ]},
    {id:"C5", sec:"C", role:"O,M", type:"multi", max:3, required:true,
      q_mr:"सर्वात महत्त्वाची विद्यमान साधन जोडणी कोणती? (टॉप 3)", q_en:"Most Important Existing Tool Integration (pick top 3)?",
      options:[
        {mr:"Tally (दोन्ही बाजूने)", en:"Tally (two-way)"},
        {mr:"SAP / ERP (दोन्ही बाजूने)", en:"SAP / ERP (two-way)"},
        {mr:"Zoho", en:"Zoho"},
        {mr:"GST portal + बँक", en:"GST portal + bank"},
        {mr:"WhatsApp + GeM / IndiaMART", en:"WhatsApp + GeM / IndiaMART"},
        {mr:"इतर (नमूद करा)", en:"Other (specify)"}
      ]},
    {id:"C6", sec:"C", role:"O,M", type:"single", required:true, decisive:true,
      q_mr:"⭐ Tally / SAP मधील जुना data आपोआप आला पाहिजे का?", q_en:"⭐ Should your existing Tally / SAP data import automatically?",
      options:[
        {mr:"हो — deal-breaker, नसेल तर घेणार नाही", en:"Yes — deal-breaker, won't buy without it"},
        {mr:"हो — खूप महत्त्वाचे", en:"Yes — very important"},
        {mr:"चांगले आहे पण आवश्यक नाही", en:"Nice to have"},
        {mr:"नको — fresh सुरुवात ठीक", en:"No — fresh start is fine"},
        {mr:"ERP वापरत नाही", en:"Don't use ERP"}
      ]},
    {id:"C7", sec:"C", role:"A", type:"single", required:true, decisive:true,
      q_mr:"⭐ इंटरनेट नसताना app चालले पाहिजे का?", q_en:"⭐ Must the app work without internet (offline)?",
      help_mr:"Factory भागात अनेकदा internet कमी असतो.",
      help_en:"Internet is often weak in factory areas.",
      options:[
        {mr:"अत्यावश्यक — पूर्ण दिवस offline", en:"Critical — full day offline must work"},
        {mr:"महत्त्वाचे — काही तास", en:"Important — a few hours"},
        {mr:"कधीतरी — network कमी असतो", en:"Sometimes — patchy network"},
        {mr:"क्वचित लागेल", en:"Rarely needed"},
        {mr:"नेहमी online असतो", en:"Always online"}
      ]},
    {id:"C8", sec:"C", role:"A", type:"single", required:true, decisive:true,
      q_mr:"⭐ English / Hindi / मराठीत बोलून माहिती भरणे किती महत्त्वाचे?", q_en:"⭐ How important is voice-to-text in English / Hindi / Marathi?",
      options:[
        {mr:"अत्यावश्यक — नसेल तर वापरणार नाही", en:"Critical — won't use without it"},
        {mr:"खूप महत्त्वाचे — रोज वापरेन", en:"Very important — daily use"},
        {mr:"ठीक — कधीतरी", en:"OK — sometimes"},
        {mr:"नको — typing चालेल", en:"Not needed — typing is fine"},
        {mr:"माहीत नाही", en:"Don't know"}
      ]},
    {id:"C9", sec:"C", role:"A", type:"multi", max:3, required:true,
      q_mr:"कोणत्या गोष्टी बोलून करायला आवडेल? (टॉप 3)", q_en:"Which things would you do by VOICE? (pick top 3)",
      options:[
        {mr:"Defect / quality नोंद", en:"Log defect / quality"},
        {mr:"Production count / downtime", en:"Production count / downtime"},
        {mr:"Material / order विचारणा", en:"Material / order query"},
        {mr:"Digital Tool ला प्रश्न विचारणे", en:"Ask the Digital Tool a question"},
        {mr:"रोजचा summary ऐकणे", en:"Listen to daily summary"}
      ]},
    {id:"C10", sec:"C", role:"O", type:"multi", required:true,
      q_mr:"कोणत्या भाषा हव्यात?", q_en:"Which languages do you need?",
      options:[
        {mr:"मराठी", en:"Marathi"},
        {mr:"हिंदी", en:"Hindi"},
        {mr:"English", en:"English"},
        {mr:"गुजराती / तमिळ", en:"Gujarati / Tamil"},
        {mr:"सर्व", en:"All"}
      ]},
    {id:"C11", sec:"C", role:"A", type:"single", required:true, decisive:true,
      q_mr:"⭐ वेगवेगळ्या लोकांना वेगळी भाषा लागते का?", q_en:"⭐ Do different people need different languages?",
      options:[
        {mr:"मालक English, operator मराठी", en:"Owner English; operator Marathi"},
        {mr:"सर्वांना मराठी", en:"All Marathi"},
        {mr:"सर्वांना हिंदी", en:"All Hindi"},
        {mr:"व्यक्तीनुसार वेगळी", en:"Different per person"},
        {mr:"English सर्वांना चालेल", en:"English fine for all"}
      ]},
    {id:"C12", sec:"C", role:"O,M", type:"single", required:true, decisive:true,
      q_mr:"⭐ मोबाईल Camera ने Part चा Photo → Digital Tool Detect → Quality Flag — किती उपयोगी?", q_en:"⭐ Mobile Tool quality check (photo a part → Mobile Tool detect → flag quality check) — how useful?",
      help_mr:"Operator फक्त फोटो काढेल आणि Digital Tool defect सांगेल — training लागणार नाही.",
      help_en:"Operator just takes a photo of a part → Mobile Tool detects → flags quality check — no training needed.",
      options:[
        {mr:"खूप — हेच मुख्य कारण असेल घेण्याचे", en:"Very — could be a main reason to buy"},
        {mr:"उपयोगी — वापरेन", en:"Useful — would use it"},
        {mr:"कदाचित — बघावे लागेल", en:"Maybe — need to see it"},
        {mr:"आमच्या कामात उपयोग नाही", en:"Not relevant to our work"},
        {mr:"माहीत नाही", en:"Don't know"}
      ]},
    {id:"C13", sec:"C", role:"O,M", type:"single", required:true,
      q_mr:"दृश्य गुणवत्ता तपासणी आज कशी होते?", q_en:"How is Visual Quality Inspection done today?",
      options:[
        {mr:"डोळ्याने, अनुभवी माणूस", en:"By eye, experienced person"},
        {mr:"मोजमाप यंत्र (gauge / vernier)", en:"Measuring instruments"},
        {mr:"ठरलेली तपासणी नाही", en:"No structured inspection"},
        {mr:"Lab / outsource", en:"Lab / outsourced"},
        {mr:"Camera / machine vision आहे", en:"Already have camera / machine vision"}
      ]},
    {id:"C14", sec:"C", role:"A", type:"single", required:true, decisive:true,
      q_mr:"⭐ WhatsApp वरून alert, report, मंजुरी — किती महत्त्वाचे?", q_en:"⭐ WhatsApp for alerts, reports, approvals — how important?",
      options:[
        {mr:"अत्यावश्यक — WhatsApp शिवाय नको", en:"Critical — won't use without WhatsApp"},
        {mr:"खूप महत्त्वाचे", en:"Very important"},
        {mr:"चांगले आहे", en:"Nice to have"},
        {mr:"App च पुरेसे", en:"App alone is enough"},
        {mr:"माहीत नाही", en:"Don't know"}
      ]},

    // ───────── SECTION D — MODULE PRIORITY (3 Q) ─────────
    {id:"D1", sec:"D", role:"O,M", type:"multi", max:3, required:true, decisive:true,
      q_mr:"⭐ 6 modules पैकी सर्वात महत्त्वाचे 3 कोणते?", q_en:"⭐ Of the 6 modules, pick ONLY 3 you need MOST",
      options:[
        {mr:"Finance (cash, GST, compliance)", en:"Finance (cash, GST, compliance)"},
        {mr:"Production & Operations", en:"Production & Operations"},
        {mr:"Quality", en:"Quality"},
        {mr:"Supply Chain & Logistics", en:"Supply Chain & Logistics"},
        {mr:"Sales & Marketing", en:"Sales & Marketing"}
      ]},
    {id:"D2", sec:"D", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ फक्त एकच module घेऊ शकलात तर?", q_en:"⭐ If you could buy ONLY ONE module — which?",
      options:[
        {mr:"Finance", en:"Finance"},
        {mr:"Production & Operations", en:"Production & Operations"},
        {mr:"Quality", en:"Quality"},
        {mr:"Supply Chain & Logistics", en:"Supply Chain & Logistics"},
        {mr:"HR / Sales (इतर)", en:"HR / Sales (other)"}
      ]},
    {id:"D3", sec:"D", role:"O,M", type:"single", required:true,
      q_mr:"HR module किती महत्त्वाचे?", q_en:"How important is the HR & Payroll module?",
      options:[
        {mr:"अत्यावश्यक", en:"Essential"},
        {mr:"महत्त्वाचे", en:"Important"},
        {mr:"मध्यम", en:"Moderate"},
        {mr:"कमी", en:"Low"},
        {mr:"नको", en:"Not needed"}
      ]},

    // ───────── M1 FINANCE (4 Q) ─────────
    {id:"M1-1", sec:"M", role:"O", type:"multi", max:3, required:true,
      q_mr:"Finance मध्ये कोणती 3 features सर्वात हवीत?", q_en:"Top 3 finance features you want most?",
      options:[
        {mr:"Cash forecast (30/60/90 दिवस)", en:"Cash forecast (30/60/90 days)"},
        {mr:"येणी + payment reminder", en:"Receivables + payment reminders"},
        {mr:"GST recon + auto return", en:"GST reconciliation + auto returns"},
        {mr:"Product-wise नफा / margin", en:"Product-wise margin"},
        {mr:"खर्च + budget tracking", en:"Expense + budget tracking"}
      ]},
    {id:"M1-2", sec:"M", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ कोणते Digital Tool insight सर्वात उपयोगी? (Finance)", q_en:"⭐ Which Digital Tool insight is most useful in Finance?",
      options:[
        {mr:"22 दिवसांत cash कमी पडेल असा इशारा", en:"'Cash crisis in 22 days' warning"},
        {mr:"कोणते payment आधी मागावे", en:"Which payment to chase first"},
        {mr:"कोणता खर्च कमी करावा", en:"Which cost to cut"},
        {mr:"GST deadline + दंड इशारा", en:"GST deadline + penalty alert"},
        {mr:"नफा कुठे गळतोय", en:"Where margin is leaking"}
      ]},
    {id:"M1-3", sec:"M", role:"O,M", type:"multi", required:true,
      q_mr:"कोणत्या जोडण्या (integration) हव्यात?", q_en:"Which finance integrations do you need?",
      options:[
        {mr:"Tally दोन्ही बाजूने", en:"Tally two-way"},
        {mr:"बँक (auto statement)", en:"Bank (auto statement)"},
        {mr:"GST portal", en:"GST portal"},
        {mr:"UPI / Razorpay", en:"UPI / Razorpay"},
        {mr:"SAP / Zoho", en:"SAP / Zoho"}
      ]},
    {id:"M1-4", sec:"M", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ Finance साठी महिन्याला किती द्याल?", q_en:"⭐ What would you pay monthly for Finance alone?",
      options:[
        {mr:"वेगळे पैसे देणार नाही", en:"Won't pay separately"},
        {mr:"Rs 499", en:"Rs 499 + sign today"},
        {mr:"Rs 999", en:"Rs 999 + sign today"},
        {mr:"Rs 1,499", en:"Rs 1,499 after demo"},
        {mr:"Rs 1,999+", en:"Rs 1,999+ maybe"}
      ]},

    // ───────── M2 PRODUCTION & OPERATIONS (4 Q) ─────────
    {id:"M2-1", sec:"M", role:"O,M", type:"multi", max:3, required:true,
      q_mr:"Production मध्ये कोणती 3 features हवीत?", q_en:"Top 3 production & operations features?",
      options:[
        {mr:"रोजचे Digital Tool schedule / planning", en:"Digital Tool daily schedule / planning"},
        {mr:"Machine status + downtime", en:"Machine status + downtime"},
        {mr:"Target vs actual + OEE", en:"Target vs actual + OEE"},
        {mr:"Bottleneck इशारा", en:"Bottleneck prediction"},
        {mr:"7 AM WhatsApp प्राधान्य-यादी", en:"7 AM WhatsApp priority list"}
      ]},
    {id:"M2-2", sec:"M", role:"O,M", type:"single", required:true, decisive:true,
      q_mr:"⭐ कोणते Digital Tool insight सर्वात उपयोगी? (Production)", q_en:"⭐ Most useful Digital Tool insight in production?",
      options:[
        {mr:"आज bottleneck कुठे होईल", en:"Where today's bottleneck will be"},
        {mr:"कोणत्या machine ची देखभाल हवी", en:"Which machine needs maintenance"},
        {mr:"कोणता order उशीरा होईल", en:"Which order will be late"},
        {mr:"worker / machine reassign सूचना", en:"Worker / machine reassign suggestion"},
        {mr:"उद्याचे planning सुचवणे", en:"Suggest tomorrow's plan"}
      ]},
    {id:"M2-3", sec:"M", role:"P", type:"single", required:true,
      q_mr:"Operator म्हणून production नोंद कशी कराल?", q_en:"As operator, how will you log production?",
      options:[
        {mr:"बोलून (voice)", en:"By voice"},
        {mr:"Button / tap ने", en:"Tap / buttons"},
        {mr:"Camera ने", en:"By camera"},
        {mr:"Type करून", en:"By typing"},
        {mr:"नोंद करणार नाही", en:"Won't log"}
      ]},
    {id:"M2-4", sec:"M", role:"O,M", type:"single", required:true, decisive:true,
      q_mr:"⭐ Production module साठी किती द्याल?", q_en:"⭐ Monthly WTP for Production module?",
      options:[
        {mr:"वेगळे नाही", en:"Won't pay separately"},
        {mr:"Rs 499", en:"Rs 499 today"},
        {mr:"Rs 999", en:"Rs 999 today"},
        {mr:"Rs 1,499", en:"Rs 1,499 after demo"},
        {mr:"Rs 1,999+", en:"Rs 1,999+ maybe"}
      ]},

    // ───────── M3 QUALITY (4 Q) ─────────
    {id:"M3-1", sec:"M", role:"O,M", type:"multi", max:3, required:true,
      q_mr:"Quality मध्ये कोणती 3 features हवीत?", q_en:"Top 3 quality features?",
      options:[
        {mr:"मराठीत बोलून SOP तयार", en:"Marathi voice-to-SOP"},
        {mr:"Camera ने defect तपासणी", en:"Camera defect inspection (CV)"},
        {mr:"Defect चा आधीच इशारा (predict)", en:"Digital Tool defect prediction"},
        {mr:"NCR + 5-Why / 8D", en:"NCR + 5-Why / 8D"},
        {mr:"Customer तक्रार tracking", en:"Customer complaint tracking"}
      ]},
    {id:"M3-2", sec:"M", role:"O,M", type:"single", required:true, decisive:true,
      q_mr:"⭐ Camera ने quality तपासणी — वापराल का?", q_en:"⭐ Would you actually use camera-based (CV) inspection?",
      options:[
        {mr:"हो — रोज, अनेक parts", en:"Yes — daily, many parts"},
        {mr:"हो — महत्त्वाच्या parts ला", en:"Yes — for critical parts"},
        {mr:"कदाचित — अचूकता बघून", en:"Maybe — depends on accuracy"},
        {mr:"नाही — हाताने तपासतो", en:"No — manual is fine"},
        {mr:"माहीत नाही", en:"Don't know"}
      ]},
    {id:"M3-3", sec:"M", role:"O,M", type:"single", required:true, decisive:true,
      q_mr:"⭐ कोणते Digital Tool insight सर्वात उपयोगी? (Quality)", q_en:"⭐ Most useful Digital Tool insight in quality?",
      options:[
        {mr:"48 तास आधी defect इशारा", en:"48-hr advance defect warning"},
        {mr:"कोणत्या machine / operator ला जास्त defect", en:"Which machine / operator has most defects"},
        {mr:"defect चे मूळ कारण", en:"Root cause of defect"},
        {mr:"कोणता batch नाकारण्याचा धोका", en:"Which batch is at risk"},
        {mr:"ISO 9001 तयारी मार्गदर्शन", en:"ISO 9001 readiness guidance"}
      ]},
    {id:"M3-4", sec:"M", role:"O,M", type:"single", required:true, decisive:true,
      q_mr:"⭐ Quality module साठी किती द्याल?", q_en:"⭐ Monthly WTP for Quality module?",
      options:[
        {mr:"वेगळे नाही", en:"Won't pay separately"},
        {mr:"Rs 499", en:"Rs 499 today"},
        {mr:"Rs 999", en:"Rs 999 today"},
        {mr:"Rs 1,499", en:"Rs 1,499 after demo"},
        {mr:"Rs 1,999+", en:"Rs 1,999+ maybe"}
      ]},

    // ───────── M4 SUPPLY CHAIN & LOGISTICS (4 Q) ─────────
    {id:"M4-1", sec:"M", role:"O,M", type:"multi", max:3, required:true,
      q_mr:"Supply chain मध्ये कोणती 3 features हवीत?", q_en:"Top 3 supply chain & logistics features?",
      options:[
        {mr:"Auto-reorder (stock कमी इशारा)", en:"Auto-reorder (low-stock alert)"},
        {mr:"Vendor scoring (कोण चांगला)", en:"Vendor scoring (who is reliable)"},
        {mr:"Dead stock ओळखणे", en:"Dead-stock identification"},
        {mr:"Shipment tracking + e-way bill", en:"Shipment tracking + e-way bill"},
        {mr:"किंमत तुलना (vendors)", en:"Price comparison across vendors"}
      ]},
    {id:"M4-2", sec:"M", role:"O,M", type:"single", required:true, decisive:true,
      q_mr:"⭐ कोणते Digital Tool insight सर्वात उपयोगी? (Supply Chain)", q_en:"⭐ Most useful Digital Tool insight in supply chain?",
      options:[
        {mr:"आता काय re-order करावे", en:"What to reorder now"},
        {mr:"कोणता vendor उशीर करेल", en:"Which vendor will delay"},
        {mr:"किती stock पैसे अडकले", en:"How much cash stuck in stock"},
        {mr:"substitute material सुचवणे", en:"Suggest substitute material"},
        {mr:"delivery उशीर इशारा", en:"Delivery delay alert"}
      ]},
    {id:"M4-3", sec:"M", role:"O,M", type:"single", required:true,
      q_mr:"Inventory आज कशी सांभाळता?", q_en:"How do you manage inventory today?",
      options:[
        {mr:"कागद / register", en:"Paper / register"},
        {mr:"Excel", en:"Excel"},
        {mr:"Tally / software", en:"Tally / software"},
        {mr:"डोक्यात / अंदाजाने", en:"In head / by guess"},
        {mr:"Barcode / system", en:"Barcode / system"}
      ]},
    {id:"M4-4", sec:"M", role:"O,M", type:"single", required:true, decisive:true,
      q_mr:"⭐ Supply Chain module साठी किती द्याल?", q_en:"⭐ Monthly WTP for Supply Chain module?",
      options:[
        {mr:"वेगळे नाही", en:"Won't pay separately"},
        {mr:"Rs 499", en:"Rs 499 today"},
        {mr:"Rs 999", en:"Rs 999 today"},
        {mr:"Rs 1,499", en:"Rs 1,499 after demo"},
        {mr:"Rs 1,999+", en:"Rs 1,999+ maybe"}
      ]},

    // ───────── M5 SALES & MARKETING (4 Q) ─────────
    {id:"M5-1", sec:"M", role:"O", type:"multi", max:3, required:true,
      q_mr:"Sales & Marketing मध्ये कोणती 3 features?", q_en:"Top 3 sales & marketing features?",
      options:[
        {mr:"Lead / enquiry tracking (CRM)", en:"Lead / enquiry tracking (CRM)"},
        {mr:"Auto quotation", en:"Auto quotation"},
        {mr:"IndiaMART / GeM जोडणी", en:"IndiaMART / GeM integration"},
        {mr:"मराठीत marketing content", en:"Marathi marketing content"},
        {mr:"WhatsApp / social auto-post", en:"WhatsApp / social auto-post"}
      ]},
    {id:"M5-2", sec:"M", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ कोणते Digital Tool insight सर्वात उपयोगी? (Sales)", q_en:"⭐ Most useful Digital Tool insight in sales?",
      options:[
        {mr:"कोणता customer परत order देईल", en:"Which customer will reorder"},
        {mr:"कोणती quotation बंद होईल", en:"Which quote will close"},
        {mr:"कोणता customer सोडून जातोय", en:"Which customer is slipping away"},
        {mr:"cross-sell सूचना", en:"Cross-sell suggestion"},
        {mr:"कोणत्या lead वर लक्ष द्यावे", en:"Which lead to focus on"}
      ]},
    {id:"M5-3", sec:"M", role:"O", type:"single", required:true,
      q_mr:"Digital marketing आज कोण करते?", q_en:"Who does your digital marketing today?",
      options:[
        {mr:"कोणीच नाही", en:"Nobody"},
        {mr:"मी स्वतः (वेळ मिळेल तसे)", en:"Myself, when I find time"},
        {mr:"एक कर्मचारी", en:"One employee"},
        {mr:"बाहेरून agency", en:"Outside agency"},
        {mr:"गरज वाटत नाही", en:"Don't feel the need"}
      ]},
    {id:"M5-4", sec:"M", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ Sales & Marketing module साठी किती द्याल?", q_en:"⭐ Monthly WTP for Sales & Marketing module?",
      options:[
        {mr:"वेगळे नाही", en:"Won't pay separately"},
        {mr:"Rs 499", en:"Rs 499 today"},
        {mr:"Rs 999", en:"Rs 999 today"},
        {mr:"Rs 1,499", en:"Rs 1,499 after demo"},
        {mr:"Rs 1,999+", en:"Rs 1,999+ maybe"}
      ]},

    // ───────── M6 HR & PAYROLL (4 Q) ─────────
    {id:"M6-1", sec:"M", role:"O", type:"multi", max:3, required:true,
      q_mr:"HR मध्ये कोणती 3 features हवीत?", q_en:"Top 3 HR & payroll features?",
      options:[
        {mr:"हजेरी (face / biometric)", en:"Attendance (face / biometric)"},
        {mr:"Payroll + PF / ESIC / PT / TDS", en:"Payroll + PF / ESIC / PT / TDS"},
        {mr:"WhatsApp ने payslip", en:"Payslip via WhatsApp"},
        {mr:"ECR + Form 16 / 24Q auto", en:"ECR + Form 16 / 24Q auto"},
        {mr:"Skill matrix + training", en:"Skill matrix + training"}
      ]},
    {id:"M6-2", sec:"M", role:"O", type:"single", required:true,
      q_mr:"Payroll आज कसे करता?", q_en:"How do you do payroll today?",
      options:[
        {mr:"हाताने / Excel", en:"Manually / Excel"},
        {mr:"Accountant / CA", en:"Accountant / CA"},
        {mr:"Tally", en:"Tally"},
        {mr:"वेगळे payroll software", en:"Separate payroll software"},
        {mr:"ठरलेली पद्धत नाही", en:"No fixed method"}
      ]},
    {id:"M6-3", sec:"M", role:"O", type:"single", required:true,
      q_mr:"कोणते Digital Tool insight उपयोगी? (HR)", q_en:"Most useful Digital Tool insight in HR?",
      options:[
        {mr:"गैरहजेरीचा production वर परिणाम", en:"Absence impact on production"},
        {mr:"overtime / payroll खर्च इशारा", en:"Overtime / payroll cost alert"},
        {mr:"कोणाला training हवे", en:"Who needs training"},
        {mr:"compliance deadline (PF / ESIC)", en:"Compliance deadline (PF / ESIC)"},
        {mr:"attrition धोका", en:"Attrition risk"}
      ]},
    {id:"M6-4", sec:"M", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ HR module साठी किती द्याल?", q_en:"⭐ Monthly WTP for HR module?",
      options:[
        {mr:"वेगळे नाही", en:"Won't pay separately"},
        {mr:"Rs 499", en:"Rs 499 today"},
        {mr:"Rs 999", en:"Rs 999 today"},
        {mr:"Rs 1,499", en:"Rs 1,499 after demo"},
        {mr:"Rs 1,999+", en:"Rs 1,999+ maybe"}
      ]},

    // ───────── SECTION E — DIGITAL BUSINESS MANAGER (8 Q) ─────────
    {id:"E1", sec:"E", role:"A", type:"single", required:true, decisive:true,
      q_mr:"⭐ Digital Business Manager — किती आकर्षक वाटते?", q_en:"⭐ The Digital Business Manager idea — how appealing is it?",
      help_mr:"एक Digital Tool जो तुमच्या सगळ्या modules मधील माहिती बघून — प्रश्नांची उत्तरे देतो (ASSIST), अडचणीत मार्ग दाखवतो (NAVIGATE), सुधारणा सुचवतो (SUGGEST), आणि धोक्याचा आधीच इशारा देतो (ALERT).",
      help_en:"A Digital Tool that reads across all your modules to answer questions (ASSIST), guide you through problems (NAVIGATE), suggest improvements (SUGGEST), and warn of risks early (ALERT).",
      options:[
        {mr:"हेच मुख्य कारण असेल घेण्याचे", en:"This alone is a reason to buy"},
        {mr:"खूप उपयोगी", en:"Very useful"},
        {mr:"ठीक", en:"Okay"},
        {mr:"खात्री नाही", en:"Not sure"},
        {mr:"गरज वाटत नाही", en:"Don't see the need"}
      ]},
    {id:"E2", sec:"E", role:"O,M", type:"single", required:true, decisive:true,
      q_mr:"⭐ Digital Tool च्या 4 कामांपैकी कोणते सर्वात महत्त्वाचे?", q_en:"⭐ Of the Digital Tool's 4 jobs, which matters MOST to you?",
      options:[
        {mr:"उत्तर देणे (ASSIST) — प्रश्न विचारतो", en:"ASSIST — answer my questions"},
        {mr:"मार्ग दाखवणे (NAVIGATE) — अडचणीत", en:"NAVIGATE — guide me through problems"},
        {mr:"सुचवणे (SUGGEST) — सुधारणा", en:"SUGGEST — recommend improvements"},
        {mr:"इशारा (ALERT) — धोका आधीच", en:"ALERT — warn me of risk early"},
        {mr:"सर्व सारखेच", en:"All equally"}
      ]},
    {id:"E3", sec:"E", role:"O", type:"multi", max:3, required:true,
      q_mr:"Digital Tool ने कोणत्या गोष्टींवर इशारा द्यावा? (टॉप 3)", q_en:"What should the Digital Tool ALERT you about? (pick top 3)",
      options:[
        {mr:"Cash कमी पडण्याचा धोका", en:"Cash shortage risk"},
        {mr:"Machine बंद पडण्याचा धोका", en:"Machine breakdown risk"},
        {mr:"Order उशीर", en:"Order will be late"},
        {mr:"Compliance / GST deadline", en:"Compliance / GST deadline"},
        {mr:"Quality / defect वाढ", en:"Quality / defect spike"},
        {mr:"इतर (नमूद करा)", en:"Other (specify)"}
      ]},
    {id:"E4", sec:"E", role:"O", type:"multi", max:3, required:true,
      q_mr:"Digital Tool ने रोज सकाळी काय सांगावे? (टॉप 3)", q_en:"What should the Digital Tool tell you every morning? (pick top 3)",
      options:[
        {mr:"आजच्या top 3 गोष्टी", en:"Today's top 3 priorities"},
        {mr:"Cash स्थिती", en:"Cash position"},
        {mr:"आज कोणते order / delivery", en:"Today's orders / deliveries"},
        {mr:"कालचे problems", en:"Yesterday's problems"},
        {mr:"आजचे deadline / अलर्ट", en:"Today's deadlines / alerts"}
      ]},
    {id:"E5", sec:"E", role:"O", type:"single", required:true,
      q_mr:"Digital Tool ला बोलून प्रश्न विचाराल का?", q_en:"Would you ask the Digital Tool questions by voice?",
      options:[
        {mr:"हो — रोज अनेक वेळा", en:"Yes — many times a day"},
        {mr:"हो — कधीतरी", en:"Yes — sometimes"},
        {mr:"typing करेन", en:"I'll type instead"},
        {mr:"दुसरे कोणी वापरेल", en:"Someone else will use it"},
        {mr:"नाही", en:"No"}
      ]},
    {id:"E6", sec:"E", role:"O,M", type:"single", required:true, decisive:true,
      q_mr:"⭐ Digital Tool चा सल्ला तुम्ही किती विश्वासाने वापराल?", q_en:"⭐ How much would you trust the Digital Tool's advice?",
      options:[
        {mr:"पूर्ण — कृती करेन", en:"Fully — will act on it"},
        {mr:"बघून, मग कृती", en:"Will verify, then act"},
        {mr:"फक्त माहिती म्हणून", en:"Only as information"},
        {mr:"साशंक राहीन", en:"Will stay skeptical"},
        {mr:"माहीत नाही", en:"Don't know"}
      ]},
    {id:"E7", sec:"E", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ Digital Tool रोज वापराल का (6 महिने)?", q_en:"⭐ Would you USE the Digital Tool daily for 6 months?",
      options:[
        {mr:"नक्की — आजच sign करेन", en:"Definitely — sign today"},
        {mr:"बहुधा हो", en:"Probably yes"},
        {mr:"कदाचित", en:"Maybe"},
        {mr:"बहुधा नाही", en:"Probably not"},
        {mr:"नाही", en:"No"}
      ]},
    {id:"E8", sec:"E", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ Digital Manager साठी वेगळे पैसे द्याल का?", q_en:"⭐ Would you pay extra specifically for the Digital Manager?",
      options:[
        {mr:"हो — Rs 500+/महिना", en:"Yes — Rs 500+/month extra"},
        {mr:"हो — Rs 200-500", en:"Yes — Rs 200-500"},
        {mr:"modules सोबत आले तरच", en:"Only if bundled with modules"},
        {mr:"वेगळे नाही", en:"Not separately"},
        {mr:"माहीत नाही", en:"Don't know"}
      ]},

    // ───────── SECTION F — GTM & ACQUISITION (5 Q) ─────────
    {id:"F1", sec:"F", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ अशा tool बद्दल तुम्ही कुठून ऐकाल / विश्वास ठेवाल?", q_en:"⭐ Where would you hear about / trust such a tool?",
      options:[
        {mr:"दुसरा MSME मालक (ओळखीचा)", en:"Another MSME owner I know"},
        {mr:"उद्योग संघटना (association)", en:"Industry association"},
        {mr:"सरकारी MSME कार्यक्रम", en:"Government MSME programme"},
        {mr:"WhatsApp / YouTube / social", en:"WhatsApp / YouTube / social"},
        {mr:"CA / consultant", en:"CA / consultant"}
      ]},
    {id:"F2", sec:"F", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ नवीन MSME मित्राला तुम्ही शिफारस कराल का?", q_en:"⭐ Would you recommend a good tool to another MSME owner?",
      options:[
        {mr:"हो — लगेच सांगेन", en:"Yes — actively tell others"},
        {mr:"हो — विचारल्यास", en:"Yes — if asked"},
        {mr:"कदाचित", en:"Maybe"},
        {mr:"बहुधा नाही", en:"Probably not"},
        {mr:"नाही", en:"No"}
      ]},
    {id:"F3", sec:"F", role:"O,M", type:"single", required:true,
      q_mr:"सुरुवात (onboarding) कशी हवी?", q_en:"How do you want to get started (onboarding)?",
      options:[
        {mr:"स्वतः — video + WhatsApp मदत", en:"Self — videos + WhatsApp help"},
        {mr:"Online video call", en:"Online video call"},
        {mr:"कोणीतरी factory ला येऊन", en:"Someone visits the factory"},
        {mr:"WhatsApp वर टप्प्याटप्प्याने", en:"WhatsApp step-by-step"},
        {mr:"सर्व करून द्या (white-glove)", en:"Do it all for me"}
      ]},
    {id:"F4", sec:"F", role:"O", type:"single", required:true,
      q_mr:"सुरुवातीला किती दिवसात तयार व्हायला हवे?", q_en:"How quickly must you be up and running?",
      options:[
        {mr:"1 दिवस", en:"1 day"},
        {mr:"2-3 दिवस", en:"2-3 days"},
        {mr:"1 आठवडा", en:"1 week"},
        {mr:"2-4 आठवडे", en:"2-4 weeks"},
        {mr:"वेळेची घाई नाही", en:"No rush"}
      ]},
    {id:"F5", sec:"F", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ Free trial असेल तर?", q_en:"⭐ If there were a free version / trial?",
      options:[
        {mr:"लगेच सुरू करेन", en:"Would start immediately"},
        {mr:"बघेन मग ठरवेन", en:"Would try then decide"},
        {mr:"कोणी दाखवले तरच", en:"Only if someone shows me"},
        {mr:"free वर विश्वास नाही", en:"Don't trust free"},
        {mr:"माहीत नाही", en:"Don't know"}
      ]},

    // ───────── SECTION G — PRICING & PACKAGING (5 Q) ─────────
    {id:"G1", sec:"G", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ Rs 999 मध्ये 3 module + Digital Tool + 4 user — कसे वाटते?", q_en:"⭐ Rs 999/mo for 3 modules + Digital Manager + 4 users — how does this feel?",
      help_mr:"आपली योजना: Free = 1 module + 1 user (Digital Tool नाही); Rs 999 = 3 modules + Digital Manager + 4 users; Rs 1,999 = सर्व 6 modules + Digital Tool + 7 users.",
      help_en:"Our plan: Free = 1 module + 1 user (no Digital Tool); Rs 999 = 3 modules + Digital Manager + 4 users; Rs 1,999 = all 6 modules + Digital Tool + 7 users.",
      options:[
        {mr:"स्वस्त — लगेच घेईन", en:"Cheap — would buy immediately"},
        {mr:"योग्य किंमत", en:"Fair price"},
        {mr:"थोडे महाग पण ठीक", en:"A bit high but OK"},
        {mr:"महाग", en:"Expensive"},
        {mr:"खूप महाग", en:"Too expensive"}
      ]},
    {id:"G2", sec:"G", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ सर्व 6 module + Digital Tool + 7 user साठी Rs 1,999 — कसे?", q_en:"⭐ Rs 1,999/mo for all 6 modules + Digital Tool + 7 users — how does this feel?",
      options:[
        {mr:"स्वस्त", en:"Cheap"},
        {mr:"योग्य", en:"Fair"},
        {mr:"थोडे महाग पण ठीक", en:"A bit high but OK"},
        {mr:"महाग", en:"Expensive"},
        {mr:"खूप महाग", en:"Too expensive"}
      ]},
    {id:"G3", sec:"G", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ तुम्ही बहुधा कोणती योजना घ्याल?", q_en:"⭐ Which plan would you most likely choose?",
      options:[
        {mr:"Free (1 module)", en:"Free (1 module)"},
        {mr:"Rs 999 (3 module + Digital Tool)", en:"Rs 999 (3 modules + Digital Tool)"},
        {mr:"Rs 1,999 (सर्व + Digital Tool)", en:"Rs 1,999 (all + Digital Tool)"},
        {mr:"आधी free, मग ठरवेन", en:"Free first, then decide"},
        {mr:"काहीच नाही", en:"None"}
      ]},
    {id:"G4", sec:"G", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ Free मध्ये Digital Manager नाही — यामुळे upgrade कराल?", q_en:"⭐ Free has NO Digital Manager — would that make you upgrade to paid?",
      options:[
        {mr:"हो — Digital Tool साठी नक्की upgrade", en:"Yes — would upgrade for the Digital Tool"},
        {mr:"कदाचित", en:"Maybe"},
        {mr:"आधी free वापरून बघेन", en:"Would use free a while first"},
        {mr:"नाही — free पुरेसे", en:"No — free is enough"},
        {mr:"माहीत नाही", en:"Don't know"}
      ]},
    {id:"G5", sec:"G", role:"O", type:"single", required:true,
      q_mr:"किती लवकर पैसे वसूल (ROI) व्हायला हवे?", q_en:"How fast must the tool pay for itself?",
      options:[
        {mr:"1 महिन्यात", en:"Within 1 month"},
        {mr:"1-3 महिने", en:"1-3 months"},
        {mr:"3-6 महिने", en:"3-6 months"},
        {mr:"6-12 महिने", en:"6-12 months"},
        {mr:"12 महिने+ चालेल", en:"12+ months OK"}
      ]},

    // ───────── SECTION H — PRODUCT-MARKET FIT (4 Q) ─────────
    {id:"H1", sec:"H", role:"A", type:"single", required:true, decisive:true,
      q_mr:"⭐ हा tool उद्या बंद झाला तर तुम्हाला कसे वाटेल?", q_en:"⭐ If this tool stopped existing tomorrow, how would you feel?",
      help_mr:"हाच एक प्रश्न PMF आहे की नाही ठरवतो. प्रामाणिक उत्तर द्या.",
      help_en:"This one question decides PMF. Please answer honestly.",
      options:[
        {mr:"1 — काही फरक नाही", en:"1 — No difference"},
        {mr:"2 — थोडे वाईट", en:"2 — Slightly bad"},
        {mr:"3 — काही प्रमाणात", en:"3 — Somewhat bad"},
        {mr:"4 — खूप वाईट", en:"4 — Very bad"},
        {mr:"5 — मोठा त्रास होईल", en:"5 — Devastated"}
      ]},
    {id:"H2", sec:"H", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ 30 दिवसांत हा tool घ्याल का?", q_en:"⭐ Would you buy this tool within 30 days?",
      options:[
        {mr:"नक्की हो", en:"Definitely yes"},
        {mr:"बहुधा हो", en:"Probably yes"},
        {mr:"कदाचित", en:"Maybe"},
        {mr:"बहुधा नाही", en:"Probably not"},
        {mr:"नाही", en:"No"}
      ]},
    {id:"H3", sec:"H", role:"O", type:"single", required:true, decisive:true,
      q_mr:"⭐ एक feature जे असेल तरच घ्याल — कोणते?", q_en:"⭐ ONE feature that is a must-have for you to buy — which?",
      options:[
        {mr:"Digital Business Manager", en:"Digital Business Manager"},
        {mr:"Marathi voice + सोपी data entry", en:"Marathi voice + easy data entry"},
        {mr:"Tally / SAP जोडणी", en:"Tally / SAP integration"},
        {mr:"Camera quality तपासणी", en:"Camera quality inspection"},
        {mr:"WhatsApp + offline", en:"WhatsApp + offline"}
      ]},
    {id:"H4", sec:"H", role:"A", type:"text", required:false,
      q_mr:"आणखी काही सांगायचे? (कोणतेही feature / अपेक्षा)", q_en:"Anything else? (any feature / expectation you want)",
      help_mr:"मुक्त उत्तर — कोणतेही feature, अपेक्षा, अडचण.",
      help_en:"Open feedback — any feature, expectation, or concern."}
  ]
};


// ── Hindi Translation Map ──
const HINDI_TRANSLATIONS = {
  "A1": {
    "q": "प्राथमिक उद्योग क्षेत्र?",
    "opts": [
      "ऑटो पार्ट्स / इंजीनियरिंग",
      "खाद्य / फार्मा / रसायन",
      "कपड़ा / प्लास्टिक / पैकेजिंग",
      "इलेक्ट्रॉनिक्स / फाउंड्री",
      "अन्य (बताएं)"
    ]
  },
  "A2": {
    "q": "कंपनी में आपकी भूमिका?",
    "opts": [
      "मालिक / डायरेक्टर",
      "प्लांट मैनेजर",
      "सुपरवाइजर",
      "ऑपरेटर / तकनीशियन",
      "अकाउंटेंट / प्रशासन"
    ]
  },
  "A3": {
    "q": "कुल कर्मचारी कितने हैं?",
    "opts": [
      "5 से 15",
      "16 से 50",
      "51 से 100",
      "101 से 250",
      "250 से अधिक"
    ]
  },
  "A3b": {
    "q": "वार्षिक कारोबार कितना है?",
    "opts": [
      "1 करोड़ से कम",
      "Rs 1 से 5 करोड़",
      "Rs 5 से 25 करोड़",
      "Rs 25 से 100 करोड़",
      "100 करोड़ से अधिक"
    ]
  },
  "A4": {
    "q": "आज कौन सा business software उपयोग करते हैं?",
    "opts": [
      "कुछ नहीं - केवल कागज / Excel",
      "केवल Tally",
      "Tally + WhatsApp + कुछ apps",
      "SAP / Zoho / Odoo / ERP",
      "अन्य (बताएं)"
    ]
  },
  "A5": {
    "q": "कितना काम अभी भी manual है?",
    "opts": [
      "80% से अधिक",
      "60-80%",
      "40-60%",
      "20-40%",
      "20% से कम"
    ]
  },
  "A6": {
    "q": "इस tool का सबसे अधिक उपयोग किस device पर?",
    "opts": [
      "केवल मोबाइल",
      "मोबाइल + tablet",
      "मोबाइल + laptop/desktop",
      "केवल desktop/laptop",
      "मुख्यतः WhatsApp से"
    ]
  },
  "B1": {
    "q": "आज business की स्थिति कैसे जांचते हैं? (टॉप 2)",
    "opts": [
      "Bank balance + मानसिक हिसाब",
      "Accountant से / WhatsApp",
      "Tally / software खोलते हैं",
      "Floor पर घूमकर + supervisor",
      "अन्य (बताएं)"
    ]
  },
  "B2": {
    "q": "⭐ Operational जानकारी कहाँ रहती है?",
    "opts": [
      "मालिक के दिमाग में",
      "1-2 मुख्य लोगों के दिमाग में",
      "कागज + WhatsApp",
      "Excel + Tally",
      "Documented + Software"
    ]
  },
  "B3": {
    "q": "पिछले 12 महीनों की सबसे बड़ी परेशानियां? (टॉप 3)",
    "opts": [
      "Cash flow / payment देरी",
      "Production / मशीन बंद",
      "Material / vendor समस्या",
      "Compliance / GST / जुर्माना",
      "Worker / quality / शिकायतें",
      "अन्य (बताएं)"
    ]
  },
  "B4": {
    "q": "नए digital tool के बारे में आप कैसे हैं?",
    "opts": [
      "जल्दी अपनाने वाला",
      "सिद्ध होने पर अपनाता हूं",
      "सबसे बाद में",
      "मजबूरी में ही",
      "Manual ही पसंद है"
    ]
  },
  "B5": {
    "q": "रोजाना समीक्षा कब होती है?",
    "opts": [
      "सुबह + शाम",
      "रोज एक बार",
      "साप्ताहिक",
      "समस्या आने पर ही",
      "कोई निर्धारित review नहीं"
    ]
  },
  "B6": {
    "q": "⭐ नया software क्यों बंद किया (पहले)?",
    "opts": [
      "बहुत जटिल",
      "भाषा की समस्या",
      "समय नहीं / data entry बहुत",
      "फायदा नहीं दिखा",
      "कभी उपयोग ही नहीं किया"
    ]
  },
  "C1": {
    "q": "⭐ क्या आप अपना Dashboard खुद सजा सकें?",
    "opts": [
      "हाँ - पूरी तरह मेरे तरीके से",
      "हाँ - ready-made विकल्प चाहिए",
      "फर्क नहीं",
      "नहीं - simple रखें",
      "पता नहीं"
    ]
  },
  "C2": {
    "q": "Dashboard पर पहली नजर में क्या चाहिए? (टॉप 5)",
    "opts": [
      "Cash + प्राप्य रकम",
      "Order + production status",
      "Compliance deadline + alert",
      "Quality / rejection rate",
      "आज की टॉप 3 प्राथमिकताएं"
    ]
  },
  "C3": {
    "q": "⭐ जानकारी भरने का सबसे आसान तरीका?",
    "opts": [
      "बोलकर (voice)",
      "एक-दो tap / button",
      "Camera से scan / photo",
      "Type करके",
      "अन्य (बताएं)"
    ]
  },
  "C4": {
    "q": "कितना समय लगे तो data entry छोड़ देंगे?",
    "opts": [
      "10 सेकंड",
      "30 सेकंड",
      "1 मिनट",
      "2-3 मिनट ठीक है",
      "समय की कोई समस्या नहीं"
    ]
  },
  "C5": {
    "q": "सबसे महत्वपूर्ण मौजूदा Tool Integration? (टॉप 3)",
    "opts": [
      "Tally (दोनों तरफ)",
      "SAP / ERP (दोनों तरफ)",
      "Zoho",
      "GST portal + bank",
      "WhatsApp + GeM / IndiaMART",
      "अन्य (बताएं)"
    ]
  },
  "C6": {
    "q": "⭐ क्या Tally / SAP का data अपने आप आना चाहिए?",
    "opts": [
      "हाँ - deal-breaker",
      "हाँ - बहुत जरूरी",
      "अच्छा है पर जरूरी नहीं",
      "नहीं - नई शुरुआत ठीक",
      "ERP उपयोग नहीं करते"
    ]
  },
  "C7": {
    "q": "⭐ Internet न हो तब भी app चलना चाहिए?",
    "opts": [
      "अत्यंत जरूरी - पूरे दिन offline",
      "महत्वपूर्ण - कुछ घंटे",
      "कभी-कभी - network कमजोर",
      "कम जरूरत",
      "हमेशा online रहते हैं"
    ]
  },
  "C8": {
    "q": "⭐ English / Hindi / मराठी में बोलकर जानकारी भरना कितना जरूरी?",
    "opts": [
      "अत्यंत जरूरी - नहीं तो उपयोग नहीं",
      "बहुत जरूरी - रोज उपयोग",
      "ठीक है - कभी-कभी",
      "जरूरत नहीं - typing ठीक",
      "पता नहीं"
    ]
  },
  "C9": {
    "q": "कौन सी चीजें बोलकर करना पसंद? (टॉप 3)",
    "opts": [
      "Defect / quality दर्ज करना",
      "Production count / downtime",
      "Material / order पूछताछ",
      "Digital Tool से सवाल पूछना",
      "रोजाना summary सुनना"
    ]
  },
  "C10": {
    "q": "कौन सी भाषाएं चाहिए?",
    "opts": [
      "मराठी",
      "हिंदी",
      "English",
      "गुजराती / तमिल",
      "सभी"
    ]
  },
  "C11": {
    "q": "⭐ क्या अलग-अलग लोगों को अलग भाषा चाहिए?",
    "opts": [
      "मालिक English, operator मराठी",
      "सभी को मराठी",
      "सभी को हिंदी",
      "व्यक्ति के अनुसार अलग",
      "सभी को English ठीक"
    ]
  },
  "C12": {
    "q": "⭐ Mobile Camera से Quality Check - कितना उपयोगी?",
    "opts": [
      "बहुत - यही मुख्य कारण होगा",
      "उपयोगी - उपयोग करूंगा",
      "शायद - देखना होगा",
      "हमारे काम में उपयोग नहीं",
      "पता नहीं"
    ]
  },
  "C13": {
    "q": "दृश्य गुणवत्ता जांच आज कैसे होती है?",
    "opts": [
      "आंखों से, अनुभवी व्यक्ति",
      "मापने के यंत्र",
      "कोई निर्धारित जांच नहीं",
      "Lab / बाहर से",
      "Camera / machine vision पहले से"
    ]
  },
  "C14": {
    "q": "⭐ WhatsApp से alert, report, अनुमति - कितना जरूरी?",
    "opts": [
      "अत्यंत जरूरी - WhatsApp के बिना नहीं",
      "बहुत जरूरी",
      "अच्छा है",
      "App ही काफी है",
      "पता नहीं"
    ]
  },
  "D1": {
    "q": "⭐ 6 modules में से सबसे जरूरी 3?",
    "opts": [
      "Finance",
      "Production & Operations",
      "Quality",
      "Supply Chain & Logistics",
      "Sales & Marketing"
    ]
  },
  "D2": {
    "q": "⭐ केवल एक module ले सकें तो?",
    "opts": [
      "Finance",
      "Production & Operations",
      "Quality",
      "Supply Chain & Logistics",
      "HR / Sales (अन्य)"
    ]
  },
  "D3": {
    "q": "HR module कितना जरूरी है?",
    "opts": [
      "अत्यंत जरूरी",
      "जरूरी",
      "मध्यम",
      "कम",
      "जरूरत नहीं"
    ]
  },
  "M1-1": {
    "q": "Finance में कौन सी 3 features सबसे जरूरी?",
    "opts": [
      "Cash forecast",
      "प्राप्य + payment reminder",
      "GST reconciliation + auto returns",
      "Product-wise margin",
      "खर्च + budget tracking"
    ]
  },
  "M1-2": {
    "q": "⭐ Finance में सबसे उपयोगी Digital Tool insight?",
    "opts": [
      "22 दिनों में cash संकट चेतावनी",
      "कौन सा payment पहले मांगें",
      "कौन सा खर्च कम करें",
      "GST deadline + जुर्माना alert",
      "margin कहाँ रिस रहा है"
    ]
  },
  "M1-3": {
    "q": "कौन से finance integration चाहिए?",
    "opts": [
      "Tally दोनों तरफ",
      "Bank (auto statement)",
      "GST portal",
      "UPI / Razorpay",
      "SAP / Zoho"
    ]
  },
  "M1-4": {
    "q": "⭐ Finance के लिए महीने में कितना देंगे?",
    "opts": [
      "अलग से नहीं देंगे",
      "Rs 499",
      "Rs 999",
      "Rs 1,499",
      "Rs 1,999+"
    ]
  },
  "M2-1": {
    "q": "Production में कौन सी 3 features चाहिए?",
    "opts": [
      "Digital Tool daily schedule",
      "Machine status + downtime",
      "Target vs actual + OEE",
      "Bottleneck prediction",
      "7 AM WhatsApp priority list"
    ]
  },
  "M2-2": {
    "q": "⭐ Production में सबसे उपयोगी Digital Tool insight?",
    "opts": [
      "आज bottleneck कहाँ होगा",
      "कौन सी machine को maintenance",
      "कौन सा order देरी से होगा",
      "Worker/machine reassign सुझाव",
      "कल की planning सुझाना"
    ]
  },
  "M2-3": {
    "q": "Operator के रूप में production कैसे दर्ज करेंगे?",
    "opts": [
      "बोलकर (voice)",
      "Button / tap से",
      "Camera से",
      "Type करके",
      "दर्ज नहीं करेंगे"
    ]
  },
  "M2-4": {
    "q": "⭐ Production module के लिए महीने में कितना?",
    "opts": [
      "अलग से नहीं",
      "Rs 499",
      "Rs 999",
      "Rs 1,499",
      "Rs 1,999+"
    ]
  },
  "M3-1": {
    "q": "Quality में कौन सी 3 features चाहिए?",
    "opts": [
      "हिंदी में बोलकर SOP तैयार",
      "Camera से defect जांच",
      "Digital Tool defect prediction",
      "NCR + 5-Why / 8D",
      "Customer complaint tracking"
    ]
  },
  "M3-2": {
    "q": "⭐ Camera से quality जांच - उपयोग करेंगे?",
    "opts": [
      "हाँ - रोज, कई parts",
      "हाँ - महत्वपूर्ण parts के लिए",
      "शायद - सटीकता देखकर",
      "नहीं - हाथ से जांचते हैं",
      "पता नहीं"
    ]
  },
  "M3-3": {
    "q": "⭐ Quality में सबसे उपयोगी Digital Tool insight?",
    "opts": [
      "48 घंटे पहले defect चेतावनी",
      "कौन सी machine/operator को अधिक defect",
      "defect का मूल कारण",
      "कौन सा batch खतरे में",
      "ISO 9001 तैयारी मार्गदर्शन"
    ]
  },
  "M3-4": {
    "q": "⭐ Quality module के लिए महीने में कितना?",
    "opts": [
      "अलग से नहीं",
      "Rs 499",
      "Rs 999",
      "Rs 1,499",
      "Rs 1,999+"
    ]
  },
  "M4-1": {
    "q": "Supply chain में कौन सी 3 features चाहिए?",
    "opts": [
      "Auto-reorder (stock कम alert)",
      "Vendor scoring",
      "Dead stock पहचान",
      "Shipment tracking + e-way bill",
      "Vendors में मूल्य तुलना"
    ]
  },
  "M4-2": {
    "q": "⭐ Supply Chain में सबसे उपयोगी Digital Tool insight?",
    "opts": [
      "अभी क्या re-order करें",
      "कौन सा vendor देरी करेगा",
      "stock में कितना cash फंसा",
      "Substitute material सुझाना",
      "Delivery देरी alert"
    ]
  },
  "M4-3": {
    "q": "Inventory आज कैसे संभालते हैं?",
    "opts": [
      "कागज / register",
      "Excel",
      "Tally / software",
      "दिमाग में / अनुमान से",
      "Barcode / system"
    ]
  },
  "M4-4": {
    "q": "⭐ Supply Chain module के लिए महीने में कितना?",
    "opts": [
      "अलग से नहीं",
      "Rs 499",
      "Rs 999",
      "Rs 1,499",
      "Rs 1,999+"
    ]
  },
  "M5-1": {
    "q": "Sales & Marketing में कौन सी 3 features?",
    "opts": [
      "Lead / enquiry tracking (CRM)",
      "Auto quotation",
      "IndiaMART / GeM जोड़ना",
      "हिंदी में marketing content",
      "WhatsApp / social auto-post"
    ]
  },
  "M5-2": {
    "q": "⭐ Sales में सबसे उपयोगी Digital Tool insight?",
    "opts": [
      "कौन सा customer दोबारा order देगा",
      "कौन सी quotation close होगी",
      "कौन सा customer जा रहा है",
      "Cross-sell सुझाव",
      "किस lead पर ध्यान दें"
    ]
  },
  "M5-3": {
    "q": "Digital marketing आज कौन करता है?",
    "opts": [
      "कोई नहीं",
      "मैं खुद (समय मिलने पर)",
      "एक कर्मचारी",
      "बाहर से agency",
      "जरूरत नहीं लगती"
    ]
  },
  "M5-4": {
    "q": "⭐ Sales & Marketing module के लिए महीने में कितना?",
    "opts": [
      "अलग से नहीं",
      "Rs 499",
      "Rs 999",
      "Rs 1,499",
      "Rs 1,999+"
    ]
  },
  "M6-1": {
    "q": "HR में कौन सी 3 features चाहिए?",
    "opts": [
      "उपस्थिति (face / biometric)",
      "Payroll + PF/ESIC/PT/TDS",
      "WhatsApp से payslip",
      "ECR + Form 16/24Q auto",
      "Skill matrix + training"
    ]
  },
  "M6-2": {
    "q": "Payroll आज कैसे करते हैं?",
    "opts": [
      "हाथ से / Excel",
      "Accountant / CA",
      "Tally",
      "अलग payroll software",
      "कोई निर्धारित तरीका नहीं"
    ]
  },
  "M6-3": {
    "q": "HR में कौन सा Digital Tool insight उपयोगी?",
    "opts": [
      "अनुपस्थिति का production पर असर",
      "Overtime / payroll खर्च alert",
      "किसे training चाहिए",
      "Compliance deadline (PF/ESIC)",
      "Attrition खतरा"
    ]
  },
  "M6-4": {
    "q": "⭐ HR module के लिए महीने में कितना?",
    "opts": [
      "अलग से नहीं",
      "Rs 499",
      "Rs 999",
      "Rs 1,499",
      "Rs 1,999+"
    ]
  },
  "E1": {
    "q": "⭐ Digital Business Manager - कितना आकर्षक लगता है?",
    "opts": [
      "यही मुख्य कारण होगा खरीदने का",
      "बहुत उपयोगी",
      "ठीक है",
      "निश्चित नहीं",
      "जरूरत नहीं लगती"
    ]
  },
  "E2": {
    "q": "⭐ Digital Tool के 4 कामों में कौन सा सबसे जरूरी?",
    "opts": [
      "ASSIST - मेरे सवालों के जवाब दे",
      "NAVIGATE - समस्या में मार्गदर्शन",
      "SUGGEST - सुधार सुझाए",
      "ALERT - खतरे की पहले चेतावनी",
      "सभी समान"
    ]
  },
  "E3": {
    "q": "Digital Tool को किन चीजों पर alert देना चाहिए? (टॉप 3)",
    "opts": [
      "Cash कम होने का खतरा",
      "Machine बंद होने का खतरा",
      "Order में देरी",
      "Compliance / GST deadline",
      "Quality / defect में वृद्धि",
      "अन्य (बताएं)"
    ]
  },
  "E4": {
    "q": "Digital Tool को रोज सुबह क्या बताना चाहिए? (टॉप 3)",
    "opts": [
      "आज की टॉप 3 प्राथमिकताएं",
      "Cash स्थिति",
      "आज के order / delivery",
      "कल की समस्याएं",
      "आज की deadlines / alerts"
    ]
  },
  "E5": {
    "q": "क्या Digital Tool से बोलकर सवाल पूछेंगे?",
    "opts": [
      "हाँ - दिन में कई बार",
      "हाँ - कभी-कभी",
      "Type करूंगा",
      "कोई और उपयोग करेगा",
      "नहीं"
    ]
  },
  "E6": {
    "q": "⭐ Digital Tool की सलाह पर कितना भरोसा?",
    "opts": [
      "पूरा - कदम उठाऊंगा",
      "देखकर फिर कदम उठाऊंगा",
      "केवल जानकारी के रूप में",
      "संदेहास्पद रहूंगा",
      "पता नहीं"
    ]
  },
  "E7": {
    "q": "⭐ क्या Digital Tool रोज उपयोग करेंगे (6 महीने)?",
    "opts": [
      "जरूर - आज ही sign करूंगा",
      "शायद हाँ",
      "हो सकता है",
      "शायद नहीं",
      "नहीं"
    ]
  },
  "E8": {
    "q": "⭐ Digital Manager के लिए अलग से पैसे देंगे?",
    "opts": [
      "हाँ - Rs 500+/महीना अतिरिक्त",
      "हाँ - Rs 200-500",
      "modules के साथ आए तभी",
      "अलग से नहीं",
      "पता नहीं"
    ]
  },
  "F1": {
    "q": "⭐ इस tool के बारे में कहाँ से सुनेंगे / भरोसा करेंगे?",
    "opts": [
      "दूसरा MSME मालिक",
      "उद्योग संघ",
      "सरकारी MSME कार्यक्रम",
      "WhatsApp / YouTube / social",
      "CA / consultant"
    ]
  },
  "F2": {
    "q": "⭐ क्या MSME दोस्त को सिफारिश करेंगे?",
    "opts": [
      "हाँ - तुरंत बताऊंगा",
      "हाँ - पूछने पर",
      "शायद",
      "शायद नहीं",
      "नहीं"
    ]
  },
  "F3": {
    "q": "शुरुआत (onboarding) कैसी चाहिए?",
    "opts": [
      "खुद - video + WhatsApp मदद",
      "Online video call",
      "कोई factory में आकर",
      "WhatsApp पर चरण-दर-चरण",
      "सब कर दें"
    ]
  },
  "F4": {
    "q": "शुरू में कितने दिनों में तैयार होना चाहिए?",
    "opts": [
      "1 दिन",
      "2-3 दिन",
      "1 सप्ताह",
      "2-4 सप्ताह",
      "कोई जल्दी नहीं"
    ]
  },
  "F5": {
    "q": "⭐ अगर free trial हो तो?",
    "opts": [
      "तुरंत शुरू करूंगा",
      "देखूंगा फिर तय करूंगा",
      "कोई दिखाए तभी",
      "free पर भरोसा नहीं",
      "पता नहीं"
    ]
  },
  "G1": {
    "q": "⭐ Rs 999 में 3 module + Digital Tool + 4 user - कैसा लगता है?",
    "opts": [
      "सस्ता - तुरंत लूंगा",
      "उचित मूल्य",
      "थोड़ा महंगा पर ठीक",
      "महंगा",
      "बहुत महंगा"
    ]
  },
  "G2": {
    "q": "⭐ Rs 1,999 में सभी 6 modules + Digital Tool + 7 user - कैसा?",
    "opts": [
      "सस्ता",
      "उचित",
      "थोड़ा महंगा पर ठीक",
      "महंगा",
      "बहुत महंगा"
    ]
  },
  "G3": {
    "q": "⭐ आप किस plan को लेंगे?",
    "opts": [
      "Free (1 module)",
      "Rs 999 (3 modules + Digital Tool)",
      "Rs 1,999 (सभी + Digital Tool)",
      "पहले free फिर तय करेंगे",
      "कुछ नहीं"
    ]
  },
  "G4": {
    "q": "⭐ Free में Digital Manager नहीं - upgrade करेंगे?",
    "opts": [
      "हाँ - Digital Tool के लिए जरूर upgrade",
      "शायद",
      "पहले free उपयोग करके देखेंगे",
      "नहीं - free काफी है",
      "पता नहीं"
    ]
  },
  "G5": {
    "q": "कितनी जल्दी ROI होना चाहिए?",
    "opts": [
      "1 महीने में",
      "1-3 महीने",
      "3-6 महीने",
      "6-12 महीने",
      "12 महीने+ ठीक है"
    ]
  },
  "H1": {
    "q": "⭐ अगर यह tool कल बंद हो जाए तो कैसा लगेगा?",
    "opts": [
      "1 - कोई फर्क नहीं",
      "2 - थोड़ा बुरा",
      "3 - कुछ हद तक बुरा",
      "4 - बहुत बुरा",
      "5 - बड़ी परेशानी होगी"
    ]
  },
  "H2": {
    "q": "⭐ क्या 30 दिनों में यह tool लेंगे?",
    "opts": [
      "जरूर हाँ",
      "शायद हाँ",
      "हो सकता है",
      "शायद नहीं",
      "नहीं"
    ]
  },
  "H3": {
    "q": "⭐ एक feature जो हो तभी लेंगे - कौन सा?",
    "opts": [
      "Digital Business Manager",
      "हिंदी voice + आसान data entry",
      "Tally / SAP जोड़ना",
      "Camera quality जांच",
      "WhatsApp + offline"
    ]
  },
  "H4": {
    "q": "और कुछ कहना है? (कोई भी feature / उम्मीद)",
    "opts": []
  }
};

// ── Merge Hindi into QUESTIONS_DATA ──
(function() {
  var Q = QUESTIONS_DATA.questions;
  for (var i = 0; i < Q.length; i++) {
    var hi = HINDI_TRANSLATIONS[Q[i].id];
    if (!hi) continue;
    Q[i].q_hi = hi.q;
    if (Q[i].options && hi.opts) {
      for (var j = 0; j < Q[i].options.length; j++) {
        if (hi.opts[j]) Q[i].options[j].hi = hi.opts[j];
      }
    }
  }
})();

if (typeof module !== 'undefined') {
  module.exports = { QUESTIONS_DATA: QUESTIONS_DATA, HINDI_TRANSLATIONS: HINDI_TRANSLATIONS };
}