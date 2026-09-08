"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { Dict } from "@/lib/content";
import CandyField from "./CandyField";
import StoreBadges from "./StoreBadges";

function HighlightUnderline() {
  return (
    <svg
      className="absolute -bottom-2 left-0 w-full sm:-bottom-3"
      viewBox="0 0 300 18"
      preserveAspectRatio="none"
      aria-hidden
    >
      <rect x="0" y="4" width="130" height="11" rx="5.5" fill="#43A860" />
      <rect x="138" y="4" width="76" height="11" rx="5.5" fill="#EDAE3B" />
      <rect x="222" y="4" width="78" height="11" rx="5.5" fill="#E87A55" />
    </svg>
  );
}

export default function Hero({ hero, badges }: { hero: Dict["hero"]; badges: Dict["badges"] }) {
  const useCompactHighlight = hero.h1Highlight.length <= 24;
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 700], [0, -170]);
  const contentOpacity = useTransform(scrollY, [0, 520], [1, 0]);
  const cueOpacity = useTransform(scrollY, [0, 180], [1, 0]);
  // faded-out controls must not stay clickable/focusable
  const contentVisibility = useTransform(contentOpacity, (v) => (v < 0.05 ? "hidden" : "visible"));
  const cueVisibility = useTransform(cueOpacity, (v) => (v < 0.05 ? "hidden" : "visible"));

  return (
    <header className={`relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 ${useCompactHighlight ? "" : "pb-16 pt-24"}`}>
      <CandyField />
      <motion.div
        className="hero-enter relative z-10 flex max-w-3xl flex-col items-center text-center"
        style={
          reduced
            ? undefined
            : { y: contentY, opacity: contentOpacity, visibility: contentVisibility }
        }
        initial={false}
      >
        {/* soft halo so edge pieces never fight the copy for contrast */}
        <div
          className="absolute -inset-x-24 -inset-y-16 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,250,238,0.95) 0%, rgba(255,250,238,0.8) 45%, rgba(255,250,238,0) 72%)",
          }}
          aria-hidden
        />
        <p className="chip-mono mb-6 rounded-full border border-panel-border bg-panel/80 px-4 py-2 text-ink-soft shadow-[0_2px_0_var(--color-panel-bevel)]">
          {hero.eyebrow}
        </p>
        <h1 className="max-w-3xl text-balance text-[clamp(2.1rem,9.5vw,3rem)] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
          {hero.h1Pre}
          <span className={useCompactHighlight ? "relative inline-block whitespace-nowrap" : "relative inline break-words"}>
            {hero.h1Highlight}
            {useCompactHighlight ? <HighlightUnderline /> : null}
          </span>
          {hero.h1Post}
        </h1>
        <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
          {hero.sub}
        </p>
        <StoreBadges badges={badges} className="mt-9" />
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          {hero.chips.map((chip) => (
            <li
              key={chip}
              className="chip-mono rounded-full bg-white/75 px-3.5 py-1.5 text-ink-soft ring-1 ring-panel-border"
            >
              {chip}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.a
        href="#demo"
        className={useCompactHighlight ? "absolute bottom-7 z-10 flex flex-col items-center gap-2 text-ink-soft" : "hidden"}
        style={reduced ? undefined : { opacity: cueOpacity, visibility: cueVisibility }}
        aria-label={hero.scrollCue}
      >
        <span className="flex h-[42px] w-[26px] items-start justify-center rounded-full border-2 border-ink/30 pt-2">
          <span className="cue-dot h-2 w-2 rounded-full bg-primary" />
        </span>
        <span className="chip-mono text-[10px]">{hero.scrollCue}</span>
      </motion.a>
    </header>
  );
}
