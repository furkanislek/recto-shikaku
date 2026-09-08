import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedBlogPage from "@/components/LocalizedBlogPage";
import { BLOG_POSTS, blogPath, getBlogPost } from "@/lib/blog-catalog";
import { LOCALE_CODES, getLocaleConfig, SITE_LOCALES } from "@/lib/locales";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
    return LOCALE_CODES.map((locale) => ({ locale: locale.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale: rawLocale } = await params;
    const locale = SITE_LOCALES.find((item) => item.code.toLowerCase() === rawLocale.toLowerCase());
    const post = locale ? getBlogPost(locale.code, BLOG_POSTS.find((item) => item.locale === locale.code && item.key === "what-is-shikaku")?.slug ?? "") : undefined;
    if (!locale || !post) return {};

    const languages = Object.fromEntries(
        SITE_LOCALES.map((item) => {
            const localized = BLOG_POSTS.find((candidate) => candidate.locale === item.code && candidate.key === "what-is-shikaku");
            return [item.bcp47, `${SITE_URL}${localized ? blogPath(localized) : `/blog/${item.code.toLowerCase()}/what-is-shikaku`}`];
        }),
    );
    return {
        metadataBase: new URL(SITE_URL),
        title: post.title,
        description: post.description,
        alternates: {
            canonical: blogPath(post),
            languages: { ...languages, "x-default": `${SITE_URL}/blog/en/what-is-shikaku` },
        },
        openGraph: {
            type: "article",
            title: post.title,
            description: post.description,
            url: `${SITE_URL}${blogPath(post)}`,
            locale: locale.bcp47,
        },
    };
}

export default async function WhatIsShikakuPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale: rawLocale } = await params;
    const config = getLocaleConfig(rawLocale);
    const post = config ? BLOG_POSTS.find((item) => item.locale === config.code && item.key === "what-is-shikaku") : undefined;
    if (!config || !post) notFound();
    return <LocalizedBlogPage article={post} canonicalPath={blogPath(post)} languagePath={(locale) => blogPath(BLOG_POSTS.find((item) => item.locale === locale && item.key === "what-is-shikaku") ?? post)} />;
}