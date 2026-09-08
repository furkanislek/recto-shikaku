import type { MetadataRoute } from "next";
import { SITE_LOCALES } from "@/lib/locales";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-08");
  const homeLanguages = Object.fromEntries(
    SITE_LOCALES.map((locale) => [locale.bcp47, `${SITE_URL}${locale.path}`]),
  );
  const localizedHomes = SITE_LOCALES.filter((locale) => locale.code !== "en" && locale.code !== "tr").map((locale) => ({
    url: `${SITE_URL}${locale.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
    alternates: { languages: homeLanguages },
  }));
  const blogLanguages = Object.fromEntries(
    SITE_LOCALES.map((locale) => [locale.bcp47, `${SITE_URL}/blog/${locale.code.toLowerCase()}/what-is-shikaku`]),
  );
  const blogEntries = SITE_LOCALES.map((locale) => ({
    url: `${SITE_URL}/blog/${locale.code.toLowerCase()}/what-is-shikaku`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: { languages: blogLanguages },
  }));
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: homeLanguages },
    },
    {
      url: `${SITE_URL}/tr`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: homeLanguages },
    },
    ...localizedHomes,
    {
      url: `${SITE_URL}/shikaku-puzzle`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: `${SITE_URL}/shikaku-puzzle`, tr: `${SITE_URL}/tr/shikaku-bulmaca` } },
    },
    {
      url: `${SITE_URL}/how-to-play-shikaku`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: `${SITE_URL}/how-to-play-shikaku`, tr: `${SITE_URL}/tr/shikaku-nasil-oynanir` } },
    },
    {
      url: `${SITE_URL}/tr/shikaku-bulmaca`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: `${SITE_URL}/shikaku-puzzle`, tr: `${SITE_URL}/tr/shikaku-bulmaca` } },
    },
    {
      url: `${SITE_URL}/tr/shikaku-nasil-oynanir`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: `${SITE_URL}/how-to-play-shikaku`, tr: `${SITE_URL}/tr/shikaku-nasil-oynanir` } },
    },
    ...blogEntries,
  ];
}
