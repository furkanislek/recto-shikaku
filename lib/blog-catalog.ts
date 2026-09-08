import { SHIKAKU_ARTICLES, type BlogArticle } from "./blog-content";
import { SITE_LOCALES, type SiteLocale } from "./locales";

export type BlogPost = BlogArticle & {
    key: "what-is-shikaku" | "how-to-play-shikaku" | "puzzle" | "mobile-puzzle" | "mobile-shikaku";
    slug: string;
};

const WHAT_IS_SLUGS: Record<SiteLocale, string> = {
    tr: "shikaku-bulmaca-nedir", en: "what-is-shikaku", es: "que-es-shikaku", pt: "o-que-e-shikaku", fr: "quest-ce-que-shikaku", de: "was-ist-shikaku", it: "cos-e-shikaku", nl: "wat-is-shikaku", pl: "czym-jest-shikaku", uk: "shcho-take-shikaku", ru: "chto-takoe-shikaku", sq: "cfare-eshte-shikaku", mk: "shto-e-shikaku", ar: "ma-huwa-shikaku", hi: "shikaku-kya-hai", th: "shikaku-khue-arai", vi: "shikaku-la-gi", id: "apa-itu-shikaku", zh: "shenme-shi-shikaku", ja: "shikaku-toha", ko: "shikaku-ran", "zh-Hant": "shenme-shi-shikaku", bn: "shikaku-ki", ca: "que-es-shikaku", cs: "co-je-shikaku", da: "hvad-er-shikaku", el: "ti-einai-shikaku", fi: "mika-on-shikaku", gu: "shikaku-shu-che", he: "ma-ze-shikaku", hr: "sto-je-shikaku", hu: "mi-a-shikaku", kn: "shikaku-endareenu", ml: "shikaku-enthaan", mr: "shikaku-mhanje-kay", ms: "apa-itu-shikaku", no: "hva-er-shikaku", or: "shikaku-kan", pa: "shikaku-ki-hai", ro: "ce-este-shikaku", sk: "co-je-shikaku", sl: "kaj-je-shikaku", sv: "vad-ar-shikaku", ta: "shikaku-enraal-enna", te: "shikaku-ante-emiti", ur: "shikaku-kya-hai",
};

const HOW_TO_SLUGS: Record<SiteLocale, string> = {
    tr: "shikaku-nasil-oynanir", en: "how-to-play-shikaku", es: "como-jugar-shikaku", pt: "como-jogar-shikaku", fr: "comment-jouer-a-shikaku", de: "wie-spielt-man-shikaku", it: "come-si-gioca-a-shikaku", nl: "hoe-speel-je-shikaku", pl: "jak-grac-w-shikaku", uk: "yak-graty-v-shikaku", ru: "kak-igrat-v-shikaku", sq: "si-luhet-shikaku", mk: "kako-se-igra-shikaku", ar: "kayfa-tulaab-shikaku", hi: "shikaku-kaise-khelen", th: "withi-len-shikaku", vi: "cach-choi-shikaku", id: "cara-bermain-shikaku", zh: "ru-he-wan-shikaku", ja: "shikaku-no-asobikata", ko: "shikaku-neun-eotteohge-hanayo", "zh-Hant": "ru-he-wan-shikaku", bn: "shikaku-kivabe-khelben", ca: "com-jugar-a-shikaku", cs: "jak-hrat-shikaku", da: "saadan-spiller-du-shikaku", el: "pos-na-paixeis-shikaku", fi: "miten-shikakua-pelataan", gu: "shikaku-kevi-rite-ramvu", he: "eich-mesachekim-shikaku", hr: "kako-igrati-shikaku", hu: "hogyan-jatssz-shikakut", kn: "shikaku-hege-aadodu", ml: "shikaku-engane-kalikkaam", mr: "shikaku-kase-khelave", ms: "cara-bermain-shikaku", no: "slik-spiller-du-shikaku", or: "shikaku-kipari-khelibe", pa: "shikaku-kiven-khediye", ro: "cum-se-joaca-shikaku", sk: "ako-hrat-shikaku", sl: "kako-igrati-shikaku", sv: "sa-spelar-du-shikaku", ta: "shikaku-eppadi-vilaiyaaduvathu", te: "shikaku-ela-aadali", ur: "shikaku-kaise-khelen",
};

