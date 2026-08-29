import type { CSSProperties, ReactNode } from "react";
import {
  BOX_TONES,
  assignTones,
  cellCovered,
  clueOfRect,
  toneStyle,
  type Level,
  type Rect,
} from "@/lib/levels";

function pct(n: number, total: number) {
  return `${(n / total) * 100}%`;
}

export function rectPosition(level: Level, rect: Rect): CSSProperties {
  return {
    left: pct(rect.c, level.gridW),
    top: pct(rect.r, level.gridH),
    width: pct(rect.w, level.gridW),
    height: pct(rect.h, level.gridH),
  };
}

/** Interior hairlines so the cells under a multi-cell piece still read. */
export function PieceLines({ rect }: { rect: Rect }) {
  const lines: ReactNode[] = [];
  for (let i = 1; i < rect.w; i++) {
    lines.push(
      <span
        key={`v${i}`}
        className="shk-line"
        style={{ left: pct(i, rect.w), top: "var(--gap)", bottom: "var(--gap)", width: 1 }}
      />,
    );
  }
  for (let i = 1; i < rect.h; i++) {
    lines.push(
      <span
        key={`h${i}`}
        className="shk-line"
        style={{ top: pct(i, rect.h), left: "var(--gap)", right: "var(--gap)", height: 1 }}
      />,
    );
  }
  return <>{lines}</>;
}

/** One placed candy piece — gradient fill, hard bottom bevel, white clue. */
export function Piece({
  level,
  rect,
  tone,
  style,
}: {
  level: Level;
  rect: Rect;
  tone: string;
  style?: CSSProperties;
}) {
  const { gradientTop, gradientBottom, bevel } = toneStyle(tone);
  const clue = clueOfRect(level, rect);
  return (
    <div className="shk-piece" style={{ ...rectPosition(level, rect), ...style }}>
      <div
        className="shk-piece-inner"
        style={{
          background: `linear-gradient(180deg, ${gradientTop}, ${gradientBottom})`,
          boxShadow: `0 var(--bev) 0 ${bevel}`,
        }}
      >
        <PieceLines rect={rect} />
        <span
          className="shk-piece-clue"
          style={{
            left: pct(clue.c - rect.c + 0.5, rect.w),
            top: pct(clue.r - rect.r + 0.5, rect.h),
          }}
        >
          {clue.v}
        </span>
      </div>
    </div>
  );
}

/**
 * A faithful, static Shikaku board. `placed` selects which solution rects are
 * drawn as candy pieces; every uncovered cell renders as a white tile with its
 * clue (if any). Extra animated pieces can be layered on via `children`.
 */
export default function ShikakuBoard({
  level,
  placed,
  className,
  children,
}: {
  level: Level;
  placed: number[];
  className?: string;
  children?: ReactNode;
}) {
  const tones = assignTones(level.rects);
  const placedRects = placed.map((i) => level.rects[i]);
  const cells: ReactNode[] = [];
  for (let r = 0; r < level.gridH; r++) {
    for (let c = 0; c < level.gridW; c++) {
      if (cellCovered(r, c, placedRects)) continue;
      const clue = level.clues.find((cl) => cl.r === r && cl.c === c);
      cells.push(
        <div
          key={`${r}-${c}`}
          className="shk-cell"
          style={{
            left: pct(c, level.gridW),
            top: pct(r, level.gridH),
            width: pct(1, level.gridW),
            height: pct(1, level.gridH),
          }}
        >
          <div className="shk-cell-inner">
            {clue ? <span className="shk-clue">{clue.v}</span> : null}
          </div>
        </div>,
      );
    }
  }
  return (
    <div className={`shk-wrap ${className ?? ""}`}>
      <div
        className="shk-board"
        style={{
          aspectRatio: `${level.gridW} / ${level.gridH}`,
          ["--gw" as string]: level.gridW,
        }}
      >
        {cells}
        {placed.map((i) => (
          <Piece key={i} level={level} rect={level.rects[i]} tone={BOX_TONES[tones[i]]} />
        ))}
        {children}
      </div>
    </div>
  );
}
