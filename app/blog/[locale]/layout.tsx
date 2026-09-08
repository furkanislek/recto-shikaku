import { hanken, jbmono } from "@/lib/fonts";
import { getLocaleConfig } from "@/lib/locales";
import "../../globals.css";

export default async function BlogLocaleLayout({
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
        <div className="page-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}