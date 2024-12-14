import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";
import Script from "next/script";

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
    "SOLUSI CATERINGMU! Percayakan Alarasa Catering untuk melengkapi setiap acara special kalian! Enak, higienis dan terjangkau!",
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
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N32T9JLD');
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N32T9JLD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
