import type { Dict } from "@/lib/content";

/** Crawlable FAQ — plain <details> accordions, mirrored by FAQPage JSON-LD. */
export default function FAQ({ faq }: { faq: Dict["faq"] }) {
  return (
    <section id="faq" className="px-6 py-24" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-title" className="text-balance text-center text-4xl font-extrabold tracking-tight sm:text-5xl">
          {faq.h2}
        </h2>
        <div className="mt-12 space-y-4">
          {faq.items.map((item) => (
            <details key={item.q} className="faq-item candy-panel px-7 py-5">
              <summary className="flex items-center justify-between gap-4 text-lg font-bold tracking-tight">
                {item.q}
                <span
                  className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white"
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M7 1v12M1 7h12" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
