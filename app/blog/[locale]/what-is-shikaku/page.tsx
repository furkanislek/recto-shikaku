import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedBlogPage from "@/components/LocalizedBlogPage";
import { SHIKAKU_ARTICLES } from "@/lib/blog-content";
import { LOCALE_CODES, getLocaleConfig, SITE_LOCALES, type SiteLocale } from "@/lib/locales";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
    return LOCALE_CODES.map((locale) => ({ locale: locale.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale: rawLocale } = await params;
    const locale = SITE_LOCALES.find((item) => item.code.toLowerCase() === rawLocale.toLowerCase());
    const article = locale ? SHIKAKU_ARTICLES[locale.code] : undefined;
    if (!locale || !article) return {};

    const languages = Object.fromEntries(
        SITE_LOCALES.map((item) => [item.bcp47, `${SITE_URL}/blog/${item.code.toLowerCase()}/what-is-shikaku`]),
    );
    return {
        title: article.title,
        description: article.description,
        alternates: {
            canonical: `/blog/${locale.code.toLowerCase()}/what-is-shikaku`,
            languages: { ...languages, "x-default": `${SITE_URL}/blog/en/what-is-shikaku` },
        },
        openGraph: {
            type: "article",
            title: article.title,
            description: article.description,
            url: `${SITE_URL}/blog/${locale.code.toLowerCase()}/what-is-shikaku`,
            locale: locale.bcp47,
        },
    };
}

export default async function WhatIsShikakuPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale: rawLocale } = await params;
    const config = getLocaleConfig(rawLocale);
    const article = config ? SHIKAKU_ARTICLES[config.code as SiteLocale] : undefined;
    if (!config || !article) notFound();
    return <LocalizedBlogPage article={article} />;
}