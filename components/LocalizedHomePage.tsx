import Link from "next/link";
import { SHIKAKU_ARTICLES } from "@/lib/blog-content";
import { getLocaleConfig, type SiteLocale } from "@/lib/locales";
import { APP_STORE_URL, PLAY_STORE_URL, SITE_URL } from "@/lib/site";
import { DEMO_LEVEL } from "@/lib/levels";
import LogoMark from "./LogoMark";
import ShikakuBoard from "./ShikakuBoard";

function buildHomeJsonLd(locale: SiteLocale) {
  const config = getLocaleConfig(locale);
  const article = SHIKAKU_ARTICLES[locale];
  const url = `${SITE_URL}${config?.path ?? "/"}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": ["VideoGame", "MobileApplication"],
      name: "Recto: Shikaku Patches Puzzle",
      description: article.description,
      url,
      inLanguage: config?.bcp47 ?? locale,
      applicationCategory: "GameApplication",
      applicationSubCategory: "Puzzle",
      operatingSystem: "iOS, Android",
      gamePlatform: ["iOS", "Android"],
      genre: ["Puzzle", "Logic", "Board"],
      isAccessibleForFree: true,
      installUrl: [APP_STORE_URL, PLAY_STORE_URL],
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

export default function LocalizedHomePage({ locale }: { locale: SiteLocale }) {
  const article = SHIKAKU_ARTICLES[locale];
  const config = getLocaleConfig(locale);
  const blogHref = `/blog/${locale.toLowerCase()}/what-is-shikaku`;

  return (
    <div lang={config?.bcp47 ?? locale} dir={config?.direction ?? "ltr"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildHomeJsonLd(locale)) }}
      />
      <header className="px-4 pt-3">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-panel-border bg-panel/85 px-4 py-2 shadow-[0_4px_0_var(--color-panel-bevel)] backdrop-blur-md" aria-label="Site navigation">
          <Link href={config?.path ?? "/"} className="flex items-center gap-2.5" aria-label="Recto">
            <LogoMark size={26} />
            <span className="text-xl font-extrabold tracking-tight">Recto</span>
          </Link>
          <div className="flex items-center gap-2.5">
            <Link href={blogHref} className="hidden rounded-full px-3 py-2 text-sm font-semibold text-ink-soft hover:text-ink sm:inline-flex">{article.relatedLabel}</Link>
            <a href="#download" className="btn-candy px-5 py-2.5 text-sm">{article.downloadLabel}</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
          <div>
            <p className="chip-mono text-primary-deep">{article.eyebrow}</p>
            <h1 className="mt-5 text-balance text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">{article.h1}</h1>
            <p className="mt-7 max-w-xl text-pretty text-xl leading-relaxed text-ink-soft">{article.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-candy px-5 py-3">App Store</a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-panel-border bg-panel px-5 py-3 font-bold text-ink hover:bg-white">Google Play</a>
            </div>
          </div>
          <div className="candy-panel mx-auto w-full max-w-md p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between text-sm font-bold text-ink-soft"><span>SHIKAKU</span><span>RECTO</span></div>
            <ShikakuBoard level={DEMO_LEVEL} placed={[0, 1, 2, 3, 4, 5]} />
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-12" aria-labelledby="home-guide-title">
          <h2 id="home-guide-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">{article.sections[0].title}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {article.sections.map((section) => (
              <section key={section.title} className="candy-panel p-7">
                <h3 className="text-xl font-extrabold tracking-tight">{section.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{section.body}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16" aria-labelledby="home-faq-title">
          <h2 id="home-faq-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">{article.faqTitle}</h2>
          <div className="mt-8 space-y-4">
            {article.faq.map((item) => (
              <details key={item.question} className="faq-item candy-panel px-6 py-5">
                <summary className="cursor-pointer text-lg font-bold">{item.question}</summary>
                <p className="mt-4 leading-relaxed text-ink-soft">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="download" className="mx-auto mb-24 max-w-5xl px-6">
          <div className="rounded-[2rem] bg-primary-deep px-6 py-12 text-center text-white sm:px-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{article.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">{article.ctaBody}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-5 py-3 font-bold text-ink">App Store</a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-5 py-3 font-bold text-ink">Google Play</a>
              <Link href={blogHref} className="rounded-xl border border-white/40 px-5 py-3 font-bold text-white">{article.relatedLabel}</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-panel-border bg-panel/70 px-6 py-10 text-center text-sm text-ink-soft">
        <Link href={config?.path ?? "/"} className="font-bold text-ink">Recto</Link>
      </footer>
    </div>
  );
}