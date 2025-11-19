import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { FacebookPixelEvents } from "@/components/pixel-events";
import { Suspense } from "react";
import Script from "next/script";
import ClientWhatsapp from "@/components/ClientWhatsapp";
import ClientNavbar from "@/components/ClientNavbar";

export const dynamic = 'force-dynamic';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "Solusi Catering Premium Percayakan Alarasa Catering untuk melengkapi setiap acara special kalian! Enak, higienis dan terjangkau!",
  description:
    "Alarasa Catering merupakan perusahaan catering yang berkomitmen untuk menyajikan aneka lauk selera nusantara yang dikemas dalam berbagai macam kemasan untuk memenuhi kebutuhan setiap acara.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* Google Tag Manager 1 */}
      <GoogleTagManager gtmId="GTM-MD5GR22W" />
      {/* Google Tag Manager 2 */}
      <GoogleTagManager gtmId="GTM-P894HXLL" />
      
      {/* Google Ads conversion tracking script 1 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11304618111"
        strategy="afterInteractive"
      />
      <Script id="google-analytics-1" strategy="afterInteractive">
        {`
          if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11304618111');
          }
        `}
      </Script>
      
      {/* Google Ads conversion tracking script 2 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17740167253"
        strategy="afterInteractive"
      />
      <Script id="google-analytics-2" strategy="afterInteractive">
        {`
          if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17740167253');
          }
        `}
      </Script>
      
      <body className="flex flex-col min-h-screen">
        {/* Google Tag Manager noscript 1 */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MD5GR22W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Tag Manager noscript 2 */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P894HXLL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
        <ClientNavbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ClientWhatsapp />
      </body>
    </html>
  );
}
