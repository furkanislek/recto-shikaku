import type { Lang } from "./site";

export type FaqItem = { q: string; a: string };

export type Dict = {
  langName: string;
  otherLangLabel: string;
  otherLangHref: string;
  nav: {
    howTo: string;
    features: string;
    faq: string;
    download: string;
    mainLabel: string;
    homeLabel: string;
  };
  hero: {
    eyebrow: string;
    h1Pre: string;
    h1Highlight: string;
    h1Post: string;
    sub: string;
    chips: string[];
    scrollCue: string;
  };
  demo: {
    aria: string;
    captions: { title: string; body: string }[];
    level: string;
    diff: string;
    completeTitle: string;
  };
  dual: {
    h2: string;
    sub: string;
    iosCaption: string;
    androidCaption: string;
    iosAlt: string;
    androidAlt: string;
  };
  howTo: { h2: string; sub: string; steps: { title: string; body: string }[] };
  features: { h2: string; sub: string; items: { title: string; body: string }[] };
  gallery: { h2: string; sub: string; captions: string[]; alts: string[] };
  faq: { h2: string; items: FaqItem[] };
  cta: { h2: string; sub: string; note: string };
  footer: { privacy: string; support: string; rights: string; trademark: string; navLabel: string };
  badges: { appStoreTop: string; appStoreBottom: string; playTop: string; playBottom: string };
  meta: { title: string; titleTemplate: string; description: string; ogAlt: string };
};

