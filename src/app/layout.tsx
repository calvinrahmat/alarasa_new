import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <GoogleTagManager gtmId="GTM-N32T9JLD" />
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
