import ProductShowcase from "@/components/product-showcase";
import Minuman from "@/components/minuman";
import { Review } from "@/components/Review";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroSnack from "@/components/hero-snack";

export default function Home() {
  return (
    <>
      <HeroSnack />
      <main className="mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 w-screen px-2 flex justify-center items-center">
              <ProductShowcase
                images={["/snack1.jpg", "/snack2.jpg"]}
                title="Snack Box & Coffee Break"
              />
            </div>
            <div className="md:w-1/2">
              <div className="p-8">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">
                  Snack Box & Coffee Break
                </h1>
                <p className="text-lg text-slate-800 mb-6 text-justify">
                  Cemilan manis dan gurih selalu menjadi pilihan favorit untuk
                  melengkapi acara acara kalian. Beragam jenis snack dapat
                  dikemas kedalam box untuk acara yang lebih santai atau
                  dilengkapi dengan sajian minuman hangat seperti kopi dan teh
                  untuk acara yang lebih formal.
                </p>
                <div className="flex space-x-4 mb-6">
                  <div className="flex flex-row justify-center items-center space-x-4">
                    <Link
                      href="#pricing"
                      className=" inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-800 transition duration-300 w-full sm:w-auto"
                    >
                      Lihat Menu Snack Box & Coffee Break
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 text-sm w-full sm:w-auto animate-bounce"
                    >
                      Konsultasi Berlangganan Catering
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Minuman />
          <Review />
          <CTASection
            description="Sudah ada 1000++ Snackbox dan Coffee Break Terjual Sebagai Pelengkap Hidangan Berbagai Acara. Snackbox & Coffebreak Premium MUlai dari 20Rb-an, Cocok Untuk Acara Kantor, Ulang Tahun, Wedding, Dan Lainnya."
            primaryCTA={{
              text: "Dapatkan Promo Snack Box & Coffee Break Sekarang!",
              href: "#pricing",
            }}
          />
        </div>
      </main>
    </>
  );
}
