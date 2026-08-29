import type { ReactNode } from "react";

function BatteryIcon() {
  return (
    <svg width="22" height="11" viewBox="0 0 22 11" fill="none" aria-hidden>
      <rect x="0.5" y="0.5" width="18" height="10" rx="3" stroke="currentColor" opacity="0.4" />
      <rect x="2" y="2" width="15" height="7" rx="1.8" fill="currentColor" />
      <path d="M20.5 3.5v4a2.2 2.2 0 0 0 0-4Z" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor" aria-hidden>
      <path d="M7.5 9.2 5.6 7.3a2.9 2.9 0 0 1 3.8 0L7.5 9.2Zm3.3-3.3a5.5 5.5 0 0 0-6.6 0L2.8 4.5a7.7 7.7 0 0 1 9.4 0l-1.4 1.4Z" />
      <path d="M14 3.2a10 10 0 0 0-13 0l1.2 1.2a8.3 8.3 0 0 1 10.6 0L14 3.2Z" opacity="0.5" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" aria-hidden>
      <rect x="0" y="7" width="3" height="4" rx="1" />
      <rect x="4.5" y="5" width="3" height="6" rx="1" />
      <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
      <rect x="13.5" y="0" width="3" height="11" rx="1" opacity="0.35" />
    </svg>
  );
}

function StatusBar({ platform }: { platform: "ios" | "android" }) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-9 items-center justify-between px-[6%] text-ink"
      aria-hidden
    >
      <span className="text-[12px] font-bold tracking-tight">10:56</span>
      {platform === "ios" ? (
        <span className="absolute left-1/2 top-2 h-[20px] w-[22%] max-w-[72px] -translate-x-1/2 rounded-full bg-ink" />
      ) : (
        <span className="absolute left-1/2 top-[10px] h-[11px] w-[11px] -translate-x-1/2 rounded-full bg-ink" />
      )}
      <span className="flex items-center gap-1.5">
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </span>
    </div>
  );
}

/**
 * A realistic device shell. Children fill the screen; a platform-appropriate
 * status bar (and Dynamic Island / punch-hole) is drawn on top, so screenshots
 * should be cropped below their own status bar.
 */
export default function PhoneFrame({
  platform,
  children,
  className,
}: {
  platform: "ios" | "android";
  children: ReactNode;
  className?: string;
}) {
  const ios = platform === "ios";
  return (
    <div
      className={`relative select-none rounded-[46px] bg-[#26262a] p-[10px] shadow-[0_30px_60px_rgba(27,28,28,0.28),inset_0_1px_2px_rgba(255,255,255,0.28)] ${className ?? ""}`}
    >
      {/* side buttons */}
      <span className="absolute -left-[2px] top-[110px] h-8 w-[3px] rounded-l bg-[#3a3a3f]" aria-hidden />
      <span className="absolute -left-[2px] top-[150px] h-12 w-[3px] rounded-l bg-[#3a3a3f]" aria-hidden />
      <span className={`absolute -right-[2px] w-[3px] rounded-r bg-[#3a3a3f] ${ios ? "top-[130px] h-16" : "top-[100px] h-10"}`} aria-hidden />
      <div
        className={`relative overflow-hidden bg-cream ${ios ? "rounded-[36px]" : "rounded-[32px]"}`}
        style={{ aspectRatio: "828 / 1758" }}
      >
        <StatusBar platform={platform} />
        <div className="absolute inset-0 pt-9">{children}</div>
        {/* gesture bar */}
        <span
          className="pointer-events-none absolute bottom-[6px] left-1/2 z-20 h-[4px] w-[38%] -translate-x-1/2 rounded-full bg-ink/80"
          aria-hidden
        />
      </div>
    </div>
  );
}
