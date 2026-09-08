"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import type { Dict } from "@/lib/content";
import {
  BOX_TONES,
  DEMO_FINAL_RECT,
  DEMO_LEVEL,
  assignTones,
  clueOfRect,
  mulberry32,
  toneStyle,
} from "@/lib/levels";
import PhoneFrame from "./PhoneFrame";
import GameScreen from "./GameScreen";
import ShikakuBoard, { PieceLines } from "./ShikakuBoard";
import LogoMark from "./LogoMark";

const TONES = assignTones(DEMO_LEVEL.rects);
const PRE_PLACED = DEMO_LEVEL.rects.map((_, i) => i).filter((i) => i !== DEMO_FINAL_RECT);
const FINAL_RECT = DEMO_LEVEL.rects[DEMO_FINAL_RECT];
const FINAL_TONE = toneStyle(BOX_TONES[TONES[DEMO_FINAL_RECT]]);
const FINAL_CLUE = clueOfRect(DEMO_LEVEL, FINAL_RECT);
const { gridW, gridH } = DEMO_LEVEL;

type ConfettiParams = {
  angle: number;
  reach: number;
  grav: number;
  spin: number;
  w: number;
  h: number;
  color: string;
  delay: number;
};

const SHORT_VIEWPORT_QUERY = "(max-height: 500px)";

