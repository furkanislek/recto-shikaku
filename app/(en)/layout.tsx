import { hanken, jbmono } from "@/lib/fonts";
import { buildMetadata, buildViewport } from "@/lib/seo";
import Script from "next/script";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18410433653"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18410433653');
          `}
        </Script>
        <div className="page-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
