import { DICTS } from "@/lib/content";
import { buildJsonLd } from "@/lib/seo";
import { LANG_PATHS, SITE_LOCALES, type Lang } from "@/lib/site";
import DownloadCTA from "./DownloadCTA";
import DualPhones from "./DualPhones";
import FAQ from "./FAQ";
import FeatureGrid from "./FeatureGrid";
import Footer from "./Footer";
import GalleryStrip from "./GalleryStrip";
import Hero from "./Hero";
import HowToPlay from "./HowToPlay";
import Navbar from "./Navbar";
import ScrollDemo from "./ScrollDemo";

/** The full landing page, shared by the English and Turkish routes. */
export default function LandingPage({ lang }: { lang: Lang }) {
  const d = DICTS[lang];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(lang)) }}
      />
      <Navbar
        nav={d.nav}
        homeHref={LANG_PATHS[lang]}
        otherLangLabel={lang}
        otherLangHref={d.otherLangHref}
        languages={SITE_LOCALES}
      />
      <main>
        <Hero hero={d.hero} badges={d.badges} />
        <ScrollDemo demo={d.demo} />
        <DualPhones dual={d.dual} badges={d.badges} />
        <HowToPlay howTo={d.howTo} />
        <FeatureGrid features={d.features} />
        <GalleryStrip gallery={d.gallery} />
        <FAQ faq={d.faq} />
        <DownloadCTA cta={d.cta} badges={d.badges} />
      </main>
      <Footer dict={d} homeHref={LANG_PATHS[lang]} />
    </>
  );
}