function subscribeShortViewport(onChange: () => void) {
  const mql = window.matchMedia(SHORT_VIEWPORT_QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

const CONFETTI: ConfettiParams[] = (() => {
  const rnd = mulberry32(777);
  return Array.from({ length: 44 }, () => {
    const size = 6 + rnd() * 7;
    return {
      angle: rnd() * Math.PI * 2,
      reach: 90 + rnd() * 210,
      grav: 60 + rnd() * 120,
      spin: (rnd() < 0.5 ? -1 : 1) * (240 + rnd() * 320),
      w: size,
      h: size * (0.55 + rnd() * 0.35),
      color: BOX_TONES[Math.floor(rnd() * BOX_TONES.length)],
      delay: rnd() * 0.15,
    };
  });
})();

function ConfettiPiece({ celeb, p }: { celeb: MotionValue<number>; p: ConfettiParams }) {
  const local = useTransform(celeb, (v) => Math.min(1, Math.max(0, (v - p.delay) / (1 - p.delay))));
  const ease = (v: number) => 1 - Math.pow(1 - v, 3);
  const x = useTransform(local, (v) => Math.cos(p.angle) * p.reach * ease(v));
  const y = useTransform(local, (v) => Math.sin(p.angle) * p.reach * 0.9 * ease(v) + p.grav * v * v);
  const rotate = useTransform(local, (v) => p.spin * v);
  const opacity = useTransform(local, (v) =>
    v <= 0 ? 0 : (v < 0.08 ? v / 0.08 : v > 0.75 ? Math.max(0, (1 - v) / 0.25) : 1) * 0.85,
  );
  return (
    <motion.span
      className="absolute left-1/2 top-[52%]"
      style={{ x, y, rotate, opacity, width: p.w, height: p.h, borderRadius: 2, background: p.color }}
    />
  );
}

function Caption({
  p,
  range,
  title,
  body,
  reduced,
}: {
  p: MotionValue<number>;
  range: [number, number, number, number];
  title: string;
  body: string;
  reduced: boolean;
}) {
  const opacity = useTransform(p, range, [0, 1, 1, 0]);
  const y = useTransform(p, range, [22, 0, 0, -22]);
  return (
    <motion.div
      className="absolute inset-x-6 top-20 z-30 mx-auto max-w-md text-center lg:inset-x-auto lg:left-[max(2.5rem,calc(50%-32rem))] lg:top-1/2 lg:mx-0 lg:w-80 lg:-translate-y-1/2 lg:text-left"
      style={reduced ? undefined : { opacity, y }}
    >
      <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h3>
      <p className="mt-2.5 text-base leading-relaxed text-ink-soft sm:text-lg">{body}</p>
    </motion.div>
  );
}

/**
 * Scrollytelling centerpiece: a sticky phone running the game. Six of seven
 * patches are placed; scrolling draws the last 3×3 patch from its clue cell,
 * then the board celebrates with the game's own rectangle confetti.
 */
export default function ScrollDemo({ demo }: { demo: Dict["demo"] }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion() ?? false;
  // landscape phones / very short viewports can't fit the sticky phone — fall
  // back to the static layout (SSR snapshot must be false so hydration matches)
  const shortViewport = useSyncExternalStore(
    subscribeShortViewport,
    () => window.matchMedia(SHORT_VIEWPORT_QUERY).matches,
    () => false,
  );
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // phone entrance — input ranges span the full [0, 1] so motion's WAAPI
  // scroll-timeline optimization doesn't append an implicit base-value keyframe
  const phoneY = useTransform(p, [0, 0.16, 1], ["46vh", "0vh", "0vh"]);
  const phoneScale = useTransform(p, [0, 0.16, 1], [0.92, 1, 1]);
  const phoneOpacity = useTransform(p, [0, 0.09, 1], [0, 1, 1]);

  // final patch growth (smoothstepped scrub)
  const fillRaw = useTransform(p, [0.3, 0.6], [0, 1]);
  const fill = useTransform(fillRaw, (v) => v * v * (3 - 2 * v));
  const left = useTransform(fill, (v) => `${((FINAL_CLUE.c - v * (FINAL_CLUE.c - FINAL_RECT.c)) / gridW) * 100}%`);
  const top = useTransform(fill, (v) => `${((FINAL_CLUE.r - v * (FINAL_CLUE.r - FINAL_RECT.r)) / gridH) * 100}%`);
  const width = useTransform(fill, (v) => `${((1 + v * (FINAL_RECT.w - 1)) / gridW) * 100}%`);
  const height = useTransform(fill, (v) => `${((1 + v * (FINAL_RECT.h - 1)) / gridH) * 100}%`);
  const pieceOpacity = useTransform(fill, [0, 0.03], [0, 1]);
  const lineOpacity = useTransform(fill, [0.65, 1], [0, 1]);
  const landFilter = useTransform(p, [0.58, 0.62, 0.7], ["brightness(1)", "brightness(1.16)", "brightness(1)"]);

  // celebration
  const celeb = useTransform(p, [0.66, 0.92], [0, 1]);
  const badgeScale = useTransform(celeb, [0, 0.16, 0.3], [0.4, 1.1, 1]);
  const badgeOpacity = useTransform(celeb, [0, 0.1], [0, 1]);
  const glowOpacity = useTransform(celeb, [0, 0.3], [0, 0.55]);
  const moves = useTransform(fill, (v): string => (v >= 1 ? "7" : "6"));
  const score = useTransform(celeb, (v): string => (v > 0.25 ? "100" : "0"));

  if (reduced || shortViewport) {
    return (
      <section ref={ref} id="demo" aria-labelledby="demo-title" className="relative px-6 py-24">
        <h2 id="demo-title" className="sr-only">
          {demo.aria}
        </h2>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-20">
          <div className="max-w-md space-y-8">
            {demo.captions.map((cap) => (
              <div key={cap.title}>
                <h3 className="text-2xl font-extrabold tracking-tight">{cap.title}</h3>
                <p className="mt-2 text-ink-soft">{cap.body}</p>
              </div>
            ))}
          </div>
          <div aria-hidden>
            <PhoneFrame platform="ios" className="w-[280px] sm:w-[320px]">
              <GameScreen level={demo.level} diff={demo.diff} diffColor="#3BBBA4" score="100" time="01:24" moves="7" labels={demo}>
                <div className="w-full">
                  <ShikakuBoard level={DEMO_LEVEL} placed={DEMO_LEVEL.rects.map((_, i) => i)} />
                </div>
              </GameScreen>
              <div className="absolute left-1/2 top-[46%] z-30 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-full bg-white px-6 py-3.5 shadow-[0_6px_20px_rgba(62,110,74,0.25)]">
                <LogoMark size={22} />
                <span className="text-xl font-extrabold tracking-tight text-primary-strong">{demo.completeTitle}</span>
              </div>
            </PhoneFrame>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} aria-labelledby="demo-title" className="relative h-[340vh]">
      <h2 id="demo-title" className="sr-only">
        {demo.aria}
      </h2>
      {/* anchor lands visitors ~14% in: phone settled, first caption visible */}
      <span id="demo" aria-hidden className="absolute top-[14%]" />
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        <Caption p={p} range={[0.13, 0.19, 0.27, 0.33]} title={demo.captions[0].title} body={demo.captions[0].body} reduced={reduced} />
        <Caption p={p} range={[0.34, 0.4, 0.56, 0.62]} title={demo.captions[1].title} body={demo.captions[1].body} reduced={reduced} />
        <Caption p={p} range={[0.7, 0.76, 0.97, 1]} title={demo.captions[2].title} body={demo.captions[2].body} reduced={reduced} />

        <motion.div
          className="relative mt-32 lg:mt-0"
          style={{ y: phoneY, scale: phoneScale, opacity: phoneOpacity }}
          aria-hidden
        >
          {/* celebration glow */}
          <motion.div
            className="absolute -inset-16 -z-10 rounded-full"
            style={{
              opacity: glowOpacity,
              background: "radial-gradient(circle, rgba(67,168,96,0.35) 0%, rgba(67,168,96,0) 70%)",
            }}
            aria-hidden
          />
          <PhoneFrame
            platform="ios"
            className="w-[min(270px,calc((100svh-250px)/2.19))] lg:w-[min(330px,calc((100svh-150px)/2.19))]"
          >
            <GameScreen level={demo.level} diff={demo.diff} diffColor="#3BBBA4" score={<motion.span>{score}</motion.span>} time="01:24" moves={<motion.span>{moves}</motion.span>} labels={demo}>
              <div className="w-full">
                <ShikakuBoard level={DEMO_LEVEL} placed={PRE_PLACED}>
                  {/* the growing final patch */}
                  <motion.div
                    className="shk-piece"
                    style={{ left, top, width, height, opacity: pieceOpacity, filter: landFilter, zIndex: 10 }}
                  >
                    <div
                      className="shk-piece-inner"
                      style={{
                        background: `linear-gradient(180deg, ${FINAL_TONE.gradientTop}, ${FINAL_TONE.gradientBottom})`,
                        boxShadow: `0 var(--bev) 0 ${FINAL_TONE.bevel}`,
                      }}
                    >
                      <motion.div className="absolute inset-0" style={{ opacity: lineOpacity }}>
                        <PieceLines rect={FINAL_RECT} />
                      </motion.div>
                      <span
                        className="shk-piece-clue"
                        style={{ left: "50%", top: "50%" }}
                      >
                        {FINAL_CLUE.v}
                      </span>
                    </div>
                  </motion.div>
                </ShikakuBoard>
              </div>
            </GameScreen>

            {/* confetti — the game's own rectangle burst */}
            <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-[36px]" aria-hidden>
              {CONFETTI.map((cp, i) => (
                <ConfettiPiece key={i} celeb={celeb} p={cp} />
              ))}
            </div>

            {/* completion badge */}
            <motion.div
              className="absolute left-1/2 top-[46%] z-40 flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 shadow-[0_6px_20px_rgba(62,110,74,0.25)]"
              style={{ x: "-50%", y: "-50%", scale: badgeScale, opacity: badgeOpacity }}
            >
              <LogoMark size={22} />
              <span className="text-xl font-extrabold tracking-tight text-primary-strong">
                {demo.completeTitle}
              </span>
            </motion.div>
          </PhoneFrame>
        </motion.div>
      </div>
    </section>
  );
}
