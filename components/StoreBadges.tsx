import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/site";
import type { Dict } from "@/lib/content";

function AppleLogo() {
  return (
    <svg width="24" height="28" viewBox="0 0 24 28" fill="currentColor" aria-hidden>
      <path d="M19.6 14.8c0-3.1 2.5-4.6 2.6-4.7-1.4-2.1-3.6-2.4-4.4-2.4-1.9-.2-3.7 1.1-4.6 1.1-1 0-2.4-1.1-4-1.1-2 0-3.9 1.2-5 3-2.1 3.7-.5 9.2 1.5 12.2 1 1.5 2.2 3.1 3.8 3 1.5-.1 2.1-1 4-1 1.8 0 2.4 1 4 1 1.7 0 2.7-1.5 3.7-3 1.2-1.7 1.6-3.4 1.7-3.5-.1-.1-3.2-1.3-3.3-4.6ZM16.6 5.6c.8-1 1.4-2.4 1.2-3.8-1.2 0-2.7.8-3.5 1.8-.8.9-1.5 2.3-1.3 3.7 1.4.1 2.7-.7 3.6-1.7Z" />
    </svg>
  );
}

function PlayLogo() {
  return (
    <svg width="24" height="26" viewBox="0 0 24 26" aria-hidden>
      <path d="M1.6.9C1.2 1.3 1 1.9 1 2.7v20.6c0 .8.2 1.4.6 1.8L1.7 25l11.6-11.5v-.3L1.6.9Z" fill="#00D7FE" />
      <path d="m17.1 17.4-3.8-3.9v-.3l3.9-3.8.1.1 4.6 2.6c1.3.7 1.3 1.9 0 2.7l-4.6 2.6h-.2Z" fill="#FFCE00" />
      <path d="M17.3 17.3 13.3 13.3 1.6 25.1c.4.5 1.1.5 2 .1l13.7-7.9" fill="#FF3A44" />
      <path d="M17.3 9.4 3.6.8C2.7.3 2 .4 1.6.9l11.7 11.6 4-3.1Z" fill="#00F076" />
    </svg>
  );
}

const badgeBase =
  "inline-flex items-center gap-3 rounded-2xl bg-ink text-white shadow-[0_4px_0_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5";

function sizing(size: "md" | "lg") {
  return {
    pad: size === "lg" ? "h-16 px-6" : "h-14 px-5",
    bottom: size === "lg" ? "text-[22px]" : "text-[19px]",
  };
}

export function AppStoreBadge({ badges, size = "md" }: { badges: Dict["badges"]; size?: "md" | "lg" }) {
  const { pad, bottom } = sizing(size);
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${badgeBase} ${pad}`}
      aria-label={`${badges.appStoreTop} ${badges.appStoreBottom}`}
    >
      <AppleLogo />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[11px] font-medium opacity-80">{badges.appStoreTop}</span>
        <span className={`${bottom} font-bold tracking-tight`}>{badges.appStoreBottom}</span>
      </span>
    </a>
  );
}

export function PlayBadge({ badges, size = "md" }: { badges: Dict["badges"]; size?: "md" | "lg" }) {
  const { pad, bottom } = sizing(size);
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${badgeBase} ${pad}`}
      aria-label={`${badges.playTop} ${badges.playBottom}`}
    >
      <PlayLogo />
      <span className="flex flex-col items-start leading-none">
        <span className="chip-mono text-[9px] opacity-80">{badges.playTop}</span>
        <span className={`${bottom} font-bold tracking-tight`}>{badges.playBottom}</span>
      </span>
    </a>
  );
}

/** Both official-style black store badges (drawn in-house, no external assets). */
export default function StoreBadges({
  badges,
  size = "md",
  className,
}: {
  badges: Dict["badges"];
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${className ?? ""}`}>
      <AppStoreBadge badges={badges} size={size} />
      <PlayBadge badges={badges} size={size} />
    </div>
  );
}
