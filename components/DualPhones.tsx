"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Dict } from "@/lib/content";
import PhoneFrame from "./PhoneFrame";
import { AppStoreBadge, PlayBadge } from "./StoreBadges";

function DecorRect({ className, color }: { className: string; color: string }) {
  return (
    <span
      className={`absolute rounded-xl ${className}`}
      style={{ background: color, boxShadow: `0 3px 0 rgba(0,0,0,0.12)` }}
      aria-hidden
    />
  );
}

/** iOS + Android side by side, each running a different level, with download links. */
export default function DualPhones({ dual, badges }: { dual: Dict["dual"]; badges: Dict["badges"] }) {
  const reduced = useReducedMotion() ?? false;
  const entrance = (rotate: number, delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 70, rotate: 0 },
          whileInView: { opacity: 1, y: 0, rotate },
          viewport: { once: true, margin: "-120px" },
          transition: { type: "spring" as const, stiffness: 60, damping: 15, delay },
        };

  return (
    <section id="platforms" className="relative px-6 py-28" aria-labelledby="platforms-title">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="platforms-title" className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            {dual.h2}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">{dual.sub}</p>
        </div>

        <div className="relative mt-20 grid items-start gap-20 sm:grid-cols-2 sm:gap-10">
          <DecorRect className="left-[4%] top-[30%] h-14 w-14 opacity-70" color="#EDAE3B" />
          <DecorRect className="right-[2%] top-[8%] h-10 w-20 opacity-70" color="#E96FA0" />
          <DecorRect className="bottom-[12%] left-[45%] h-12 w-12 opacity-60" color="#5B8DEF" />

          <motion.figure className="flex flex-col items-center gap-6" {...entrance(-3, 0)}>
            <PhoneFrame platform="ios" className="w-[270px] sm:w-[300px]">
              <div className="relative h-full w-full">
                <Image
                  src="/screens/hard-board.png"
                  alt={dual.iosAlt}
                  fill
                  sizes="300px"
                  className="object-cover object-top"
                />
              </div>
            </PhoneFrame>
            <figcaption className="chip-mono text-ink-soft">{dual.iosCaption}</figcaption>
            <AppStoreBadge badges={badges} />
          </motion.figure>

          <motion.figure className="flex flex-col items-center gap-6 sm:mt-14" {...entrance(3, 0.12)}>
            <PhoneFrame platform="android" className="w-[270px] sm:w-[300px]">
              <div className="relative h-full w-full">
                <Image
                  src="/screens/gameplay.png"
                  alt={dual.androidAlt}
                  fill
                  sizes="300px"
                  className="object-cover object-top"
                />
              </div>
            </PhoneFrame>
            <figcaption className="chip-mono text-ink-soft">{dual.androidCaption}</figcaption>
            <PlayBadge badges={badges} />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
