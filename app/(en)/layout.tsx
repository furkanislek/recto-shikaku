import { hanken, jbmono } from "@/lib/fonts";
import { buildMetadata, buildViewport } from "@/lib/seo";
import "../globals.css";

export const metadata = buildMetadata("en");
export const viewport = buildViewport();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${hanken.variable} ${jbmono.variable} antialiased`}
    >
      <body>
        <div className="page-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
