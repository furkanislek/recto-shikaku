import Link from "next/link";
import { DICTS } from "@/lib/content";
import type { BlogArticle } from "@/lib/blog-content";
import type { SiteLocale } from "@/lib/locales";
import { getLocaleConfig, SITE_LOCALES } from "@/lib/locales";
import { AUTHOR, SITE_URL } from "@/lib/site";
import LogoMark from "./LogoMark";
import StoreBadges from "./StoreBadges";

function buildJsonLd(article: BlogArticle, articlePath: string) {
    const config = getLocaleConfig(article.locale);
    const url = `${SITE_URL}${articlePath}`;
    return [
        {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            url,
            inLanguage: config?.bcp47 ?? article.locale,
            datePublished: "2026-09-08",
            dateModified: "2026-09-08",
            author: { "@type": "Person", name: AUTHOR },
            publisher: { "@type": "Organization", name: "Recto", url: SITE_URL },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Recto", item: `${SITE_URL}${config?.path ?? "/"}` },
                { "@type": "ListItem", position: 2, name: article.h1, item: url },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: article.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
        },
    ];
}

export default function LocalizedBlogPage({
    article,
    pathPrefix = "/blog",
    canonicalPath,
    languagePath,
}: {
    article: BlogArticle;
    pathPrefix?: string;
    canonicalPath?: string;
    languagePath?: (locale: SiteLocale) => string;
}) {
    const config = getLocaleConfig(article.locale);
    const dict = DICTS[article.locale];
    const localePath = config?.path ?? "/";
    const languageOptions = SITE_LOCALES.filter((item) => item.code !== article.locale);
    const articlePath = canonicalPath ?? `${pathPrefix}/${article.locale.toLowerCase()}/what-is-shikaku`;

    return (
        <div lang={config?.bcp47 ?? article.locale} dir={config?.direction ?? "ltr"}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(article, articlePath)) }}
            />
            <header className="px-4 pt-3">
                <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-panel-border bg-panel/85 px-4 py-2 shadow-[0_4px_0_var(--color-panel-bevel)] backdrop-blur-md" aria-label="Site navigation">
                    <Link href={localePath} className="flex items-center gap-2.5" aria-label={article.homeLabel}>
                        <LogoMark size={26} />
                        <span className="text-xl font-extrabold tracking-tight">Recto</span>
                    </Link>
                    <details className="relative">
                        <summary className="chip-mono cursor-pointer list-none rounded-full px-3 py-2 text-ink-soft hover:text-ink">{config?.nativeName}</summary>
                        <div className="absolute end-0 top-11 z-10 grid max-h-72 w-56 grid-cols-2 gap-1 overflow-auto rounded-2xl border border-panel-border bg-panel p-2 shadow-card">
                            {languageOptions.map((item) => (
                                <Link key={item.code} href={languagePath?.(item.code) ?? `/blog/${item.code.toLowerCase()}/what-is-shikaku`} className="rounded-lg px-2 py-2 text-sm hover:bg-cream">
                                    {item.nativeName}
                                </Link>
                            ))}
                        </div>
                    </details>
                </nav>
            </header>

            <main>
                <article className="mx-auto max-w-4xl px-6 pb-24 pt-20">
                    <p className="chip-mono text-primary-deep">{article.eyebrow}</p>
                    <h1 className="mt-5 max-w-3xl text-balance text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">{article.h1}</h1>
                    <p className="mt-7 max-w-2xl text-pretty text-xl leading-relaxed text-ink-soft">{article.intro}</p>

                    <div className="mt-14 space-y-10">
                        {article.sections.map((section) => (
                            <section key={section.title} className="candy-panel p-7 sm:p-9">
                                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{section.title}</h2>
                                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">{section.body}</p>
                            </section>
                        ))}
                    </div>

                    <section className="mt-20" aria-labelledby="blog-faq-title">
                        <h2 id="blog-faq-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">{article.faqTitle}</h2>
                        <div className="mt-8 space-y-4">
                            {article.faq.map((item) => (
                                <details key={item.question} className="faq-item candy-panel px-6 py-5">
                                    <summary className="cursor-pointer text-lg font-bold">{item.question}</summary>
                                    <p className="mt-4 leading-relaxed text-ink-soft">{item.answer}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <section id="download" className="mt-20 rounded-[2rem] bg-primary-deep px-6 py-12 text-center text-white sm:px-12">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{article.ctaTitle}</h2>
                        <p className="mx-auto mt-4 max-w-xl text-white/80">{article.ctaBody}</p>
                        <StoreBadges badges={dict.badges} size="lg" className="mt-8" />
                    </section>
                </article>
            </main>

            <footer className="border-t border-panel-border bg-panel/70 px-6 py-10 text-center text-sm text-ink-soft">
                <Link href={localePath} className="font-bold text-ink">Recto</Link>
                <span className="mx-2" aria-hidden>·</span>
                <span>{article.relatedLabel}</span>
            </footer>
        </div>
    );
}