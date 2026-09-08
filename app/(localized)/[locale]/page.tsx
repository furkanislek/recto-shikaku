import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { DICTS } from "@/lib/content";
import { getLocaleConfig, SITE_LOCALES } from "@/lib/locales";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return SITE_LOCALES.filter((locale) => locale.code !== "en" && locale.code !== "tr").map((locale) => ({ locale: locale.code.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const config = getLocaleConfig(rawLocale);
  const dict = config ? DICTS[config.code] : undefined;
  if (!config || !dict) return {};
  const languages = Object.fromEntries(
    SITE_LOCALES.map((locale) => [locale.bcp47, `${SITE_URL}${locale.path}`]),
  );
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: config.path,
      languages: { ...languages, "x-default": `${SITE_URL}/` },
    },
    openGraph: {
      type: "website",
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}${config.path}`,
      locale: config.bcp47,
      alternateLocale: SITE_LOCALES.filter((locale) => locale.code !== config.code).map((locale) => locale.bcp47),
    },
  };
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const config = getLocaleConfig(rawLocale);
  if (!config || config.code === "en" || config.code === "tr" || !DICTS[config.code]) notFound();
  return <LandingPage lang={config.code} />;
}