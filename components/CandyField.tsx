"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { BOX_TONES, mulberry32, toneStyle } from "@/lib/levels";

type FieldPiece = {
  side: "l" | "r";
  x: number; // final % from left
  y: number; // final % from top
  cell: number; // px size of one cell
  cellsX: number;
  cellsY: number;
  rot: number;
  tone: string;
  num: number | null;
  depth: 0 | 1 | 2; // 0 = far
  delay: number;
  floatDur: number;
};

/** Deterministic layout — identical on server and client. */
function buildPieces(): FieldPiece[] {
  const rnd = mulberry32(20260828);
  const pieces: FieldPiece[] = [];
  const shapes: [number, number][] = [
    [1, 1], [1, 1], [2, 1], [1, 2], [1, 1], [2, 1], [1, 1], [1, 3],
    [1, 1], [2, 2], [1, 2], [1, 1], [2, 1], [1, 1], [3, 1], [1, 1],
  ];
  for (let i = 0; i < shapes.length; i++) {
    const side = i % 2 === 0 ? "l" : "r";
    const [cellsX, cellsY] = shapes[i];
    const depth = (i % 3) as 0 | 1 | 2;
    const x = side === "l" ? 2 + rnd() * 19 : 77 + rnd() * 19;
    pieces.push({
      side,
      x,
      y: 4 + rnd() * 84,
      cell: (depth === 0 ? 26 : depth === 1 ? 36 : 46) + rnd() * 16,
      cellsX,
      cellsY,
      rot: -14 + rnd() * 28,
      tone: BOX_TONES[Math.floor(rnd() * BOX_TONES.length)],
      num: rnd() < 0.45 ? Math.max(2, Math.round(cellsX * cellsY * (1 + rnd() * 3))) : null,
      depth,
      delay: 0.15 + rnd() * 0.7,
      floatDur: 4 + rnd() * 3,
    });
  }
  return pieces;
}

const PIECES = buildPieces();

function CandyPiece({ p, animate, float }: { p: FieldPiece; animate: boolean; float: boolean }) {
  const { gradientTop, gradientBottom, bevel } = toneStyle(p.tone);
  const w = p.cell * p.cellsX;
  const h = p.cell * p.cellsY;
  const rad = Math.min(12, p.cell * 0.2);
  const body = (
    <div
      className="relative"
      style={{
        width: w,
        height: h,
        borderRadius: rad,
        background: `linear-gradient(180deg, ${gradientTop}, ${gradientBottom})`,
        boxShadow: `0 ${Math.max(2, p.cell * 0.07)}px 0 ${bevel}, 0 14px 30px rgba(62,110,74,0.16)`,
      }}
    >
      {Array.from({ length: p.cellsX - 1 }, (_, i) => (
        <span
          key={`v${i}`}
          className="absolute bottom-1 top-1 w-px bg-white/25"
          style={{ left: ((i + 1) / p.cellsX) * 100 + "%" }}
        />
      ))}
      {Array.from({ length: p.cellsY - 1 }, (_, i) => (
        <span
          key={`h${i}`}
          className="absolute left-1 right-1 h-px bg-white/25"
          style={{ top: ((i + 1) / p.cellsY) * 100 + "%" }}
        />
      ))}
      {p.num !== null ? (
        <span
          className="absolute font-bold text-white"
          style={{
            left: (0.5 / p.cellsX) * 100 + "%",
            top: (0.5 / p.cellsY) * 100 + "%",
            transform: "translate(-50%, -50%)",
            fontSize: p.cell * 0.42,
            textShadow: "0 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          {p.num}
        </span>
      ) : null}
    </div>
  );

  if (!animate) {
    return (
      <div className="absolute" style={{ left: `${p.x}%`, top: `${p.y}%`, rotate: `${p.rot}deg` }}>
        {body}
      </div>
    );
  }
  return (
    <motion.div
      className="absolute"
      style={{ left: `${p.x}%`, top: `${p.y}%` }}
      initial={{ x: p.side === "l" ? "-75vw" : "75vw", rotate: p.rot * 4, opacity: 0 }}
      animate={{ x: 0, rotate: p.rot, opacity: 1 }}
      transition={{ type: "spring", stiffness: 46, damping: 13, delay: p.delay }}
    >
      <motion.div
        // pause the infinite float once the hero scrolls out of view
        animate={float ? { y: [0, -9, 0] } : { y: 0 }}
        transition={
          float
            ? { duration: p.floatDur, repeat: Infinity, ease: "easeInOut", delay: p.delay }
            : { duration: 0.3 }
        }
      >
        {body}
      </motion.div>
    </motion.div>
  );
}

/** Candy rectangles that fly in from both edges, float, and parallax on scroll. */
export default function CandyField() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const { scrollY } = useScroll();
  const far = useTransform(scrollY, [0, 900], [0, -60]);
  const mid = useTransform(scrollY, [0, 900], [0, -130]);
  const near = useTransform(scrollY, [0, 900], [0, -210]);
  const layers = [
    { y: far, cls: "opacity-55 blur-[1.5px]" },
    { y: mid, cls: "opacity-80" },
    { y: near, cls: "" },
  ];
  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {layers.map((layer, d) => (
        <motion.div
          key={d}
          className={`absolute inset-0 ${layer.cls}`}
          style={reduced ? undefined : { y: layer.y }}
        >
          {PIECES.filter((p) => p.depth === d).map((p, i) => (
            <CandyPiece key={i} p={p} animate={!reduced} float={!reduced && inView} />
          ))}
        </motion.div>
      ))}
    </div>
  );
}
