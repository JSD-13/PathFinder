export type LangCode = "en" | "ur" | "hi" | "ne" | "tl";

export interface Concept {
  title: Record<LangCode, string>;
  summary: Record<LangCode, string>;
  keyPoints: Record<LangCode, string[]>;
}

export interface Subject {
  slug: string;
  name: string;
  category: string;
  emoji: string;
  description: Record<LangCode, string>;
  concepts: Concept[];
}

export const LANGUAGES: { code: LangCode; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ur", label: "اردو" },
  { code: "hi", label: "हिन्दी" },
  { code: "ne", label: "नेपाली" },
  { code: "tl", label: "Tagalog" },
];

// Curated essentials. Real product would have full curriculum; this is enough to feel substantive.
export const SUBJECTS: Subject[] = [
  {
    slug: "physics",
    name: "Physics",
    category: "Science",
    emoji: "⚡",
    description: {
      en: "Physics studies how matter and energy behave — from tiny atoms to entire galaxies.",
      ur: "فزکس مادے اور توانائی کے رویے کا مطالعہ ہے — چھوٹے ایٹم سے لے کر پوری کہکشاؤں تک۔",
      hi: "भौतिकी पदार्थ और ऊर्जा के व्यवहार का अध्ययन है — परमाणुओं से लेकर आकाशगंगाओं तक।",
      ne: "भौतिकशास्त्र पदार्थ र ऊर्जाको व्यवहारको अध्ययन हो — सानो परमाणुदेखि आकाशगंगासम्म।",
      tl: "Pinag-aaralan ng Physics ang kilos ng matter at enerhiya — mula sa atomo hanggang galaxy.",
    },
    concepts: [
      {
        title: {
          en: "Newton's Laws of Motion",
          ur: "نیوٹن کے قوانینِ حرکت",
          hi: "न्यूटन के गति के नियम",
          ne: "न्यूटनका गतिका नियमहरू",
          tl: "Mga Batas ng Galaw ni Newton",
        },
        summary: {
          en: "Three rules that explain how objects move when forces act on them.",
          ur: "تین قوانین جو بتاتے ہیں کہ جب اشیاء پر قوت لگائی جائے تو وہ کیسے حرکت کرتی ہیں۔",
          hi: "तीन नियम जो बताते हैं कि वस्तुओं पर बल लगने पर वे कैसे चलती हैं।",
          ne: "तीन नियमहरू जसले वस्तुहरूमा बल लाग्दा कसरी चल्छन् भन्ने व्याख्या गर्छन्।",
          tl: "Tatlong tuntunin na nagpapaliwanag kung paano gumagalaw ang mga bagay kapag may puwersa.",
        },
        keyPoints: {
          en: [
            "1st Law: An object stays still or moves at constant speed unless a force acts on it (inertia).",
            "2nd Law: Force = mass × acceleration (F = ma).",
            "3rd Law: Every action has an equal and opposite reaction.",
          ],
          ur: [
            "پہلا قانون: قوت لگنے تک شے ساکن یا یکساں رفتار سے چلتی رہتی ہے (جمود)۔",
            "دوسرا قانون: قوت = کمیت × اسراع (F = ma)۔",
            "تیسرا قانون: ہر عمل کا برابر اور مخالف ردِعمل ہوتا ہے۔",
          ],
          hi: [
            "पहला नियम: बल न लगे तो वस्तु स्थिर या समान वेग से चलती रहती है (जड़त्व)।",
            "दूसरा नियम: बल = द्रव्यमान × त्वरण (F = ma)।",
            "तीसरा नियम: हर क्रिया की बराबर और विपरीत प्रतिक्रिया होती है।",
          ],
          ne: [
            "पहिलो नियम: बल नलागेसम्म वस्तु स्थिर वा एकनासे गतिमा रहन्छ (जडत्व)।",
            "दोस्रो नियम: बल = द्रव्यमान × त्वरण (F = ma)।",
            "तेस्रो नियम: हरेक क्रियाको बराबर र विपरीत प्रतिक्रिया हुन्छ।",
          ],
          tl: [
            "1st: Nananatiling nakatigil o pantay ang bilis kung walang puwersa (inertia).",
            "2nd: Puwersa = masa × aselerasyon (F = ma).",
            "3rd: Bawat aksyon may katumbas at kasalungat na reaksyon.",
          ],
        },
      },
      {
        title: {
          en: "Energy & Conservation",
          ur: "توانائی اور بقاء",
          hi: "ऊर्जा और संरक्षण",
          ne: "ऊर्जा र संरक्षण",
          tl: "Enerhiya at Konserbasyon",
        },
        summary: {
          en: "Energy can change form but is never created or destroyed.",
          ur: "توانائی شکل بدل سکتی ہے لیکن نہ پیدا ہوتی ہے نہ ختم۔",
          hi: "ऊर्जा रूप बदल सकती है पर बनाई या नष्ट नहीं की जा सकती।",
          ne: "ऊर्जाले रूप बदल्न सक्छ तर बन्न वा नष्ट हुन सक्दैन।",
          tl: "Maaaring magbago ng anyo ang enerhiya pero hindi ito nawawala o naglilikha.",
        },
        keyPoints: {
          en: [
            "Kinetic energy (KE) = ½mv² — energy of motion.",
            "Potential energy (PE) = mgh — stored energy from height.",
            "Total energy stays constant in a closed system.",
          ],
          ur: [
            "حرکی توانائی (KE) = ½mv² — حرکت کی توانائی۔",
            "وضعی توانائی (PE) = mgh — بلندی کی ذخیرہ شدہ توانائی۔",
            "بند نظام میں کل توانائی مستقل رہتی ہے۔",
          ],
          hi: [
            "गतिज ऊर्जा (KE) = ½mv² — गति की ऊर्जा।",
            "स्थितिज ऊर्जा (PE) = mgh — ऊँचाई से संचित ऊर्जा।",
            "बंद तंत्र में कुल ऊर्जा स्थिर रहती है।",
          ],
          ne: [
            "गतिज ऊर्जा (KE) = ½mv² — गतिको ऊर्जा।",
            "स्थितिज ऊर्जा (PE) = mgh — उचाईबाट सञ्चित ऊर्जा।",
            "बन्द प्रणालीमा कुल ऊर्जा स्थिर रहन्छ।",
          ],
          tl: [
            "Kinetic energy (KE) = ½mv² — enerhiya ng paggalaw.",
            "Potential energy (PE) = mgh — naka-imbak dahil sa taas.",
            "Sa sarado na sistema, hindi nagbabago ang kabuuang enerhiya.",
          ],
        },
      },
    ],
  },
  {
    slug: "chemistry",
    name: "Chemistry",
    category: "Science",
    emoji: "🧪",
    description: {
      en: "Chemistry is the study of substances — what they're made of and how they change.",
      ur: "کیمسٹری مادوں کا مطالعہ ہے — وہ کس چیز سے بنے ہیں اور کیسے تبدیل ہوتے ہیں۔",
      hi: "रसायन विज्ञान पदार्थों का अध्ययन है — वे किस चीज़ से बने हैं और कैसे बदलते हैं।",
      ne: "रसायनशास्त्र पदार्थहरूको अध्ययन हो — के बनेका छन् र कसरी परिवर्तन हुन्छन्।",
      tl: "Ang Chemistry ay pag-aaral ng mga sangkap — kung saan gawa at paano nagbabago.",
    },
    concepts: [
      {
        title: {
          en: "Atoms & The Periodic Table",
          ur: "ایٹم اور دوری جدول",
          hi: "परमाणु और आवर्त सारणी",
          ne: "परमाणु र आवर्त तालिका",
          tl: "Atomo at Periodic Table",
        },
        summary: {
          en: "Everything is made of atoms. The periodic table organises them by their properties.",
          ur: "ہر چیز ایٹموں سے بنی ہے۔ دوری جدول انہیں خصوصیات کے مطابق ترتیب دیتا ہے۔",
          hi: "हर चीज़ परमाणुओं से बनी है। आवर्त सारणी उन्हें गुणों के अनुसार व्यवस्थित करती है।",
          ne: "सबै चीज परमाणुबाट बनेका हुन्छन्। आवर्त तालिकाले गुणअनुसार व्यवस्थित गर्छ।",
          tl: "Lahat ay gawa sa atomo. Ino-organisa ng periodic table ang mga ito ayon sa katangian.",
        },
        keyPoints: {
          en: [
            "Atom = protons (+), neutrons (0), electrons (−).",
            "Atomic number = number of protons.",
            "Groups (columns) share similar chemical behaviour.",
          ],
          ur: [
            "ایٹم = پروٹون (+)، نیوٹران (0)، الیکٹران (−)۔",
            "جوہری عدد = پروٹونوں کی تعداد۔",
            "گروپ (کالم) ملتی جلتی کیمیائی خصوصیات رکھتے ہیں۔",
          ],
          hi: [
            "परमाणु = प्रोटॉन (+), न्यूट्रॉन (0), इलेक्ट्रॉन (−)।",
            "परमाणु क्रमांक = प्रोटॉन की संख्या।",
            "समूह (कॉलम) में समान रासायनिक व्यवहार होता है।",
          ],
          ne: [
            "परमाणु = प्रोटोन (+), न्युट्रोन (0), इलेक्ट्रोन (−)।",
            "परमाणु क्रमांक = प्रोटोनको संख्या।",
            "समूह (स्तम्भ) ले समान रासायनिक व्यवहार देखाउँछन्।",
          ],
          tl: [
            "Atomo = proton (+), neutron (0), electron (−).",
            "Atomic number = bilang ng proton.",
            "Magkakapareho ng kilos ang mga elemento sa parehong group.",
          ],
        },
      },
      {
        title: {
          en: "Acids, Bases & pH",
          ur: "تیزاب، اساس اور pH",
          hi: "अम्ल, क्षार और pH",
          ne: "अम्ल, क्षार र pH",
          tl: "Acid, Base, at pH",
        },
        summary: {
          en: "pH measures how acidic or basic a solution is, on a scale from 0 to 14.",
          ur: "pH بتاتا ہے محلول کتنا تیزابی یا اساسی ہے، 0 سے 14 کے پیمانے پر۔",
          hi: "pH बताता है कि घोल कितना अम्लीय या क्षारीय है, 0 से 14 के पैमाने पर।",
          ne: "pH ले घोल कति अम्लीय वा क्षारीय छ भनेर 0 देखि 14 सम्मको स्केलमा देखाउँछ।",
          tl: "Sinusukat ng pH kung gaano ka-asido o basic ang solusyon, 0 hanggang 14.",
        },
        keyPoints: {
          en: [
            "pH < 7 = acidic (lemon, vinegar).",
            "pH = 7 = neutral (pure water).",
            "pH > 7 = basic / alkaline (soap, bleach).",
          ],
          ur: [
            "pH < 7 = تیزابی (لیموں، سرکہ)۔",
            "pH = 7 = غیر جانبدار (خالص پانی)۔",
            "pH > 7 = اساسی / الکلائن (صابن، بلیچ)۔",
          ],
          hi: [
            "pH < 7 = अम्लीय (नींबू, सिरका)।",
            "pH = 7 = उदासीन (शुद्ध पानी)।",
            "pH > 7 = क्षारीय (साबुन, ब्लीच)।",
          ],
          ne: [
            "pH < 7 = अम्लीय (कागती, सिर्का)।",
            "pH = 7 = निरपेक्ष (शुद्ध पानी)।",
            "pH > 7 = क्षारीय (साबुन, ब्लीच)।",
          ],
          tl: [
            "pH < 7 = asido (limon, suka).",
            "pH = 7 = neutral (purong tubig).",
            "pH > 7 = basic (sabon, bleach).",
          ],
        },
      },
    ],
  },
  {
    slug: "biology",
    name: "Biology",
    category: "Science",
    emoji: "🧬",
    description: {
      en: "Biology is the study of living things — how they grow, work, and interact.",
      ur: "حیاتیات جانداروں کا مطالعہ ہے — وہ کیسے بڑھتے، کام کرتے اور تعامل کرتے ہیں۔",
      hi: "जीव विज्ञान जीवों का अध्ययन है — वे कैसे बढ़ते, काम करते और बातचीत करते हैं।",
      ne: "जीवविज्ञान जीवित प्राणीहरूको अध्ययन हो — कसरी बढ्छन्, काम गर्छन् र अन्तरक्रिया गर्छन्।",
      tl: "Pag-aaral ng Biology ang mga buhay na bagay — paano lumalaki, gumagana, at nakikipag-ugnayan.",
    },
    concepts: [
      {
        title: {
          en: "The Cell",
          ur: "خلیہ",
          hi: "कोशिका",
          ne: "कोषिका",
          tl: "Selula",
        },
        summary: {
          en: "Cells are the basic units of life. All living things are made of one or more cells.",
          ur: "خلیے زندگی کی بنیادی اکائی ہیں۔ تمام جاندار ایک یا زیادہ خلیوں سے بنے ہیں۔",
          hi: "कोशिकाएँ जीवन की मूल इकाई हैं। सभी जीव एक या अधिक कोशिकाओं से बने हैं।",
          ne: "कोषिका जीवनको आधारभूत एकाइ हुन्। सबै जीवहरू एक वा बढी कोषिकाबाट बनेका हुन्छन्।",
          tl: "Pinakamaliit na yunit ng buhay ang selula. Bawat buhay ay may isa o mas marami pa.",
        },
        keyPoints: {
          en: [
            "Nucleus stores DNA (genetic instructions).",
            "Mitochondria release energy from food (respiration).",
            "Plant cells also have a cell wall and chloroplasts.",
          ],
          ur: [
            "نیوکلیئس DNA رکھتا ہے (وراثتی ہدایات)۔",
            "مائٹوکونڈریا خوراک سے توانائی نکالتا ہے (تنفس)۔",
            "پودوں کے خلیوں میں دیوار اور کلوروپلاسٹ بھی ہوتے ہیں۔",
          ],
          hi: [
            "केन्द्रक DNA संग्रहित करता है (आनुवंशिक निर्देश)।",
            "माइटोकॉन्ड्रिया भोजन से ऊर्जा निकालता है (श्वसन)।",
            "पादप कोशिकाओं में कोशिका भित्ति और हरितलवक भी होते हैं।",
          ],
          ne: [
            "केन्द्रकले DNA राख्छ (आनुवंशिक निर्देशन)।",
            "माइटोकोन्ड्रियाले खानाबाट ऊर्जा निकाल्छ (श्वसन)।",
            "बिरुवाको कोषिकामा कोषभित्ता र हरितकण पनि हुन्छन्।",
          ],
          tl: [
            "Nasa nucleus ang DNA (genetic instructions).",
            "Naglalabas ng enerhiya mula sa pagkain ang mitochondria.",
            "May cell wall at chloroplast din ang halaman cells.",
          ],
        },
      },
    ],
  },
  {
    slug: "mathematics-core",
    name: "Mathematics (Core)",
    category: "Mathematics",
    emoji: "📐",
    description: {
      en: "The compulsory math course covering algebra, geometry, statistics and more.",
      ur: "لازمی ریاضی جس میں الجبرا، جیومیٹری، شماریات وغیرہ شامل ہیں۔",
      hi: "अनिवार्य गणित जिसमें बीजगणित, ज्यामिति और सांख्यिकी आदि शामिल हैं।",
      ne: "अनिवार्य गणित — बीजगणित, ज्यामिति, सांख्यिकी आदि।",
      tl: "Sapilitang Math: algebra, geometry, statistics, at iba pa.",
    },
    concepts: [
      {
        title: {
          en: "Quadratic Equations",
          ur: "درجہ دوم مساوات",
          hi: "द्विघात समीकरण",
          ne: "द्विघात समीकरण",
          tl: "Quadratic Equations",
        },
        summary: {
          en: "Equations of the form ax² + bx + c = 0. Solve using factoring or the quadratic formula.",
          ur: "ax² + bx + c = 0 کی شکل کی مساوات۔ فیکٹرنگ یا کوادراٹک فارمولا سے حل۔",
          hi: "ax² + bx + c = 0 के रूप के समीकरण। गुणनखंड या सूत्र से हल।",
          ne: "ax² + bx + c = 0 रूपको समीकरण। गुणनखण्ड वा सूत्रबाट हल।",
          tl: "Anyo ng ax² + bx + c = 0. Lutasin via factoring o quadratic formula.",
        },
        keyPoints: {
          en: [
            "Quadratic formula: x = (−b ± √(b² − 4ac)) / 2a",
            "Discriminant b² − 4ac tells you how many real roots there are.",
            "The graph is a parabola (U-shape).",
          ],
          ur: [
            "کوادراٹک فارمولا: x = (−b ± √(b² − 4ac)) / 2a",
            "ڈسکریمیننٹ b² − 4ac حقیقی جڑوں کی تعداد بتاتا ہے۔",
            "گراف پیرابولا (U شکل) ہوتا ہے۔",
          ],
          hi: [
            "सूत्र: x = (−b ± √(b² − 4ac)) / 2a",
            "विविक्तकर b² − 4ac वास्तविक मूलों की संख्या बताता है।",
            "ग्राफ परवलय (U आकार) होता है।",
          ],
          ne: [
            "सूत्र: x = (−b ± √(b² − 4ac)) / 2a",
            "विविक्तक b² − 4ac ले वास्तविक मूलहरूको संख्या जनाउँछ।",
            "ग्राफ पारवलय (U आकार) हुन्छ।",
          ],
          tl: [
            "Formula: x = (−b ± √(b² − 4ac)) / 2a",
            "Sinasabi ng discriminant b² − 4ac ang bilang ng real roots.",
            "Parabola (hugis-U) ang graph.",
          ],
        },
      },
    ],
  },
  {
    slug: "economics",
    name: "Economics",
    category: "Humanities",
    emoji: "💰",
    description: {
      en: "Economics studies how people, businesses and governments choose to use limited resources.",
      ur: "معاشیات کا مطالعہ ہے کہ لوگ، کاروبار اور حکومتیں محدود وسائل کیسے استعمال کرتے ہیں۔",
      hi: "अर्थशास्त्र अध्ययन है कि लोग, व्यवसाय और सरकारें सीमित संसाधनों का उपयोग कैसे करते हैं।",
      ne: "अर्थशास्त्रले मानिस, व्यवसाय र सरकारले सीमित स्रोत कसरी प्रयोग गर्छन् भनेर अध्ययन गर्छ।",
      tl: "Pinag-aaralan ng Economics paano ginagamit ng tao, negosyo, at gobyerno ang limitadong yaman.",
    },
    concepts: [
      {
        title: {
          en: "Supply & Demand",
          ur: "رسد اور طلب",
          hi: "आपूर्ति और माँग",
          ne: "आपूर्ति र माग",
          tl: "Supply at Demand",
        },
        summary: {
          en: "Prices are set where what sellers offer (supply) meets what buyers want (demand).",
          ur: "قیمت وہاں طے ہوتی ہے جہاں بیچنے والوں کی پیشکش (رسد) خریداروں کی خواہش (طلب) سے ملتی ہے۔",
          hi: "कीमत वहाँ तय होती है जहाँ विक्रेताओं की आपूर्ति खरीदारों की माँग से मिलती है।",
          ne: "मूल्य त्यहाँ तय हुन्छ जहाँ विक्रेताको आपूर्ति र क्रेताको माग मेल खान्छ।",
          tl: "Itinatakda ang presyo kung saan nagtatagpo ang supply at demand.",
        },
        keyPoints: {
          en: [
            "Demand usually falls when price rises.",
            "Supply usually rises when price rises.",
            "Equilibrium price is where supply = demand.",
          ],
          ur: [
            "قیمت بڑھنے پر طلب عموماً کم ہوتی ہے۔",
            "قیمت بڑھنے پر رسد عموماً بڑھتی ہے۔",
            "توازن قیمت وہاں ہے جہاں رسد = طلب۔",
          ],
          hi: [
            "कीमत बढ़ने पर आमतौर पर माँग घटती है।",
            "कीमत बढ़ने पर आमतौर पर आपूर्ति बढ़ती है।",
            "संतुलन कीमत वहाँ है जहाँ आपूर्ति = माँग।",
          ],
          ne: [
            "मूल्य बढ्दा माग प्राय: घट्छ।",
            "मूल्य बढ्दा आपूर्ति प्राय: बढ्छ।",
            "सन्तुलन मूल्य त्यहाँ हुन्छ जहाँ आपूर्ति = माग।",
          ],
          tl: [
            "Bumababa ang demand kapag tumataas ang presyo.",
            "Tumataas ang supply kapag tumataas ang presyo.",
            "Equilibrium kapag supply = demand.",
          ],
        },
      },
    ],
  },
  {
    slug: "ict",
    name: "ICT",
    category: "Technology",
    emoji: "💻",
    description: {
      en: "Information and Communication Technology — how computers, networks and software work.",
      ur: "معلوماتی ٹیکنالوجی — کمپیوٹر، نیٹ ورک اور سافٹ ویئر کیسے کام کرتے ہیں۔",
      hi: "सूचना और संचार प्रौद्योगिकी — कंप्यूटर, नेटवर्क और सॉफ्टवेयर कैसे काम करते हैं।",
      ne: "सूचना तथा सञ्चार प्रविधि — कम्प्युटर, नेटवर्क र सफ्टवेयर कसरी काम गर्छन्।",
      tl: "ICT — paano gumagana ang computer, network at software.",
    },
    concepts: [
      {
        title: {
          en: "Algorithms",
          ur: "الگورتھم",
          hi: "एल्गोरिदम",
          ne: "एल्गोरिदम",
          tl: "Algorithm",
        },
        summary: {
          en: "An algorithm is a step-by-step set of instructions to solve a problem.",
          ur: "الگورتھم مسئلہ حل کرنے کے قدم بہ قدم ہدایات ہیں۔",
          hi: "एल्गोरिदम समस्या हल करने के लिए चरण-दर-चरण निर्देश हैं।",
          ne: "एल्गोरिदम भनेको समस्या समाधानका लागि चरणबद्ध निर्देशनहरू हुन्।",
          tl: "Hakbang-hakbang na tagubilin para malutas ang problema.",
        },
        keyPoints: {
          en: [
            "Should be clear, finite, and produce an output.",
            "Common ones: searching (linear, binary), sorting (bubble, insertion).",
            "Efficiency is measured by time and space complexity.",
          ],
          ur: [
            "واضح، محدود اور نتیجہ خیز ہونا چاہیے۔",
            "عام: تلاش (لکیری، بائنری)، ترتیب (بَبل، انسرشن)۔",
            "کارکردگی وقت اور جگہ کی پیچیدگی سے ناپی جاتی ہے۔",
          ],
          hi: [
            "स्पष्ट, सीमित और परिणाम देने वाला होना चाहिए।",
            "सामान्य: खोज (रैखिक, बाइनरी), छँटाई (बबल, इंसर्शन)।",
            "दक्षता समय और स्थान जटिलता से मापी जाती है।",
          ],
          ne: [
            "स्पष्ट, सीमित र परिणाम दिने हुनुपर्छ।",
            "सामान्य: खोजी (रैखिक, बाइनरी), क्रमबद्ध (बबल, इन्सर्शन)।",
            "दक्षता समय र स्थान जटिलताबाट मापन हुन्छ।",
          ],
          tl: [
            "Dapat malinaw, limitado, at may output.",
            "Karaniwan: searching (linear, binary), sorting (bubble, insertion).",
            "Sinusukat ang efficiency sa time at space complexity.",
          ],
        },
      },
    ],
  },
];

export const getSubject = (slug: string) => SUBJECTS.find((s) => s.slug === slug);
