/**
 * Real level data lifted from the game's shipped catalog
 * (shikaku/assets/levels/levels.json) plus the exact board-styling rules the
 * Flutter renderer uses (grid_painter.dart / app_colors.dart), so the boards
 * on the website are pixel-faithful recreations of the app.
 */

export type Clue = { r: number; c: number; v: number };
export type Rect = { r: number; c: number; w: number; h: number };
export type Level = { gridW: number; gridH: number; clues: Clue[]; rects: Rect[] };

/** The game's 12 candy tones, in catalog order. */
export const BOX_TONES = [
  "#56B267", // green
  "#E87A55", // coral
  "#5B8DEF", // blue
  "#EDAE3B", // gold
  "#B168C8", // purple
  "#3BBBA4", // teal
  "#E8655F", // red
  "#7B7FE0", // indigo
  "#9DBE3C", // lime
  "#E96FA0", // pink
  "#43ADC9", // cyan
  "#9A6FE0", // violet
] as const;

/** tracks.easy level 1 — 5×5, used by the scroll-driven phone demo. */
export const DEMO_LEVEL: Level = {
  gridW: 5,
  gridH: 5,
  clues: [
    { r: 0, c: 1, v: 4 },
    { r: 0, c: 4, v: 2 },
    { r: 1, c: 0, v: 1 },
    { r: 1, c: 1, v: 2 },
    { r: 1, c: 3, v: 1 },
    { r: 3, c: 0, v: 6 },
    { r: 3, c: 3, v: 9 },
  ],
  rects: [
    { r: 0, c: 0, w: 4, h: 1 },
    { r: 0, c: 4, w: 1, h: 2 },
    { r: 1, c: 0, w: 1, h: 1 },
    { r: 1, c: 1, w: 2, h: 1 },
    { r: 1, c: 3, w: 1, h: 1 },
    { r: 2, c: 0, w: 2, h: 3 },
    { r: 2, c: 2, w: 3, h: 3 }, // the 9 — placed last in the demo
  ],
};

/** Index (in DEMO_LEVEL.rects) of the patch the scroll demo animates in. */
export const DEMO_FINAL_RECT = 6;

/** Small hand-verified 4×4 used by the "How to play" step boards (sums to 16, tiles the grid). */
export const MINI_LEVEL: Level = {
  gridW: 4,
  gridH: 4,
  clues: [
    { r: 0, c: 0, v: 4 },
    { r: 0, c: 3, v: 2 },
    { r: 1, c: 2, v: 2 },
    { r: 2, c: 0, v: 2 },
    { r: 2, c: 2, v: 3 },
    { r: 3, c: 1, v: 3 },
  ],
  rects: [
    { r: 0, c: 0, w: 2, h: 2 },
    { r: 0, c: 2, w: 2, h: 1 },
    { r: 1, c: 2, w: 2, h: 1 },
    { r: 2, c: 0, w: 1, h: 2 },
    { r: 2, c: 1, w: 3, h: 1 },
    { r: 3, c: 1, w: 3, h: 1 },
  ],
};

function bounds(rect: Rect) {
  return { top: rect.r, left: rect.c, bottom: rect.r + rect.h - 1, right: rect.c + rect.w - 1 };
}

function touching(a: Rect, b: Rect): boolean {
  const A = bounds(a);
  const B = bounds(b);
  return A.left <= B.right + 1 && B.left <= A.right + 1 && A.top <= B.bottom + 1 && B.top <= A.bottom + 1;
}

/**
 * The game's deterministic tone assignment: hash the rect bounds, then walk
 * forward until no touching (edge- or corner-adjacent) piece shares the tone.
 */
export function assignTones(rects: Rect[]): number[] {
  const tones: number[] = [];
  rects.forEach((rect, i) => {
    const { top, left, bottom, right } = bounds(rect);
    let tone = (top * 31 + left * 17 + bottom * 13 + right * 7) % BOX_TONES.length;
    for (let step = 0; step < BOX_TONES.length; step++) {
      const clash = rects.some((other, j) => j < i && tones[j] === tone && touching(rect, other));
      if (!clash) break;
      tone = (tone + 1) % BOX_TONES.length;
    }
    tones.push(tone);
  });
  return tones;
}

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Mix `hex` toward `target` by t (0..1) — mirrors Flutter's Color.lerp. */
export function mixHex(hex: string, target: string, t: number): string {
  const a = hexToRgb(hex);
  const b = hexToRgb(target);
  const c = a.map((v, i) => Math.round(v + (b[i] - v) * t));
  return `#${c.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

/** Top-lightened gradient + hard bottom bevel, exactly as the app paints pieces. */
export function toneStyle(tone: string) {
  return {
    gradientTop: mixHex(tone, "#FFFFFF", 0.22),
    gradientBottom: tone,
    bevel: mixHex(tone, "#000000", 0.28),
  };
}

/** Find the clue sitting inside a rect (every valid rect has exactly one). */
export function clueOfRect(level: Level, rect: Rect): Clue {
  const found = level.clues.find(
    (cl) => cl.r >= rect.r && cl.r < rect.r + rect.h && cl.c >= rect.c && cl.c < rect.c + rect.w,
  );
  return found ?? { r: rect.r, c: rect.c, v: rect.w * rect.h };
}

/** True if the grid cell (r, c) is covered by any of the given rects. */
export function cellCovered(r: number, c: number, rects: Rect[]): boolean {
  return rects.some((rc) => r >= rc.r && r < rc.r + rc.h && c >= rc.c && c < rc.c + rc.w);
}

/** Deterministic PRNG so SSR and client render identical "random" layouts. */
export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
