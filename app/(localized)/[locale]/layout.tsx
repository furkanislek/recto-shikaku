import { hanken, jbmono } from "@/lib/fonts";
import { getLocaleConfig } from "@/lib/locales";
import Script from "next/script";
import "../../globals.css";

export default async function LocalizedLocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const config = getLocaleConfig((await params).locale);
  return (
    <html lang={config?.bcp47 ?? "en"} dir={config?.direction ?? "ltr"} data-scroll-behavior="smooth" className={`${hanken.variable} ${jbmono.variable} antialiased`}>
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