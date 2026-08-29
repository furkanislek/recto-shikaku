import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { DICTS } from "./content";
import { BOX_TONES, DEMO_LEVEL, assignTones, clueOfRect, toneStyle } from "./levels";
import type { Lang } from "./site";

export const OG_SIZE = { width: 1200, height: 630 };

/** The demo board rendered as a finished candy mosaic, satori-style. */
function OgBoard({ px }: { px: number }) {
  const tones = assignTones(DEMO_LEVEL.rects);
  const cell = px / DEMO_LEVEL.gridW;
  const gap = 7;
  return (
    <div style={{ display: "flex", position: "relative", width: px, height: px }}>
      {DEMO_LEVEL.rects.map((rect, i) => {
        const { gradientTop, gradientBottom, bevel } = toneStyle(BOX_TONES[tones[i]]);
        const clue = clueOfRect(DEMO_LEVEL, rect);
        return (
          <div
            key={i}
            style={{
              display: "flex",
              position: "absolute",
              left: rect.c * cell + gap / 2,
              top: rect.r * cell + gap / 2,
              width: rect.w * cell - gap,
              height: rect.h * cell - gap,
              borderRadius: 16,
              background: `linear-gradient(180deg, ${gradientTop}, ${gradientBottom})`,
              boxShadow: `0 6px 0 ${bevel}`,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: Math.min(rect.w, rect.h) === 1 ? cell * 0.36 : cell * 0.46,
                fontFamily: "Hanken",
                fontWeight: 700,
              }}
            >
              {clue.v}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export async function buildOgImage(lang: Lang) {
  const d = DICTS[lang];
  const [hankenBold, mono] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/HankenGrotesk-700.ttf")),
    readFile(join(process.cwd(), "assets/fonts/JetBrainsMono-500.ttf")),
  ]);
  const title = `${d.hero.h1Pre}${d.hero.h1Highlight}${d.hero.h1Post}`;
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, #FFF6E4 0%, #F6F2DD 45%, #D9EFDC 100%)",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <span
            style={{
              fontFamily: "Mono",
              fontSize: 22,
              letterSpacing: 6,
              color: "#4C4F4C",
              textTransform: "uppercase",
            }}
          >
            {d.hero.eyebrow}
          </span>
          <span
            style={{
              fontFamily: "Hanken",
              fontWeight: 700,
              fontSize: 110,
              color: "#1B1C1C",
              marginTop: 18,
              letterSpacing: -4,
            }}
          >
            Recto
          </span>
          <span
            style={{
              fontFamily: "Hanken",
              fontWeight: 700,
              fontSize: 46,
              color: "#2E8347",
              marginTop: 10,
              letterSpacing: -1,
            }}
          >
            {title}
          </span>
          <div style={{ display: "flex", gap: 14, marginTop: 38 }}>
            {d.hero.chips.slice(0, 3).map((chip) => (
              <span
                key={chip}
                style={{
                  display: "flex",
                  fontFamily: "Mono",
                  fontSize: 20,
                  color: "#4C4F4C",
                  background: "rgba(255,255,255,0.75)",
                  border: "1px solid #F1E6CC",
                  borderRadius: 999,
                  padding: "10px 22px",
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", transform: "rotate(4deg)" }}>
          <OgBoard px={430} />
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Hanken", data: hankenBold, weight: 700 },
        { name: "Mono", data: mono, weight: 500 },
      ],
    },
  );
}
