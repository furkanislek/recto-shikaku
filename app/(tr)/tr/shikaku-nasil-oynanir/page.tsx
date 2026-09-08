import type { Metadata } from "next";
import SeoGuidePage from "@/components/SeoGuidePage";
import { SEO_GUIDES } from "@/lib/seo-guides";
import { SITE_URL } from "@/lib/site";

const guide = SEO_GUIDES.howToTr;

export const metadata: Metadata = {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: guide.slug, languages: { en: guide.alternateSlug, tr: guide.slug } },
    openGraph: { title: guide.title, description: guide.description, url: `${SITE_URL}${guide.slug}` },
};

export default function ShikakuNasilOynanirPage() {
    return <SeoGuidePage guide={guide} />;
}