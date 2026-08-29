"use client";

import Link from "next/link";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import type { Dict } from "@/lib/content";
import LogoMark from "./LogoMark";

/** Floating pill nav that turns into a glass panel once the page scrolls. */
export default function Navbar({
  nav,
  homeHref,
  otherLangLabel,
  otherLangHref,
}: {
  nav: Dict["nav"];
  homeHref: string;
  otherLangLabel: string;
  otherLangHref: string;
}) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  const links = [
    { href: "#demo", label: nav.howTo },
    { href: "#features", label: nav.features },
    { href: "#faq", label: nav.faq },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full py-2 pl-4 pr-2 transition-all duration-300 ${
          scrolled
            ? "border border-panel-border bg-panel/85 shadow-[0_4px_0_var(--color-panel-bevel),0_14px_30px_rgba(62,110,74,0.1)] backdrop-blur-md"
            : "border border-transparent"
        }`}
        aria-label={nav.mainLabel}
      >
        <Link href={homeHref} className="flex items-center gap-2.5" aria-label={nav.homeLabel}>
          <LogoMark size={26} />
          <span className="text-xl font-extrabold tracking-tight">Recto</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <Link
            href={otherLangHref}
            className="chip-mono rounded-full px-3 py-2 text-ink-soft transition-colors hover:text-ink"
          >
            {otherLangLabel === "English" ? "EN" : "TR"}
            <span className="sr-only"> {otherLangLabel}</span>
          </Link>
          <a href="#download" className="btn-candy px-5 py-2.5 text-sm">
            {nav.download}
          </a>
        </div>
      </nav>
    </div>
  );
}
