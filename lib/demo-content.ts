import type { SiteLocale } from "./locales";

export type DemoUi = {
  level: string;
  diff: string;
  completeTitle: string;
  score: string;
  time: string;
  moves: string;
  undo: string;
  hint: string;
  reset: string;
};

export const DEMO_UI: Record<SiteLocale, DemoUi> = {
  en: { level: "LEVEL 12", diff: "EASY", completeTitle: "SHIKAKU!", score: "SCORE", time: "TIME", moves: "MOVES", undo: "UNDO", hint: "HINT", reset: "RESET" },
  tr: { level: "BÖLÜM 12", diff: "KOLAY", completeTitle: "SHIKAKU!", score: "SKOR", time: "SÜRE", moves: "HAMLE", undo: "GERİ AL", hint: "İPUCU", reset: "SIFIRLA" },
  es: { level: "NIVEL 12", diff: "FÁCIL", completeTitle: "SHIKAKU!", score: "PUNTOS", time: "TIEMPO", moves: "MOVIMIENTOS", undo: "DESHACER", hint: "PISTA", reset: "REINICIAR" },
  pt: { level: "NÍVEL 12", diff: "FÁCIL", completeTitle: "SHIKAKU!", score: "PONTOS", time: "TEMPO", moves: "JOGADAS", undo: "DESFAZER", hint: "DICA", reset: "REINICIAR" },
  fr: { level: "NIVEAU 12", diff: "FACILE", completeTitle: "SHIKAKU !", score: "SCORE", time: "TEMPS", moves: "COUPS", undo: "ANNULER", hint: "INDICE", reset: "RECOMMENCER" },
  de: { level: "LEVEL 12", diff: "LEICHT", completeTitle: "SHIKAKU!", score: "PUNKTE", time: "ZEIT", moves: "ZÜGE", undo: "RÜCKGÄNGIG", hint: "TIPP", reset: "ZURÜCKSETZEN" },
  it: { level: "LIVELLO 12", diff: "FACILE", completeTitle: "SHIKAKU!", score: "PUNTI", time: "TEMPO", moves: "MOSSE", undo: "ANNULLA", hint: "AIUTO", reset: "RIPRISTINA" },
  nl: { level: "LEVEL 12", diff: "MAKKELIJK", completeTitle: "SHIKAKU!", score: "SCORE", time: "TIJD", moves: "ZETTEN", undo: "ONGEDAAN MAKEN", hint: "TIP", reset: "RESET" },
  pl: { level: "POZIOM 12", diff: "ŁATWY", completeTitle: "SHIKAKU!", score: "WYNIK", time: "CZAS", moves: "RUCHY", undo: "COFNIJ", hint: "PODPOWIEDŹ", reset: "RESET" },
  uk: { level: "РІВЕНЬ 12", diff: "ЛЕГКО", completeTitle: "SHIKAKU!", score: "РАХУНОК", time: "ЧАС", moves: "ХОДИ", undo: "СКАСУВАТИ", hint: "ПІДКАЗКА", reset: "СКИНУТИ" },
  ru: { level: "УРОВЕНЬ 12", diff: "ЛЕГКО", completeTitle: "SHIKAKU!", score: "СЧЁТ", time: "ВРЕМЯ", moves: "ХОДЫ", undo: "ОТМЕНИТЬ", hint: "ПОДСКАЗКА", reset: "СБРОСИТЬ" },
  sq: { level: "NIVELI 12", diff: "E LEHTË", completeTitle: "SHIKAKU!", score: "PIKË", time: "KOHA", moves: "LËVIZJE", undo: "ZHBLLO", hint: "NDIHMË", reset: "RIVENDOS" },
  mk: { level: "НИВО 12", diff: "ЛЕСНО", completeTitle: "SHIKAKU!", score: "РЕЗУЛТАТ", time: "ВРЕМЕ", moves: "ПОТЕЗИ", undo: "ВРАТИ", hint: "СОВЕТ", reset: "РЕСЕТИРАЈ" },
  ar: { level: "المستوى 12", diff: "سهل", completeTitle: "SHIKAKU!", score: "النتيجة", time: "الوقت", moves: "الحركات", undo: "تراجع", hint: "تلميح", reset: "إعادة ضبط" },
  hi: { level: "स्तर 12", diff: "आसान", completeTitle: "SHIKAKU!", score: "स्कोर", time: "समय", moves: "चालें", undo: "वापस लें", hint: "संकेत", reset: "रीसेट" },
  th: { level: "ด่าน 12", diff: "ง่าย", completeTitle: "SHIKAKU!", score: "คะแนน", time: "เวลา", moves: "ตาเดิน", undo: "เลิกทำ", hint: "คำใบ้", reset: "เริ่มใหม่" },
  vi: { level: "MÀN 12", diff: "DỄ", completeTitle: "SHIKAKU!", score: "ĐIỂM", time: "THỜI GIAN", moves: "NƯỚC ĐI", undo: "HOÀN TÁC", hint: "GỢI Ý", reset: "ĐẶT LẠI" },
  id: { level: "LEVEL 12", diff: "MUDAH", completeTitle: "SHIKAKU!", score: "SKOR", time: "WAKTU", moves: "LANGKAH", undo: "URUNGKAN", hint: "PETUNJUK", reset: "ATUR ULANG" },
  zh: { level: "第 12 关", diff: "简单", completeTitle: "SHIKAKU!", score: "得分", time: "时间", moves: "步数", undo: "撤销", hint: "提示", reset: "重置" },
  ja: { level: "レベル 12", diff: "かんたん", completeTitle: "SHIKAKU!", score: "スコア", time: "時間", moves: "手数", undo: "元に戻す", hint: "ヒント", reset: "リセット" },
  ko: { level: "레벨 12", diff: "쉬움", completeTitle: "SHIKAKU!", score: "점수", time: "시간", moves: "횟수", undo: "실행 취소", hint: "힌트", reset: "초기화" },
  "zh-Hant": { level: "第 12 關", diff: "簡單", completeTitle: "SHIKAKU!", score: "得分", time: "時間", moves: "步數", undo: "復原", hint: "提示", reset: "重設" },
  bn: { level: "স্তর ১২", diff: "সহজ", completeTitle: "SHIKAKU!", score: "স্কোর", time: "সময়", moves: "চাল", undo: "পূর্বাবস্থায়", hint: "ইঙ্গিত", reset: "রিসেট" },
  ca: { level: "NIVELL 12", diff: "FÀCIL", completeTitle: "SHIKAKU!", score: "PUNTUACIÓ", time: "TEMPS", moves: "MOVIMENTS", undo: "DESFER", hint: "PISTA", reset: "REINICIAR" },
  cs: { level: "ÚROVEŇ 12", diff: "SNADNÉ", completeTitle: "SHIKAKU!", score: "SKÓRE", time: "ČAS", moves: "TAHY", undo: "ZPĚT", hint: "NÁPOVĚDA", reset: "RESET" },
  da: { level: "BANE 12", diff: "NEM", completeTitle: "SHIKAKU!", score: "POINT", time: "TID", moves: "TRÆK", undo: "FORTRYD", hint: "HINT", reset: "NULSTIL" },
  el: { level: "ΕΠΙΠΕΔΟ 12", diff: "ΕΥΚΟΛΟ", completeTitle: "SHIKAKU!", score: "ΣΚΟΡ", time: "ΧΡΟΝΟΣ", moves: "ΚΙΝΗΣΕΙΣ", undo: "ΑΝΑΙΡΕΣΗ", hint: "ΥΠΟΔΕΙΞΗ", reset: "ΕΠΑΝΑΦΟΡΑ" },
  fi: { level: "TASO 12", diff: "HELPPO", completeTitle: "SHIKAKU!", score: "PISTEET", time: "AIKA", moves: "SIIRROT", undo: "KUMOA", hint: "VINKKI", reset: "NOLLAA" },
  gu: { level: "લેવલ 12", diff: "સરળ", completeTitle: "SHIKAKU!", score: "સ્કોર", time: "સમય", moves: "ચાલ", undo: "પાછું", hint: "સંકેત", reset: "રીસેટ" },
  he: { level: "שלב 12", diff: "קל", completeTitle: "SHIKAKU!", score: "ניקוד", time: "זמן", moves: "מהלכים", undo: "ביטול", hint: "רמז", reset: "איפוס" },
  hr: { level: "RAZINA 12", diff: "LAKO", completeTitle: "SHIKAKU!", score: "BODOVI", time: "VRIJEME", moves: "POTEZI", undo: "PONIŠTI", hint: "SAVJET", reset: "RESETIRAJ" },
  hu: { level: "12. SZINT", diff: "KÖNNYŰ", completeTitle: "SHIKAKU!", score: "PONT", time: "IDŐ", moves: "LÉPÉSEK", undo: "VISSZAVONÁS", hint: "TIPP", reset: "VISSZAÁLLÍTÁS" },
  kn: { level: "ಹಂತ 12", diff: "ಸುಲಭ", completeTitle: "SHIKAKU!", score: "ಸ್ಕೋರ್", time: "ಸಮಯ", moves: "ಚಲನೆಗಳು", undo: "ರದ್ದು", hint: "ಸುಳಿವು", reset: "ಮರುಹೊಂದಿಸಿ" },
  ml: { level: "ലെവൽ 12", diff: "എളുപ്പം", completeTitle: "SHIKAKU!", score: "സ്കോർ", time: "സമയം", moves: "നീക്കങ്ങൾ", undo: "പഴയപടി", hint: "സൂചന", reset: "റീസെറ്റ്" },
  mr: { level: "पातळी १२", diff: "सोपे", completeTitle: "SHIKAKU!", score: "गुण", time: "वेळ", moves: "चाली", undo: "पूर्ववत", hint: "सूचना", reset: "रीसेट" },
  ms: { level: "TAHAP 12", diff: "MUDAH", completeTitle: "SHIKAKU!", score: "SKOR", time: "MASA", moves: "LANGKAH", undo: "BATAL", hint: "PETUNJUK", reset: "TETAP SEMULA" },
  no: { level: "NIVÅ 12", diff: "LETT", completeTitle: "SHIKAKU!", score: "POENG", time: "TID", moves: "TREKK", undo: "ANGRE", hint: "TIPS", reset: "TILBAKESTILL" },
  or: { level: "ସ୍ତର ୧୨", diff: "ସହଜ", completeTitle: "SHIKAKU!", score: "ସ୍କୋର", time: "ସମୟ", moves: "ଚାଲ", undo: "ପଛକୁ", hint: "ସୂଚନା", reset: "ରିସେଟ" },
  pa: { level: "ਪੱਧਰ 12", diff: "ਸੌਖਾ", completeTitle: "SHIKAKU!", score: "ਸਕੋਰ", time: "ਸਮਾਂ", moves: "ਚਾਲਾਂ", undo: "ਵਾਪਸ", hint: "ਸੰਕੇਤ", reset: "ਰੀਸੈੱਟ" },
  ro: { level: "NIVELUL 12", diff: "UȘOR", completeTitle: "SHIKAKU!", score: "SCOR", time: "TIMP", moves: "MUTĂRI", undo: "ANULEAZĂ", hint: "INDICIU", reset: "RESETEAZĂ" },
  sk: { level: "ÚROVEŇ 12", diff: "ĽAHKÉ", completeTitle: "SHIKAKU!", score: "SKÓRE", time: "ČAS", moves: "ŤAHY", undo: "SPÄŤ", hint: "NÁPOVEDA", reset: "RESET" },
  sl: { level: "STOPNJA 12", diff: "LAHKO", completeTitle: "SHIKAKU!", score: "TOČKE", time: "ČAS", moves: "POTEZE", undo: "RAZVELJAVI", hint: "NAMIG", reset: "PONASTAVI" },
  sv: { level: "NIVÅ 12", diff: "LÄTT", completeTitle: "SHIKAKU!", score: "POÄNG", time: "TID", moves: "DRAG", undo: "ÅNGRA", hint: "TIPS", reset: "ÅTERSTÄLL" },
  ta: { level: "நிலை 12", diff: "எளிது", completeTitle: "SHIKAKU!", score: "மதிப்பெண்", time: "நேரம்", moves: "நகர்வுகள்", undo: "செயல்தவிர்", hint: "குறிப்பு", reset: "மீட்டமை" },
  te: { level: "స్థాయి 12", diff: "సులభం", completeTitle: "SHIKAKU!", score: "స్కోర్", time: "సమయం", moves: "ఎత్తులు", undo: "రద్దు", hint: "సూచన", reset: "రీసెట్" },
  ur: { level: "لیول 12", diff: "آسان", completeTitle: "SHIKAKU!", score: "اسکور", time: "وقت", moves: "چالیں", undo: "واپس", hint: "اشارہ", reset: "ری سیٹ" },
};