const PUZZLE_WORDS: Record<SiteLocale, string> = {
    tr: "bulmaca", en: "puzzle", es: "rompecabezas", pt: "quebra-cabeca", fr: "casse-tete", de: "ratsel", it: "rompicapo", nl: "puzzel", pl: "lamiglowka", uk: "holovolomka", ru: "golovolomka", sq: "enigme", mk: "slagalica", ar: "alghaz", hi: "paheli", th: "phasna", vi: "cau-do", id: "teka-teki", zh: "mi-ti", ja: "pazuru", ko: "peojeul", "zh-Hant": "mi-ti", bn: "puzzle", ca: "trencaclosques", cs: "hlavolam", da: "puslespil", el: "pazl", fi: "pulma", gu: "pazal", he: "puzzle", hr: "zagonetka", hu: "rejtvany", kn: "puzzle", ml: "puzzle", mr: "kode", ms: "teka-teki", no: "puslespill", or: "pajl", pa: "pazal", ro: "puzzle", sk: "hlavolam", sl: "uganka", sv: "pussel", ta: "pudhir", te: "pajil", ur: "paheli",
};

const MOBILE_WORDS: Record<SiteLocale, string> = {
    tr: "mobil", en: "mobile", es: "movil", pt: "movel", fr: "mobile", de: "mobil", it: "mobile", nl: "mobiele", pl: "mobilna", uk: "mobilna", ru: "mobilnaya", sq: "celulare", mk: "mobilna", ar: "mobile", hi: "mobile", th: "mue-thue", vi: "di-dong", id: "seluler", zh: "shou-ji", ja: "sumaho", ko: "mobili", "zh-Hant": "shou-ji", bn: "mobile", ca: "mobil", cs: "mobilni", da: "mobil", el: "kinito", fi: "mobiili", gu: "mobile", he: "nayd", hr: "mobilna", hu: "mobil", kn: "mobile", ml: "mobile", mr: "mobile", ms: "mudah-alih", no: "mobil", or: "mobile", pa: "mobile", ro: "mobil", sk: "mobilna", sl: "mobilna", sv: "mobil", ta: "mobile", te: "mobile", ur: "mobile",
};

function topicSlug(locale: SiteLocale, key: "puzzle" | "mobile-puzzle" | "mobile-shikaku") {
    if (key === "puzzle") return `${PUZZLE_WORDS[locale]}-shikaku`;
    if (key === "mobile-puzzle") return `${MOBILE_WORDS[locale]}-${PUZZLE_WORDS[locale]}`;
    return `${MOBILE_WORDS[locale]}-shikaku`;
}

function makeTopicPost(locale: SiteLocale, key: "puzzle" | "mobile-puzzle" | "mobile-shikaku"): BlogPost {
    const source = SHIKAKU_ARTICLES[locale];
    const puzzleWord = PUZZLE_WORDS[locale];
    const mobileWord = MOBILE_WORDS[locale];
    const labels = {
        puzzle: `${puzzleWord} Shikaku`,
        "mobile-puzzle": `${mobileWord} ${puzzleWord}`,
        "mobile-shikaku": `${mobileWord} Shikaku`,
    };
    const label = labels[key];
    const displayLabel = `${label.charAt(0).toLocaleUpperCase(locale)}${label.slice(1)}`;
    return {
        ...source,
        key,
        slug: topicSlug(locale, key),
        title: `${displayLabel} | Recto`,
        description: `${source.description} ${displayLabel}.`,
        eyebrow: displayLabel.toUpperCase(),
        h1: displayLabel,
        intro: key === "mobile-shikaku" ? source.sections[2].body : source.intro,
        sections: [
            { title: displayLabel, body: source.intro },
            { title: source.sections[1].title, body: source.sections[1].body },
            { title: source.sections[2].title, body: source.sections[2].body },
        ],
    };
}

