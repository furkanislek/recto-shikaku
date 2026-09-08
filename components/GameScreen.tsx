import type { ReactNode } from "react";

function BottomAction({ icon, label, badge }: { icon: ReactNode; label: string; badge?: string }) {
  return (
    <div className="relative flex flex-col items-center gap-1.5 text-ink">
      {badge ? (
        <span className="absolute -top-1 right-1 font-mono text-[10px] font-bold text-primary-strong">
          {badge}
        </span>
      ) : null}
      {icon}
      <span className="chip-mono text-[10px]">{label}</span>
    </div>
  );
}

/**
 * Faithful recreation of the in-game screen chrome (header, TIME/MOVES,
 * bottom action bar). The board goes in as children.
 */
export default function GameScreen({
  level,
  diff,
  diffColor,
  score,
  time,
  moves,
  labels,
  children,
}: {
  level: string;
  diff: string;
  diffColor: string;
  score: ReactNode;
  time: string;
  moves: ReactNode;
  labels: { score: string; time: string; moves: string; undo: string; hint: string; reset: string };
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-cream via-[#f6f2dd] to-mint">
      {/* header */}
      <div className="flex items-center justify-between gap-1.5 px-3.5 pt-3">
        <div className="flex items-center gap-1.5">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M10 2 4 8l6 6" stroke="#1B1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="whitespace-nowrap text-[14px] font-extrabold tracking-tight">{level}</span>
          <span
            className="chip-mono whitespace-nowrap rounded-full px-1.5 py-1 text-[8px] font-bold text-white"
            style={{ background: diffColor, boxShadow: "0 2px 0 rgba(0,0,0,0.18)" }}
          >
            {diff}
          </span>
        </div>
        <span className="chip-mono whitespace-nowrap text-[9px] text-ink-soft">
          {labels.score}: <span className="text-ink">{score}</span>
        </span>
      </div>
      {/* time / moves */}
      <div className="flex items-end justify-between px-4 pt-3">
        <div>
          <div className="chip-mono text-[10px] text-ink-soft">{labels.time}</div>
          <div className="text-[24px] font-extrabold leading-none tracking-tight">{time}</div>
        </div>
        <div className="text-right">
          <div className="chip-mono text-[10px] text-ink-soft">{labels.moves}</div>
          <div className="text-[24px] font-extrabold leading-none tracking-tight">{moves}</div>
        </div>
      </div>
      <div className="mx-4 mt-3 border-t border-ink/10" />
      {/* board */}
      <div className="flex flex-1 items-center px-4">{children}</div>
      {/* bottom bar */}
      <div className="mx-4 border-t border-ink/10" />
      <div className="flex items-center justify-around px-6 pb-7 pt-3">
        <BottomAction
          label={labels.undo}
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M8 4 4 8l4 4" stroke="#1B1C1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 8h7a5 5 0 0 1 0 10h-1" stroke="#1B1C1C" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          }
        />
        <BottomAction
          label={labels.hint}
          badge="3"
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M10 2a5.5 5.5 0 0 0-3 10.1c.6.4 1 1.05 1 1.9h4c0-.85.4-1.5 1-1.9A5.5 5.5 0 0 0 10 2Z"
                stroke="#1B1C1C"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path d="M8.5 16.5h3M9 18.5h2" stroke="#1B1C1C" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          }
        />
        <BottomAction
          label={labels.reset}
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M16 10a6 6 0 1 1-1.76-4.24"
                stroke="#1B1C1C"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path d="M16 2v4h-4" stroke="#1B1C1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />
      </div>
    </div>
  );
}
