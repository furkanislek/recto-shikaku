import type { ReactNode } from "react";
import type { Dict } from "@/lib/content";

const TONES = ["#43A860", "#3BBBA4", "#EDAE3B", "#E87A55", "#5B8DEF", "#B168C8"];

const ICONS: ReactNode[] = [
  // grid of levels
  <svg key="grid" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="2" width="8" height="8" rx="2" />
    <rect x="12" y="2" width="8" height="8" rx="2" />
    <rect x="2" y="12" width="8" height="8" rx="2" />
    <rect x="12" y="12" width="8" height="8" rx="2" />
  </svg>,
  // difficulty tracks
  <svg key="tracks" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 5h16M3 11h11M3 17h7" />
  </svg>,
  // hint bulb
  <svg key="bulb" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 2a6 6 0 0 0-3.3 11c.7.5 1.3 1.2 1.3 2h4c0-.8.6-1.5 1.3-2A6 6 0 0 0 11 2Z" />
    <path d="M9 18.5h4M9.8 21h2.4" />
  </svg>,
  // offline
  <svg key="offline" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M2 8a13 13 0 0 1 8-3.4M15.5 5.7A13 13 0 0 1 20 8M5.5 12a8.5 8.5 0 0 1 3.6-2M14.5 11a8.5 8.5 0 0 1 2 1M9 15.6a4.5 4.5 0 0 1 4 0M11 19h.01" />
    <path d="m3 3 16 16" />
  </svg>,
  // cloud save
  <svg key="cloud" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 17A4.5 4.5 0 0 1 6 8a6 6 0 0 1 11.6 1.5A3.8 3.8 0 0 1 16.5 17h-10Z" />
    <path d="M11 9v5M8.8 12.2 11 14.4l2.2-2.2" />
  </svg>,
  // languages
  <svg key="globe" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="9" />
    <path d="M2 11h18M11 2c2.5 2.6 3.8 5.7 3.8 9S13.5 17.4 11 20c-2.5-2.6-3.8-5.7-3.8-9S8.5 4.6 11 2Z" />
  </svg>,
];

/** Six candy-panel feature cards. */
export default function FeatureGrid({ features }: { features: Dict["features"] }) {
  return (
    <section id="features" className="px-6 py-24" aria-labelledby="features-title">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="features-title" className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            {features.h2}
          </h2>
          <p className="mt-5 text-lg text-ink-soft">{features.sub}</p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, i) => (
            <li
              key={item.title}
              className="candy-panel p-7 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                style={{ background: TONES[i % TONES.length], boxShadow: "0 3px 0 rgba(0,0,0,0.18)" }}
                aria-hidden
              >
                {ICONS[i]}
              </span>
              <h3 className="mt-5 text-lg font-extrabold tracking-tight">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
