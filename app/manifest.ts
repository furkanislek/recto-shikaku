import type { MetadataRoute } from "next";
import { DICTS } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Recto: Shikaku Patches Puzzle",
    short_name: "Recto",
    description: DICTS.en.meta.description,
    start_url: "/",
    display: "browser",
    background_color: "#FFF6E4",
    theme_color: "#43A860",
    icons: [
      { src: "/app-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/app-icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
