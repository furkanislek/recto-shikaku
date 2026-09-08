/**
 * Central site constants. Set NEXT_PUBLIC_SITE_URL in the deployment
 * environment (e.g. Vercel) to the real production domain — every canonical
 * URL, sitemap entry and JSON-LD block derives from it.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rectoplay.com";

export const APP_NAME = "Recto";
export const APP_FULL_NAME = "Recto: Shikaku Patches Puzzle";
export const APPLE_APP_ID = "6801644267";
export const ANDROID_PACKAGE = "com.furkanislek.recto";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APPLE_APP_ID}`;
export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;
export const SUPPORT_URL = "https://furkanislek.github.io/support.html";
export const PRIVACY_URL = "https://furkanislek.github.io/privacy-policy.html";
export const AUTHOR = "Furkan Akif İşlek";

export { LOCALE_BY_CODE, LOCALE_CODES, SITE_LOCALES, getLocaleConfig } from "./locales";
export type { LocaleConfig, SiteLocale } from "./locales";
import { SITE_LOCALES, type SiteLocale } from "./locales";

export type Lang = SiteLocale;

export const LANG_PATHS: Record<Lang, string> = Object.fromEntries(
    SITE_LOCALES.map((locale) => [locale.code, locale.path]),
) as Record<Lang, string>;
