import type { Metadata, Viewport } from "next";
import { DICTS } from "./content";
import {
  ANDROID_PACKAGE,
  APPLE_APP_ID,
  APP_FULL_NAME,
  APP_STORE_URL,
  AUTHOR,
  LANG_PATHS,
  SITE_LOCALES,
  getLocaleConfig,
  PLAY_STORE_URL,
  SITE_URL,
  type Lang,
} from "./site";

const KEYWORDS: Partial<Record<Lang, string[]>> = {
  en: [
    "shikaku",
    "shikaku puzzle",
    "shikaku game",
    "shikaku app",
    "sikaku",
    "rectangle puzzle game",
    "rectangle division puzzle",
    "japanese logic puzzle",
    "logic puzzle game",
    "number puzzle game",
    "brain teaser app",
    "offline puzzle game",
    "free puzzle game",
    "puzzle games for iphone",
    "puzzle games for android",
    "nikoli puzzle",
    "recto",
  ],
  tr: [
    "shikaku",
    "shikaku bulmaca",
    "shikaku oyunu",
    "sikaku",
    "dikdörtgen bulmaca",
    "japon bulmacası",
    "mantık bulmacası",
    "mantık oyunu",
    "zeka oyunu",
    "sayı bulmacası",
    "internetsiz oyun",
    "internetsiz bulmaca",
    "ücretsiz bulmaca oyunu",
    "beyin egzersizi oyunu",
    "recto",
  ],
};

export function buildViewport(): Viewport {
  return {
    themeColor: "#FFF6E4",
    colorScheme: "light",
  };
}

export function buildMetadata(lang: Lang): Metadata {
  const d = DICTS[lang];
  const path = LANG_PATHS[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: d.meta.title, template: d.meta.titleTemplate },
    description: d.meta.description,
    applicationName: "Recto",
    authors: [{ name: AUTHOR }],
    creator: AUTHOR,
    publisher: AUTHOR,
    keywords: KEYWORDS[lang] ?? KEYWORDS.en,
    category: "games",
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(SITE_LOCALES.map((locale) => [locale.bcp47, locale.path])),
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Recto",
      locale: getLocaleConfig(lang)?.bcp47 ?? lang,
      alternateLocale: SITE_LOCALES.filter((locale) => locale.code !== lang).map((locale) => locale.bcp47),
      title: d.meta.title,
      description: d.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.title,
      description: d.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    itunes: { appId: APPLE_APP_ID },
    appLinks: {
      ios: { app_store_id: APPLE_APP_ID, url: APP_STORE_URL },
      android: { package: ANDROID_PACKAGE, url: PLAY_STORE_URL },
    },
    formatDetection: { telephone: false },
  };
}

/** Structured data: VideoGame+MobileApplication, FAQPage and WebSite. */
export function buildJsonLd(lang: Lang): object[] {
  const d = DICTS[lang];
  const url = `${SITE_URL}${LANG_PATHS[lang]}`;
  const author = { "@type": "Person", name: AUTHOR };
  return [
    {
      "@context": "https://schema.org",
      "@type": ["VideoGame", "MobileApplication"],
      name: APP_FULL_NAME,
      alternateName: ["Recto", "Shikaku Patches Puzzle", "Patches"],
      description: d.meta.description,
      url,
      image: `${SITE_URL}/app-icon.png`,
      screenshot: [
        `${SITE_URL}/screens/home.png`,
        `${SITE_URL}/screens/gameplay.png`,
        `${SITE_URL}/screens/hard-board.png`,
        `${SITE_URL}/screens/completed.png`,
        `${SITE_URL}/screens/missions.png`,
      ],
      applicationCategory: "GameApplication",
      applicationSubCategory: "Puzzle",
      operatingSystem: "iOS, Android",
      gamePlatform: ["iOS", "Android"],
      genre: ["Puzzle", "Logic", "Board"],
      playMode: "SinglePlayer",
      inLanguage: [getLocaleConfig(lang)?.bcp47 ?? lang],
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      author,
      publisher: author,
      installUrl: [APP_STORE_URL, PLAY_STORE_URL],
      sameAs: [APP_STORE_URL, PLAY_STORE_URL],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Recto",
      url: SITE_URL,
      inLanguage: lang,
      publisher: author,
    },
  ];
}
