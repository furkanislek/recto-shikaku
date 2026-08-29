import Link from "next/link";
import type { Dict } from "@/lib/content";
import { APP_STORE_URL, AUTHOR, PLAY_STORE_URL, PRIVACY_URL, SUPPORT_URL } from "@/lib/site";
import LogoMark from "./LogoMark";

export default function Footer({ dict, homeHref }: { dict: Dict; homeHref: string }) {
  return (
    <footer className="border-t border-panel-border bg-panel/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href={homeHref} className="flex items-center gap-2.5" aria-label={dict.nav.homeLabel}>
            <LogoMark size={24} />
            <span className="text-lg font-extrabold tracking-tight">Recto</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-semibold text-ink-soft" aria-label={dict.footer.navLabel}>
            <a href="#how-to-play" className="transition-colors hover:text-ink">{dict.nav.howTo}</a>
            <a href="#faq" className="transition-colors hover:text-ink">{dict.nav.faq}</a>
            <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              {dict.footer.support}
            </a>
            <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              {dict.footer.privacy}
            </a>
            <Link href={dict.otherLangHref} className="transition-colors hover:text-ink">
              {dict.otherLangLabel}
            </Link>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-ink-soft sm:justify-start">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
            App Store ↗
          </a>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
            Google Play ↗
          </a>
        </div>
        <div className="space-y-2 border-t border-panel-border pt-6 text-center text-xs leading-relaxed text-ink-soft/80 sm:text-left">
          <p>
            © {new Date().getFullYear()} {AUTHOR}. {dict.footer.rights}
          </p>
          <p>{dict.footer.trademark}</p>
        </div>
      </div>
    </footer>
  );
}