const HOW_TO_TITLES: Record<SiteLocale, { title: string; description: string; h1: string; eyebrow: string }> = {
    tr: { title: "Shikaku Nasıl Oynanır? 3 Basit Kural | Recto", description: "Shikaku bulmacasını üç basit kuralla öğren: sayıları oku, dikdörtgenleri çiz ve ızgarayı doldur.", h1: "Shikaku nasıl oynanır?", eyebrow: "SHIKAKU NASIL OYNANIR" },
    en: { title: "How to Play Shikaku: 3 Simple Rules | Recto", description: "Learn how to play Shikaku in three simple rules: read the numbers, draw rectangles, and fill the grid.", h1: "How to play Shikaku", eyebrow: "HOW TO PLAY SHIKAKU" },
    es: { title: "Cómo jugar a Shikaku: 3 reglas sencillas | Recto", description: "Aprende a jugar a Shikaku con tres reglas sencillas y resuelve el tablero sin adivinar.", h1: "Cómo jugar a Shikaku", eyebrow: "CÓMO JUGAR A SHIKAKU" },
    pt: { title: "Como jogar Shikaku: 3 regras simples | Recto", description: "Aprenda a jogar Shikaku com três regras simples e resolva a grade sem adivinhar.", h1: "Como jogar Shikaku", eyebrow: "COMO JOGAR SHIKAKU" },
    fr: { title: "Comment jouer à Shikaku : 3 règles simples | Recto", description: "Apprenez à jouer à Shikaku avec trois règles simples et remplissez la grille par déduction.", h1: "Comment jouer à Shikaku", eyebrow: "COMMENT JOUER À SHIKAKU" },
    de: { title: "Shikaku spielen: 3 einfache Regeln | Recto", description: "Lerne Shikaku mit drei einfachen Regeln und löse das Raster durch logisches Denken.", h1: "Wie spielt man Shikaku?", eyebrow: "SHIKAKU SPIELEN" },
    it: { title: "Come si gioca a Shikaku: 3 regole semplici | Recto", description: "Impara a giocare a Shikaku con tre regole semplici e completa la griglia senza indovinare.", h1: "Come si gioca a Shikaku", eyebrow: "COME GIOCARE A SHIKAKU" },
    nl: { title: "Shikaku spelen: 3 eenvoudige regels | Recto", description: "Leer Shikaku spelen met drie eenvoudige regels en los het raster logisch op.", h1: "Hoe speel je Shikaku?", eyebrow: "SHIKAKU SPELEN" },
    pl: { title: "Jak grać w Shikaku? 3 proste zasady | Recto", description: "Poznaj trzy proste zasady Shikaku i rozwiązuj planszę logicznie, bez zgadywania.", h1: "Jak grać w Shikaku?", eyebrow: "JAK GRAĆ W SHIKAKU" },
    uk: { title: "Як грати в Shikaku: 3 прості правила | Recto", description: "Дізнайтеся, як грати в Shikaku за трьома простими правилами та розв'язувати сітку логікою.", h1: "Як грати в Shikaku?", eyebrow: "ЯК ГРАТИ В SHIKAKU" },
    ru: { title: "Как играть в Shikaku: 3 простых правила | Recto", description: "Узнайте, как играть в Shikaku по трём простым правилам и решать сетку логикой.", h1: "Как играть в Shikaku?", eyebrow: "КАК ИГРАТЬ В SHIKAKU" },
    sq: { title: "Si luhet Shikaku? 3 rregulla të thjeshta | Recto", description: "Mësoni të luani Shikaku me tre rregulla të thjeshta dhe zgjidhni rrjetin me logjikë.", h1: "Si luhet Shikaku?", eyebrow: "SI LUFET SHIKAKU" },
    mk: { title: "Како се игра Shikaku? 3 едноставни правила | Recto", description: "Научете како се игра Shikaku со три едноставни правила и решавајте логички.", h1: "Како се игра Shikaku?", eyebrow: "КАКО СЕ ИГРА SHIKAKU" },
    ar: { title: "كيف تلعب شيكاكو؟ 3 قواعد بسيطة | Recto", description: "تعلّم لعب شيكاكو بثلاث قواعد بسيطة وحل الشبكة بالمنطق.", h1: "كيف تلعب شيكاكو؟", eyebrow: "كيف تلعب شيكاكو" },
    hi: { title: "Shikaku कैसे खेलें? 3 आसान नियम | Recto", description: "तीन आसान नियमों से Shikaku खेलना सीखें और ग्रिड को तर्क से हल करें।", h1: "Shikaku कैसे खेलें?", eyebrow: "SHIKAKU कैसे खेलें" },
    th: { title: "วิธีเล่น Shikaku: 3 กฎง่าย ๆ | Recto", description: "เรียนรู้วิธีเล่น Shikaku ด้วยกฎง่าย ๆ สามข้อและแก้ตารางด้วยตรรกะ", h1: "วิธีเล่น Shikaku", eyebrow: "วิธีเล่น SHIKAKU" },
    vi: { title: "Cách chơi Shikaku: 3 quy tắc đơn giản | Recto", description: "Học cách chơi Shikaku với ba quy tắc đơn giản và giải bảng bằng suy luận.", h1: "Cách chơi Shikaku", eyebrow: "CÁCH CHƠI SHIKAKU" },
    id: { title: "Cara bermain Shikaku: 3 aturan sederhana | Recto", description: "Pelajari cara bermain Shikaku dengan tiga aturan sederhana dan selesaikan kisi secara logis.", h1: "Cara bermain Shikaku", eyebrow: "CARA BERMAIN SHIKAKU" },
    zh: { title: "Shikaku 怎么玩？三个简单规则 | Recto", description: "用三个简单规则学习 Shikaku，通过逻辑完成整个网格。", h1: "Shikaku 怎么玩？", eyebrow: "SHIKAKU 玩法指南" },
    ja: { title: "Shikaku の遊び方：3つの簡単なルール | Recto", description: "3つの簡単なルールで Shikaku の遊び方を学び、推理で盤面を完成させましょう。", h1: "Shikaku の遊び方", eyebrow: "SHIKAKU の遊び方" },
    ko: { title: "Shikaku 플레이 방법: 3가지 간단한 규칙 | Recto", description: "세 가지 간단한 규칙으로 Shikaku를 배우고 논리적으로 격자를 완성하세요.", h1: "Shikaku 플레이 방법", eyebrow: "SHIKAKU 플레이 방법" },
    "zh-Hant": { title: "Shikaku 怎麼玩？三個簡單規則 | Recto", description: "用三個簡單規則學習 Shikaku，透過邏輯完成整個網格。", h1: "Shikaku 怎麼玩？", eyebrow: "SHIKAKU 玩法指南" },
    bn: { title: "Shikaku কীভাবে খেলবেন? ৩টি সহজ নিয়ম | Recto", description: "তিনটি সহজ নিয়মে Shikaku খেলতে শিখুন এবং যুক্তি দিয়ে গ্রিড সমাধান করুন।", h1: "Shikaku কীভাবে খেলবেন?", eyebrow: "SHIKAKU খেলার গাইড" },
    ca: { title: "Com jugar a Shikaku: 3 regles senzilles | Recto", description: "Aprèn a jugar a Shikaku amb tres regles senzilles i resol la graella amb lògica.", h1: "Com jugar a Shikaku", eyebrow: "COM JUGAR A SHIKAKU" },
    cs: { title: "Jak hrát Shikaku? 3 jednoduchá pravidla | Recto", description: "Naučte se hrát Shikaku podle tří jednoduchých pravidel a vyřešte mřížku logicky.", h1: "Jak hrát Shikaku?", eyebrow: "JAK HRÁT SHIKAKU" },
    da: { title: "Sådan spiller du Shikaku: 3 enkle regler | Recto", description: "Lær at spille Shikaku med tre enkle regler, og løs gitteret med logik.", h1: "Sådan spiller du Shikaku", eyebrow: "SÅDAN SPILLER DU SHIKAKU" },
    el: { title: "Πώς να παίξετε Shikaku: 3 απλοί κανόνες | Recto", description: "Μάθετε να παίζετε Shikaku με τρεις απλούς κανόνες και λύστε το πλέγμα με λογική.", h1: "Πώς να παίξετε Shikaku", eyebrow: "ΠΩΣ ΠΑΙΖΕΤΑΙ ΤΟ SHIKAKU" },
    fi: { title: "Näin pelaat Shikakua: 3 helppoa sääntöä | Recto", description: "Opi pelaamaan Shikakua kolmen helpon säännön avulla ja ratkaise ruudukko päättelyllä.", h1: "Näin pelaat Shikakua", eyebrow: "NÄIN PELAAT SHIKAKUA" },
    gu: { title: "Shikaku કેવી રીતે રમવું? 3 સરળ નિયમો | Recto", description: "ત્રણ સરળ નિયમોથી Shikaku રમતા શીખો અને તર્કથી ગ્રિડ ઉકેલો.", h1: "Shikaku કેવી રીતે રમવું?", eyebrow: "SHIKAKU રમવાની માર્ગદર્શિકા" },
    he: { title: "איך משחקים Shikaku? 3 כללים פשוטים | Recto", description: "למדו לשחק Shikaku בשלושה כללים פשוטים ופתרו את הרשת בהיגיון.", h1: "איך משחקים Shikaku?", eyebrow: "איך משחקים SHIKAKU" },
    hr: { title: "Kako igrati Shikaku? 3 jednostavna pravila | Recto", description: "Naučite igrati Shikaku uz tri jednostavna pravila i riješite mrežu logikom.", h1: "Kako igrati Shikaku?", eyebrow: "KAKO IGRATI SHIKAKU" },
    hu: { title: "Hogyan játssz Shikakut? 3 egyszerű szabály | Recto", description: "Tanuld meg a Shikaku három egyszerű szabályát, és oldd meg a rácsot logikával.", h1: "Hogyan játssz Shikakut?", eyebrow: "SHIKAKU JÁTÉKÚTMUTATÓ" },
    kn: { title: "Shikaku ಅನ್ನು ಹೇಗೆ ಆಡುವುದು? 3 ಸರಳ ನಿಯಮಗಳು | Recto", description: "ಮೂರು ಸರಳ ನಿಯಮಗಳೊಂದಿಗೆ Shikaku ಆಡುವುದನ್ನು ಕಲಿಯಿರಿ ಮತ್ತು ಗ್ರಿಡ್ ಅನ್ನು ತರ್ಕದಿಂದ ಪರಿಹರಿಸಿ.", h1: "Shikaku ಅನ್ನು ಹೇಗೆ ಆಡುವುದು?", eyebrow: "SHIKAKU ಆಟದ ಮಾರ್ಗದರ್ಶಿ" },
    ml: { title: "Shikaku എങ്ങനെ കളിക്കാം? 3 ലളിത നിയമങ്ങൾ | Recto", description: "മൂന്ന് ലളിത നിയമങ്ങളിലൂടെ Shikaku കളിക്കാനും ഗ്രിഡ് യുക്തിയോടെ പരിഹരിക്കാനും പഠിക്കുക.", h1: "Shikaku എങ്ങനെ കളിക്കാം?", eyebrow: "SHIKAKU കളിക്കുന്ന വിധം" },
    mr: { title: "Shikaku कसे खेळावे? ३ सोपे नियम | Recto", description: "तीन सोप्या नियमांनी Shikaku खेळायला शिका आणि ग्रिड तर्काने सोडवा.", h1: "Shikaku कसे खेळावे?", eyebrow: "SHIKAKU खेळण्याचे मार्गदर्शन" },
    ms: { title: "Cara bermain Shikaku: 3 peraturan mudah | Recto", description: "Pelajari cara bermain Shikaku dengan tiga peraturan mudah dan selesaikan grid secara logik.", h1: "Cara bermain Shikaku", eyebrow: "CARA BERMAIN SHIKAKU" },
    no: { title: "Slik spiller du Shikaku: 3 enkle regler | Recto", description: "Lær å spille Shikaku med tre enkle regler og løs rutenettet med logikk.", h1: "Slik spiller du Shikaku", eyebrow: "SLIK SPILLER DU SHIKAKU" },
    or: { title: "Shikaku କିପରି ଖେଳିବେ? ୩ଟି ସହଜ ନିୟମ | Recto", description: "ତିନୋଟି ସହଜ ନିୟମରେ Shikaku ଖେଳିବା ଶିଖନ୍ତୁ ଏବଂ ତର୍କରେ ଗ୍ରିଡ୍ ସମାଧାନ କରନ୍ତୁ।", h1: "Shikaku କିପରି ଖେଳିବେ?", eyebrow: "SHIKAKU ଖେଳ ଗାଇଡ୍" },
    pa: { title: "Shikaku ਕਿਵੇਂ ਖੇਡੀਏ? 3 ਸੌਖੇ ਨਿਯਮ | Recto", description: "ਤਿੰਨ ਸੌਖੇ ਨਿਯਮਾਂ ਨਾਲ Shikaku ਖੇਡਣਾ ਸਿੱਖੋ ਅਤੇ ਗਰਿੱਡ ਨੂੰ ਤਰਕ ਨਾਲ ਹੱਲ ਕਰੋ।", h1: "Shikaku ਕਿਵੇਂ ਖੇਡੀਏ?", eyebrow: "SHIKAKU ਖੇਡਣ ਦੀ ਗਾਈਡ" },
    ro: { title: "Cum se joacă Shikaku? 3 reguli simple | Recto", description: "Învață să joci Shikaku după trei reguli simple și rezolvă grila prin logică.", h1: "Cum se joacă Shikaku?", eyebrow: "CUM SE JOACĂ SHIKAKU" },
    sk: { title: "Ako hrať Shikaku? 3 jednoduché pravidlá | Recto", description: "Naučte sa hrať Shikaku podľa troch jednoduchých pravidiel a vyriešte mriežku logicky.", h1: "Ako hrať Shikaku?", eyebrow: "AKO HRAŤ SHIKAKU" },
    sl: { title: "Kako igrati Shikaku? 3 preprosta pravila | Recto", description: "Naučite se igrati Shikaku s tremi preprostimi pravili in rešite mrežo z logiko.", h1: "Kako igrati Shikaku?", eyebrow: "KAKO IGRATI SHIKAKU" },
    sv: { title: "Så spelar du Shikaku: 3 enkla regler | Recto", description: "Lär dig spela Shikaku med tre enkla regler och lös rutnätet med logik.", h1: "Så spelar du Shikaku", eyebrow: "SÅ SPELAR DU SHIKAKU" },
    ta: { title: "Shikaku விளையாடுவது எப்படி? 3 எளிய விதிகள் | Recto", description: "மூன்று எளிய விதிகளுடன் Shikaku விளையாடக் கற்றுக்கொண்டு கட்டத்தை தர்க்கத்தால் தீர்க்கவும்.", h1: "Shikaku விளையாடுவது எப்படி?", eyebrow: "SHIKAKU விளையாட்டு வழிகாட்டி" },
    te: { title: "Shikaku ఎలా ఆడాలి? 3 సులభమైన నియమాలు | Recto", description: "మూడు సులభమైన నియమాలతో Shikaku ఆడటం నేర్చుకుని గ్రిడ్‌ను తర్కంతో పరిష్కరించండి.", h1: "Shikaku ఎలా ఆడాలి?", eyebrow: "SHIKAKU ఆట గైడ్" },
    ur: { title: "Shikaku کیسے کھیلیں؟ 3 آسان اصول | Recto", description: "تین آسان اصولوں سے Shikaku کھیلنا سیکھیں اور گرڈ کو منطق سے حل کریں۔", h1: "Shikaku کیسے کھیلیں؟", eyebrow: "SHIKAKU کھیلنے کی گائیڈ" },
};

function makeHowToPost(locale: SiteLocale): BlogPost {
    const source = SHIKAKU_ARTICLES[locale];
    const copy = HOW_TO_TITLES[locale];
    return {
        ...source,
        ...copy,
        key: "how-to-play-shikaku",
        slug: HOW_TO_SLUGS[locale],
        intro: source.sections[0].body,
        sections: source.sections.map((section, index) => ({
            title: `${index + 1}. ${section.title}`,
            body: section.body,
        })),
        relatedLabel: source.relatedLabel,
    };
}

export const BLOG_POSTS: readonly BlogPost[] = SITE_LOCALES.flatMap((locale) => [
    { ...SHIKAKU_ARTICLES[locale.code], key: "what-is-shikaku" as const, slug: WHAT_IS_SLUGS[locale.code] },
    makeHowToPost(locale.code),
    makeTopicPost(locale.code, "puzzle"),
    makeTopicPost(locale.code, "mobile-puzzle"),
    makeTopicPost(locale.code, "mobile-shikaku"),
]);

export function getBlogPost(locale: SiteLocale, slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((post) => post.locale === locale && post.slug === slug);
}

export function blogPath(post: BlogPost): string {
    return `/blog/${post.locale.toLowerCase()}/${post.slug}`;
}