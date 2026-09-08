import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedBlogPage from "@/components/LocalizedBlogPage";
import { blogPath, BLOG_POSTS, getBlogPost } from "@/lib/blog-catalog";
import { SITE_LOCALES, getLocaleConfig, type SiteLocale } from "@/lib/locales";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ locale: post.locale.toLowerCase(), slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
    const { locale: rawLocale, slug } = await params;
    const config = getLocaleConfig(rawLocale);
    const post = config ? getBlogPost(config.code, slug) : undefined;
    if (!config || !post) return {};
    const languages = Object.fromEntries(
        SITE_LOCALES.map((locale) => {
            const localizedPost = getBlogPost(locale.code, post.key === "what-is-shikaku" ? BLOG_POSTS.find((item) => item.locale === locale.code && item.key === "what-is-shikaku")?.slug ?? slug : BLOG_POSTS.find((item) => item.locale === locale.code && item.key === post.key)?.slug ?? slug);
            return [locale.bcp47, `${SITE_URL}/blog/${locale.code.toLowerCase()}/${localizedPost}`];
        }),
    );
    const path = blogPath(post);
    const defaultPost = BLOG_POSTS.find((item) => item.locale === "en" && item.key === post.key);
    return {
        metadataBase: new URL(SITE_URL),
        title: post.title,
        description: post.description,
        alternates: { canonical: path, languages: { ...languages, "x-default": `${SITE_URL}${defaultPost ? blogPath(defaultPost) : path}` } },
        openGraph: { type: "article", title: post.title, description: post.description, url: `${SITE_URL}${path}`, locale: config.bcp47 },
    };
}

export default async function LocalizedBlogPost({ params }: { params: Promise<{ locale: string; slug: string }> }) {
    const { locale: rawLocale, slug } = await params;
    const config = getLocaleConfig(rawLocale);
    const post = config ? getBlogPost(config.code as SiteLocale, slug) : undefined;
    if (!config || !post) notFound();
    const path = blogPath(post);
    return <LocalizedBlogPage article={post} canonicalPath={path} languagePath={(locale) => blogPath(BLOG_POSTS.find((item) => item.locale === locale && item.key === post.key) ?? post)} />;
}