export type SiteLocale =
    | "tr"
    | "en"
    | "es"
    | "pt"
    | "fr"
    | "de"
    | "it"
    | "nl"
    | "pl"
    | "uk"
    | "ru"
    | "sq"
    | "mk"
    | "ar"
    | "hi"
    | "th"
    | "vi"
    | "id"
    | "zh"
    | "ja"
    | "ko"
    | "zh-Hant"
    | "bn"
    | "ca"
    | "cs"
    | "da"
    | "el"
    | "fi"
    | "gu"
    | "he"
    | "hr"
    | "hu"
    | "kn"
    | "ml"
    | "mr"
    | "ms"
    | "no"
    | "or"
    | "pa"
    | "ro"
    | "sk"
    | "sl"
    | "sv"
    | "ta"
    | "te"
    | "ur";

export type LocaleConfig = {
    code: SiteLocale;
    bcp47: string;
    path: string;
    name: string;
    nativeName: string;
    direction: "ltr" | "rtl";
};

const locale = (
    code: SiteLocale,
    name: string,
    nativeName: string,
    options?: Partial<Pick<LocaleConfig, "bcp47" | "direction">>,
): LocaleConfig => ({
    code,
    bcp47: options?.bcp47 ?? code,
    path: code === "en" ? "/" : `/${code.toLowerCase()}`,
    name,
    nativeName,
    direction: options?.direction ?? "ltr",
});

export const SITE_LOCALES: readonly LocaleConfig[] = [
    locale("tr", "Turkish", "Türkçe"),
    locale("en", "English", "English", { bcp47: "en-US" }),
    locale("es", "Spanish", "Español", { bcp47: "es-ES" }),
    locale("pt", "Portuguese", "Português", { bcp47: "pt-BR" }),
    locale("fr", "French", "Français", { bcp47: "fr-FR" }),
    locale("de", "German", "Deutsch", { bcp47: "de-DE" }),
    locale("it", "Italian", "Italiano", { bcp47: "it-IT" }),
    locale("nl", "Dutch", "Nederlands", { bcp47: "nl-NL" }),
    locale("pl", "Polish", "Polski", { bcp47: "pl-PL" }),
    locale("uk", "Ukrainian", "Українська", { bcp47: "uk-UA" }),
    locale("ru", "Russian", "Русский", { bcp47: "ru-RU" }),
    locale("sq", "Albanian", "Shqip", { bcp47: "sq-AL" }),
    locale("mk", "Macedonian", "Македонски", { bcp47: "mk-MK" }),
    locale("ar", "Arabic", "العربية", { bcp47: "ar", direction: "rtl" }),
    locale("hi", "Hindi", "हिन्दी", { bcp47: "hi-IN" }),
    locale("th", "Thai", "ไทย", { bcp47: "th-TH" }),
    locale("vi", "Vietnamese", "Tiếng Việt", { bcp47: "vi-VN" }),
    locale("id", "Indonesian", "Bahasa Indonesia", { bcp47: "id-ID" }),
    locale("zh", "Simplified Chinese", "简体中文", { bcp47: "zh-CN" }),
    locale("ja", "Japanese", "日本語", { bcp47: "ja-JP" }),
    locale("ko", "Korean", "한국어", { bcp47: "ko-KR" }),
    locale("zh-Hant", "Traditional Chinese", "繁體中文", { bcp47: "zh-Hant" }),
    locale("bn", "Bengali", "বাংলা", { bcp47: "bn-BD" }),
    locale("ca", "Catalan", "Català", { bcp47: "ca-ES" }),
    locale("cs", "Czech", "Čeština", { bcp47: "cs-CZ" }),
    locale("da", "Danish", "Dansk", { bcp47: "da-DK" }),
    locale("el", "Greek", "Ελληνικά", { bcp47: "el-GR" }),
    locale("fi", "Finnish", "Suomi", { bcp47: "fi-FI" }),
    locale("gu", "Gujarati", "ગુજરાતી", { bcp47: "gu-IN" }),
    locale("he", "Hebrew", "עברית", { bcp47: "he-IL", direction: "rtl" }),
    locale("hr", "Croatian", "Hrvatski", { bcp47: "hr-HR" }),
    locale("hu", "Hungarian", "Magyar", { bcp47: "hu-HU" }),
    locale("kn", "Kannada", "ಕನ್ನಡ", { bcp47: "kn-IN" }),
    locale("ml", "Malayalam", "മലയാളം", { bcp47: "ml-IN" }),
    locale("mr", "Marathi", "मराठी", { bcp47: "mr-IN" }),
    locale("ms", "Malay", "Bahasa Melayu", { bcp47: "ms-MY" }),
    locale("no", "Norwegian", "Norsk", { bcp47: "no-NO" }),
    locale("or", "Odia", "ଓଡ଼ିଆ", { bcp47: "or-IN" }),
    locale("pa", "Punjabi", "ਪੰਜਾਬੀ", { bcp47: "pa-IN" }),
    locale("ro", "Romanian", "Română", { bcp47: "ro-RO" }),
    locale("sk", "Slovak", "Slovenčina", { bcp47: "sk-SK" }),
    locale("sl", "Slovenian", "Slovenščina", { bcp47: "sl-SI" }),
    locale("sv", "Swedish", "Svenska", { bcp47: "sv-SE" }),
    locale("ta", "Tamil", "தமிழ்", { bcp47: "ta-IN" }),
    locale("te", "Telugu", "తెలుగు", { bcp47: "te-IN" }),
    locale("ur", "Urdu", "اردو", { bcp47: "ur-PK", direction: "rtl" }),
];

export const LOCALE_BY_CODE = Object.fromEntries(
    SITE_LOCALES.map((item) => [item.code, item]),
) as Record<SiteLocale, LocaleConfig>;

export const LOCALE_CODES = SITE_LOCALES.map((item) => item.code);

export function getLocaleConfig(code: string): LocaleConfig | undefined {
    return SITE_LOCALES.find((item) => item.code.toLowerCase() === code.toLowerCase());
}