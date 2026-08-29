"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Dict } from "@/lib/content";
import PhoneFrame from "./PhoneFrame";

const SHOTS = ["/screens/home.png", "/screens/completed.png", "/screens/missions.png"];
const TILTS = [-4, 2, 5];

/** Three smaller phones showing home, celebration and missions screens. */
export default function GalleryStrip({ gallery }: { gallery: Dict["gallery"] }) {
  const reduced = useReducedMotion() ?? false;
  return (
    <section id="screens" className="px-6 py-24" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="gallery-title" className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            {gallery.h2}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">{gallery.sub}</p>
        </div>
        <div className="mt-16 grid justify-items-center gap-14 sm:grid-cols-3 sm:gap-6">
          {SHOTS.map((src, i) => (
            <motion.figure
              key={src}
              className="flex flex-col items-center gap-5"
              initial={reduced ? false : { opacity: 0, y: 60 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0, rotate: TILTS[i] }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 70, damping: 16, delay: i * 0.1 }}
            >
              <PhoneFrame platform="ios" className="w-[200px] transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-full w-full">
                  <Image src={src} alt={gallery.alts[i]} fill sizes="200px" className="object-cover object-top" />
                </div>
              </PhoneFrame>
              <figcaption className="chip-mono text-ink-soft">{gallery.captions[i]}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
