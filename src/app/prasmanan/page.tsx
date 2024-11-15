import { Review } from "@/components/Review";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import HeroPrasmanan from "@/components/hero-prasmanan";
import ImageSlider from "@/components/image-slider";
export default function PrasmananPage() {
  return (
    <div className="bg-gradient-to-b from-[#141e14] to-[#1C2C1C] min-h-screen text-slate-100">
      <HeroPrasmanan />
      <main className="my-10">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-center min-h-dvh">
            <div className="w-full md:w-1/2 px-4 md:px-0 min-h-[50vh] md:min-h-[75vh]">
              <ImageSlider images={["/prasmanan2.jpg", "/prasmanan3.jpg"]} />
            </div>
            <div className="md:w-1/2 pe-5 mb-10">
              <div className="p-8">
                <h1 className="text-4xl font-bold mb-4">Prasmanan</h1>
                <p className="text-lg mb-6 text-justify pe-10">
                  Prasmanan merupakan solusi untuk elevate acara kalian agar
                  terlihat lebih mewah dan elegan. Tidak hanya menyajikan sajian
                  yang nikmat, Alarasa Catering juga menyediakan semua peralatan
                  prasmanan dimulai dari meja, chaffing dish, dan peralatan
                  makan. One stop solution untuk acara special kalian.
                </p>
                <div className="flex space-x-4 mb-6">
                  <div className="flex flex-row justify-center items-center space-x-4">
                    <Link
                      href="https://drive.google.com/file/d/1cjCdUPGleTbKIJ-T2fwSTKEseLdY_NLr/view?usp=sharing"
                      className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-800 transition duration-300 w-full sm:w-auto"
                    >
                      Lihat Menu Prasmanan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Review />
          <CTASection
            description="Sudah ada 1000++ Snackbox dan Coffee Break Terjual Sebagai Pelengkap Hidangan Berbagai Acara. Snackbox & Coffebreak Premium MUlai dari 20Rb-an, Cocok Untuk Acara Kantor, Ulang Tahun, Wedding, Dan Lainnya."
            primaryCTA={{
              text: "Dapatkan Promo Prasmanan Sekarang!",
              href: "#pricing",
            }}
          />
          <div className="h-20 md:h-32 lg:h-40"></div>
        </div>
      </main>
    </div>
  );
}
