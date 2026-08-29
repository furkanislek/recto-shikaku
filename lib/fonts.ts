import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

/** Same families the game itself ships with (Hanken Grotesk + JetBrains Mono). */
export const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

export const jbmono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-jbmono",
  display: "swap",
});
