import Link from "next/link";
import { DICTS } from "@/lib/content";
import type { SeoGuide } from "@/lib/seo-guides";
import { APP_STORE_URL, PLAY_STORE_URL, SITE_URL } from "@/lib/site";
import Footer from "./Footer";
import LogoMark from "./LogoMark";
import StoreBadges from "./StoreBadges";

function buildGuideJsonLd(guide: SeoGuide) {
    const url = `${SITE_URL}${guide.slug}`;
    return [
        {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.description,
            url,
            inLanguage: guide.lang,
            author: { "@type": "Person", name: "Furkan Akif İşlek" },
            publisher: { "@type": "Organization", name: "Recto" },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: guide.faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
        },
    ];
}

export default function SeoGuidePage({ guide }: { guide: SeoGuide }) {
    const dict = DICTS[guide.lang];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(buildGuideJsonLd(guide)) }}
            />
            <header className="px-4 pt-3">
                <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-panel-border bg-panel/85 px-4 py-2 shadow-[0_4px_0_var(--color-panel-bevel)] backdrop-blur-md" aria-label={dict.nav.mainLabel}>
                    <Link href={guide.lang === "en" ? "/" : "/tr"} className="flex items-center gap-2.5" aria-label={guide.homeLabel}>
                        <LogoMark size={26} />
                        <span className="text-xl font-extrabold tracking-tight">Recto</span>
                    </Link>
                    <div className="flex items-center gap-2.5">
                        <Link href={guide.alternateSlug} className="chip-mono rounded-full px-3 py-2 text-ink-soft hover:text-ink">
                            {guide.languageLabel}
                        </Link>
                        <a href="#download" className="btn-candy px-5 py-2.5 text-sm">
                            {guide.downloadLabel}
                        </a>
                    </div>
                </nav>
            </header>

            <main>
                <article className="mx-auto max-w-4xl px-6 pb-24 pt-20">
                    <p className="chip-mono text-primary-deep">{guide.eyebrow}</p>
                    <h1 className="mt-5 max-w-3xl text-balance text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">
                        {guide.h1}
                    </h1>
                    <p className="mt-7 max-w-2xl text-pretty text-xl leading-relaxed text-ink-soft">{guide.intro}</p>

                    <div className="mt-14 space-y-10">
                        {guide.sections.map((section) => (
                            <section key={section.title} className="candy-panel p-7 sm:p-9">
                                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{section.title}</h2>
                                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">{section.body}</p>
                            </section>
                        ))}
                    </div>

                    <section id="faq" className="mt-20" aria-labelledby="guide-faq-title">
                        <h2 id="guide-faq-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            {guide.lang === "en" ? "Frequently asked questions" : "Sıkça sorulan sorular"}
                        </h2>
                        <div className="mt-8 space-y-4">
                            {guide.faq.map((item) => (
                                <details key={item.q} className="faq-item candy-panel px-6 py-5">
                                    <summary className="cursor-pointer text-lg font-bold">{item.q}</summary>
                                    <p className="mt-4 leading-relaxed text-ink-soft">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <section className="mt-20 border-t border-panel-border pt-10" aria-labelledby="related-title">
                        <h2 id="related-title" className="text-2xl font-extrabold tracking-tight">{guide.relatedLabel}</h2>
                        <div className="mt-5 flex flex-wrap gap-3">
                            {guide.related.map((item) => (
                                <Link key={item.href} href={item.href} className="rounded-full border border-panel-border bg-panel px-4 py-2 font-semibold text-primary-deep hover:bg-white">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section id="download" className="mt-20 rounded-[2rem] bg-primary-deep px-6 py-12 text-center text-white sm:px-12">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            {guide.lang === "en" ? "Ready to solve a Shikaku?" : "Bir Shikaku çözmeye hazır mısın?"}
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-white/80">
                            {guide.lang === "en" ? "Download Recto and start with a calm, handcrafted puzzle." : "Recto'yu indir ve el yapımı, sakin bir bulmacayla başla."}
                        </p>
                        <StoreBadges badges={dict.badges} size="lg" className="mt-8" />
                        <div className="sr-only">
                            <a href={APP_STORE_URL}>App Store</a>
                            <a href={PLAY_STORE_URL}>Google Play</a>
                        </div>
                    </section>
                </article>
            </main>
            <Footer dict={dict} homeHref={guide.lang === "en" ? "/" : "/tr"} />
        </>
    );
}