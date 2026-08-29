# recto-web

Marketing site for **Recto — Shikaku Patches Puzzle** ([App Store](https://apps.apple.com/app/id6801644267) · [Google Play](https://play.google.com/store/apps/details?id=com.furkanislek.recto)).

Next.js 16 (App Router, Turbopack) · Tailwind CSS v4 · [motion](https://motion.dev) (Framer Motion) · TypeScript.

## Develop

```bash
npm run dev
```

## Build

```bash
npm run build && npm run start
```

## Deploying

**Set `NEXT_PUBLIC_SITE_URL` to the real production domain** (see `.env.example`). Every canonical URL, hreflang alternate, sitemap entry, robots.txt and JSON-LD block derives from it via [lib/site.ts](lib/site.ts); the fallback `https://rectogame.app` is a placeholder.

## Structure

- `/` — English landing page, `/tr` — Turkish. Two root layouts via route groups `app/(en)` and `app/(tr)` so each `<html lang>` is correct; shared page body in [components/LandingPage.tsx](components/LandingPage.tsx), copy in [lib/content.ts](lib/content.ts).
- The phone "gameplay" sections don't use video — the board is recreated in HTML/CSS from the game's real level data and rendering rules ([lib/levels.ts](lib/levels.ts), [components/ShikakuBoard.tsx](components/ShikakuBoard.tsx)), driven by scroll ([components/ScrollDemo.tsx](components/ScrollDemo.tsx)).
- SEO: per-locale metadata + hreflang ([lib/seo.ts](lib/seo.ts)), JSON-LD (VideoGame/MobileApplication, FAQPage, WebSite), `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, generated OG images (`opengraph-image.tsx`, drawn with the game's own fonts from `assets/fonts`), `public/llms.txt` for AI crawlers.
- Screenshots in `public/screens/` are real store captures (status bar cropped; the CSS phone frames draw their own).

## Updating assets

Source of truth is the Flutter app repo (`../shikaku`):

- Screenshots: `store_listing/ios_screenshots/*.png` → resize to 828 px wide, crop the top 84 px (status bar), save into `public/screens/`.
- App icon: `ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-1024.png` → `public/app-icon.png` (512), `public/app-icon-192.png`, `app/icon.png`, `app/apple-icon.png` (180), `app/favicon.ico`.