const en: Dict = {
  langName: "English",
  otherLangLabel: "Türkçe",
  otherLangHref: "/tr",
  nav: {
    howTo: "How to play",
    features: "Features",
    faq: "FAQ",
    download: "Download",
    mainLabel: "Main",
    homeLabel: "Recto home page",
  },
  hero: {
    eyebrow: "Shikaku · Patches · Puzzle",
    h1Pre: "Think in ",
    h1Highlight: "rectangles",
    h1Post: ".",
    sub: "Recto is a calm, candy-bright take on Shikaku, the classic Japanese logic puzzle. Draw rectangles so every number owns exactly that much space, and watch the board bloom into a sweet mosaic.",
    chips: ["1,100+ levels", "5 difficulty tracks", "Offline", "Free"],
    scrollCue: "Scroll to play",
  },
  demo: {
    aria: "Interactive gameplay demo",
    captions: [
      {
        title: "One number, one patch.",
        body: "Every clue must live inside exactly one rectangle, and the rectangle's area must equal that number.",
      },
      {
        title: "Draw the last patch.",
        body: "Keep scrolling. That 9 needs a 3×3 home.",
      },
      {
        title: "Shikaku!",
        body: "Board filled, puzzle solved, confetti earned. On to the next one.",
      },
    ],
    level: "LEVEL 12",
    diff: "EASY",
    completeTitle: "SHIKAKU!",
  },
  dual: {
    h2: "One puzzle. Both pockets.",
    sub: "Recto feels native on iPhone and Android alike, with cloud save on each platform: Game Center on iOS, Play Games on Android. Start on the sofa, finish in the queue.",
    iosCaption: "iPhone",
    androidCaption: "Android",
    iosAlt: "Recto Shikaku puzzle on iPhone: a colorful 9×9 hard-level board almost fully covered with candy-colored rectangles",
    androidAlt: "Recto Shikaku puzzle on Android: a baby-track level mid-solve with a blue and a green rectangle placed on the grid",
  },
  howTo: {
    h2: "How to play Shikaku",
    sub: "Three rules. Endless depth.",
    steps: [
      {
        title: "Read the numbers",
        body: "Each number tells you the exact area of the rectangle that will contain it. A 6 needs six cells, no more, no less.",
      },
      {
        title: "Draw rectangles",
        body: "Drag to draw a patch. Every patch must hold exactly one number and cover exactly that many cells.",
      },
      {
        title: "Fill the board",
        body: "When every cell belongs to a patch, the puzzle is solved and the celebration begins.",
      },
    ],
  },
  features: {
    h2: "Why you'll love Recto",
    sub: "A puzzle you can sink into, built with the care of a handmade thing.",
    items: [
      {
        title: "1,100+ handcrafted levels",
        body: "From cozy 4×4 grids to monster 18×18 boards, with a long, gentle ramp from first tap to true mastery.",
      },
      {
        title: "Five difficulty tracks",
        body: "Baby, Easy, Medium, Hard and Expert. Each has its own candy color and its own pace.",
      },
      {
        title: "Smart hints",
        body: "Stuck? A hint reveals the most logical next patch. A nudge, never a spoiler.",
      },
      {
        title: "Fully offline",
        body: "No Wi-Fi, no problem. Recto works on planes, trains, and in the deepest basement.",
      },
      {
        title: "Cloud save",
        body: "Progress syncs through Game Center on iOS and Play Games on Android. Your streak survives a new phone.",
      },
      {
        title: "46 languages",
        body: "Recto speaks your language, from English and Turkish to Japanese and Korean.",
      },
    ],
  },
  gallery: {
    h2: "More than a board",
    sub: "Difficulty tracks, daily missions, streaks and rewards keep the rectangles coming.",
    captions: ["Pick your track", "Celebrate every win", "Missions & rewards"],
    alts: [
      "Recto home screen with five difficulty tracks from Baby to Expert and a green Play button",
      "Recto level-complete screen celebrating a solved Shikaku puzzle",
      "Recto missions screen with daily missions, streaks and token rewards",
    ],
  },
  faq: {
    h2: "Frequently asked questions",
    items: [
      {
        q: "What is Shikaku?",
        a: "Shikaku (also written Sikaku, and known as “rectangle division”) is a Japanese logic puzzle popularized by Nikoli. You divide a grid into rectangles so that each rectangle contains exactly one number, and its area equals that number. Cover the whole grid and the puzzle is solved.",
      },
      {
        q: "How do you play Recto?",
        a: "Drag on the board to draw a rectangle. A patch is valid when it holds exactly one clue and covers exactly that many cells. Undo any move, use a hint when you're stuck, and fill the whole board to win.",
      },
      {
        q: "Is Recto free?",
        a: "Yes. Recto is free to download and play on both iOS and Android.",
      },
      {
        q: "Does Recto work offline?",
        a: "Completely. Every level is stored on your device, so you can play without any internet connection.",
      },
      {
        q: "How many levels are there?",
        a: "Over 1,100 levels across five difficulty tracks: Baby, Easy, Medium, Hard and Expert. Boards range from gentle 4×4 grids up to giant 18×18.",
      },
      {
        q: "Does my progress sync between devices?",
        a: "Yes. Recto saves your progress to the cloud using Game Center on iOS and Google Play Games on Android, so a new phone picks up right where you left off.",
      },
      {
        q: "Is Shikaku good brain training?",
        a: "Shikaku exercises logical deduction, arithmetic and spatial reasoning. If you enjoy Sudoku, Nonogram or Kakuro, Recto is a calm, satisfying next puzzle to master.",
      },
    ],
  },
  cta: {
    h2: "Ready to think in rectangles?",
    sub: "Download Recto free and solve your first Shikaku in under a minute.",
    note: "Free · Offline · No account needed",
  },
  footer: {
    privacy: "Privacy Policy",
    support: "Support",
    navLabel: "Footer",
    rights: "All rights reserved.",
    trademark:
      "Apple, the Apple logo and App Store are trademarks of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.",
  },
  badges: {
    appStoreTop: "Download on the",
    appStoreBottom: "App Store",
    playTop: "GET IT ON",
    playBottom: "Google Play",
  },
  meta: {
    title: "Recto | Shikaku Patches Puzzle for iOS & Android",
    titleTemplate: "%s · Recto",
    description:
      "Recto is a calm, candy-bright Shikaku puzzle game. Draw rectangles, match the numbers, fill the board. 1,100+ handcrafted levels, free on iOS & Android.",
    ogAlt: "Recto, a candy-colored Shikaku puzzle game. Think in rectangles.",
  },
};

