import { DICTS } from "@/lib/content";
import { OG_SIZE, buildOgImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = DICTS.en.meta.ogAlt;

export default function Image() {
  return buildOgImage("en");
}
