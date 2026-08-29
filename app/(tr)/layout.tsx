import { hanken, jbmono } from "@/lib/fonts";
import { buildMetadata, buildViewport } from "@/lib/seo";
import "../globals.css";

export const metadata = buildMetadata("tr");
export const viewport = buildViewport();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
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