const tr: Dict = {
  langName: "Türkçe",
  otherLangLabel: "English",
  otherLangHref: "/",
  nav: {
    howTo: "Nasıl oynanır",
    features: "Özellikler",
    faq: "SSS",
    download: "İndir",
    mainLabel: "Ana gezinme",
    homeLabel: "Recto ana sayfa",
  },
  hero: {
    eyebrow: "Shikaku · Patches · Bulmaca",
    h1Pre: "",
    h1Highlight: "Dikdörtgenlerle",
    h1Post: " düşün.",
    sub: "Recto, klasik Japon bulmacası Shikaku'nun rengarenk ve kafa dinlendiren hali. Sayıları oku, dikdörtgenleri çiz, tahtayı doldur. Bölümün sonunda karşına şeker gibi bir mozaik çıksın.",
    chips: ["1100+ bölüm", "5 zorluk seviyesi", "İnternetsiz", "Ücretsiz"],
    scrollCue: "Kaydır ve oyna",
  },
  demo: {
    aria: "Etkileşimli oynanış demosu",
    captions: [
      {
        title: "Bir sayı, bir dikdörtgen.",
        body: "Kural basit: her dikdörtgenin içinde tek bir sayı kalacak, alanı da tam o sayı kadar olacak.",
      },
      {
        title: "Sıra son parçada.",
        body: "Kaydırmaya devam et, 9'a 3×3'lük bir yer lazım.",
      },
      {
        title: "Shikaku!",
        body: "Tahta doldu, bölüm tamam. Konfetiyi kap, sıradaki bölüm seni bekliyor.",
      },
    ],
    level: "BÖLÜM 12",
    diff: "KOLAY",
    completeTitle: "SHIKAKU!",
  },
  dual: {
    h2: "iPhone'da da var, Android'de de.",
    sub: "Recto iki platformda da aynı akıcılıkta çalışır. İlerlemen iOS'ta Game Center'a, Android'de Play Games'e kaydedilir; evde başladığın bölümü otobüste bitirebilirsin.",
    iosCaption: "iPhone",
    androidCaption: "Android",
    iosAlt: "iPhone'da Recto Shikaku bulmacası: rengarenk dikdörtgenlerle neredeyse tamamen dolmuş 9×9 zor seviye tahtası",
    androidAlt: "Android'de Recto Shikaku bulmacası: mavi ve yeşil dikdörtgenlerin yerleştirildiği bebek seviyesinden bir bölüm",
  },
  howTo: {
    h2: "Shikaku nasıl oynanır",
    sub: "Kurallar üç tane, gerisi pratik.",
    steps: [
      {
        title: "Sayıları oku",
        body: "Her sayı, kendi dikdörtgeninin kaç hücrelik olacağını söyler. 6 gördüysen tam altı hücre gerekiyor, ne eksik ne fazla.",
      },
      {
        title: "Dikdörtgeni çiz",
        body: "Parmağını sürükleyip dikdörtgeni çiz. İçinde tek bir sayı kalmalı, alanı da tam o sayı kadar olmalı.",
      },
      {
        title: "Tahtayı doldur",
        body: "Boş hücre kalmadığında bölüm biter, konfeti ve puanlar gelir.",
      },
    ],
  },
  features: {
    h2: "Recto'yu neden seveceksin",
    sub: "Basit görünür ama bırakması zordur.",
    items: [
      {
        title: "1100+ özenli bölüm",
        body: "4×4'le ısınırsın, 18×18'lik dev tahtalara kadar tırmanırsın. Zorluk hiç hissettirmeden artar.",
      },
      {
        title: "Beş zorluk seviyesi",
        body: "Bebek, Kolay, Orta, Zor ve Uzman. Her seviyenin kendi rengi, kendi temposu var.",
      },
      {
        title: "Akıllı ipuçları",
        body: "Takıldığında ipucu tuşu en mantıklı hamleyi gösterir. Çözümü söylemez, yolunu açar.",
      },
      {
        title: "İnternetsiz oynanır",
        body: "Uçakta, metroda, çekmeyen köy evinde... Recto internet istemez.",
      },
      {
        title: "Bulut kaydı",
        body: "İlerlemen Game Center (iOS) ve Play Games (Android) ile buluta yedeklenir. Telefonun değişir, serin bozulmaz.",
      },
      {
        title: "46 dil",
        body: "Türkçe dahil tam 46 dil. Menüler de bulmacalar da senin dilinde.",
      },
    ],
  },
  gallery: {
    h2: "Dahası da var",
    sub: "Günlük görevler, seriler, jetonlar, rozetler... Recto'da motivasyon hiç düşmez.",
    captions: ["Seviyeni seç", "Kazanmanın tadını çıkar", "Görevler ve ödüller"],
    alts: [
      "Bebek'ten Uzman'a beş zorluk seviyesi ve yeşil Oyna butonuyla Recto ana ekranı",
      "Çözülen Shikaku bulmacasını kutlayan Recto bölüm sonu ekranı",
      "Günlük görevler, seriler ve jeton ödülleriyle Recto görevler ekranı",
    ],
  },
  faq: {
    h2: "Sık sorulan sorular",
    items: [
      {
        q: "Shikaku nedir?",
        a: "Shikaku (Sikaku ya da “dikdörtgen bölme” adıyla da bilinir), Japon bulmaca yayıncısı Nikoli'nin meşhur ettiği bir mantık bulmacası. Amaç, ızgarayı dikdörtgenlere bölmek: her dikdörtgenin içinde tek bir sayı kalacak, dikdörtgenin alanı da o sayıya eşit olacak. Izgara tamamen dolduğunda bulmaca çözülmüş demektir.",
      },
      {
        q: "Recto nasıl oynanır?",
        a: "Parmağını tahtada sürükleyerek dikdörtgen çizersin. Çizdiğin dikdörtgende tek bir sayı varsa ve alanı o sayı kadarsa parça yerine oturur. Takılırsan ipucu alır, beğenmediğin hamleyi geri alırsın; tahta dolunca bölüm biter.",
      },
      {
        q: "Recto ücretsiz mi?",
        a: "Evet. Recto'yu App Store'dan da Google Play'den de ücretsiz indirip oynayabilirsin.",
      },
      {
        q: "Recto internetsiz çalışır mı?",
        a: "Evet, tamamen. Bölümler telefonuna kayıtlı olduğu için uçak modunda bile oynayabilirsin.",
      },
      {
        q: "Kaç bölüm var?",
        a: "Beş zorluk seviyesinde 1100'den fazla bölüm var: Bebek, Kolay, Orta, Zor ve Uzman. 4×4'lük mini tahtalarla başlar, 18×18'lik dev bulmacalara kadar gider.",
      },
      {
        q: "İlerlemem kaybolur mu?",
        a: "Hayır. İlerlemen iOS'ta Game Center'a, Android'de Google Play Games'e kaydedilir; telefon değiştirdiğinde kaldığın yerden devam edersin.",
      },
      {
        q: "Shikaku zekâyı geliştirir mi?",
        a: "Shikaku; mantık yürütme, çarpma-bölme pratiği ve alan hesabını aynı anda çalıştırır. Sudoku, Nonogram ya da Kakuro seviyorsan Recto'ya ısınman uzun sürmez.",
      },
    ],
  },
  cta: {
    h2: "Dikdörtgenlerle düşünmeye hazır mısın?",
    sub: "Recto'yu ücretsiz indir; ilk bulmacanı bir dakika içinde çözmüş ol.",
    note: "Ücretsiz · İnternetsiz · Üyelik yok",
  },
  footer: {
    privacy: "Gizlilik Politikası",
    support: "Destek",
    navLabel: "Alt bilgi",
    rights: "Tüm hakları saklıdır.",
    trademark:
      "Apple, Apple logosu ve App Store, Apple Inc. şirketinin ticari markalarıdır. Google Play ve Google Play logosu, Google LLC şirketinin ticari markalarıdır.",
  },
  badges: {
    appStoreTop: "App Store'dan",
    appStoreBottom: "İndirin",
    playTop: "İNDİRİN",
    playBottom: "Google Play",
  },
  meta: {
    title: "Recto | Shikaku Bulmaca Oyunu (iOS ve Android)",
    titleTemplate: "%s · Recto",
    description:
      "Klasik Japon bulmacası Shikaku şimdi cebinde: dikdörtgen çiz, sayıları eşleştir, tahtayı doldur. iOS ve Android'de 1100+ bölüm, internetsiz ve ücretsiz.",
    ogAlt: "Recto: rengarenk Shikaku bulmaca oyunu. Dikdörtgenlerle düşün.",
  },
};

export const DICTS: Record<Lang, Dict> = { en, tr };
