import Image from "next/image";
import type { Dict } from "@/lib/content";
import StoreBadges from "./StoreBadges";

const DECOR = [
  { c: "#56B267", cls: "-left-6 top-10 h-16 w-16 rotate-[8deg]" },
  { c: "#EDAE3B", cls: "left-[12%] -bottom-5 h-12 w-24 -rotate-[6deg]" },
  { c: "#5B8DEF", cls: "right-[10%] -top-6 h-14 w-14 rotate-[14deg]" },
  { c: "#E96FA0", cls: "-right-4 bottom-12 h-12 w-12 -rotate-[10deg]" },
  { c: "#3BBBA4", cls: "right-[30%] -bottom-7 h-14 w-14 rotate-[4deg]" },
];

/** Final call-to-action with the real app icon and both store badges. */
export default function DownloadCTA({ cta, badges }: { cta: Dict["cta"]; badges: Dict["badges"] }) {
  return (
    <section id="download" className="px-6 pb-28 pt-8" aria-labelledby="cta-title">
      <div className="candy-panel relative mx-auto max-w-4xl overflow-visible px-8 py-16 text-center sm:px-16">
        {DECOR.map((d) => (
          <span
            key={d.c + d.cls}
            className={`absolute rounded-2xl ${d.cls}`}
            style={{ background: d.c, boxShadow: "0 4px 0 rgba(0,0,0,0.15)" }}
            aria-hidden
          />
        ))}
        <Image
          src="/app-icon.png"
          alt="Recto app icon"
          width={104}
          height={104}
          className="mx-auto rounded-[26px] shadow-[0_10px_28px_rgba(62,110,74,0.3)]"
        />
        <h2 id="cta-title" className="mt-8 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
          {cta.h2}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">{cta.sub}</p>
        <StoreBadges badges={badges} size="lg" className="mt-10" />
        <p className="chip-mono mt-8 text-ink-soft">{cta.note}</p>
      </div>
    </section>
  );
}
