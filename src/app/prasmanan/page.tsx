import ProductShowcase from "@/components/product-showcase";
import { Review } from "@/components/Review";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import HeroPrasmanan from "@/components/hero-prasmanan";

export default function PrasmananPage() {
  return (
    <div className="bg-[#042824] min-h-screen text-slate-100">
      <HeroPrasmanan />
      <main className="mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 flex justify-center items-center">
              <ProductShowcase
                images={[
                  "/prasmanan1.jpg",
                  "/prasmanan2.jpg",
                  "/prasmanan3.jpg",
                ]}
                title="Rice Box"
              />
            </div>
            <div className="md:w-1/2">
              <div className="p-8">
                <h1 className="text-4xl font-bold mb-4">Prasmanan</h1>
                <p className="text-lg mb-6 text-justify">
                  Prasmanan merupakan solusi untuk elevate acara kalian agar
                  terlihat lebih mewah dan elegan. Tidak hanya menyajikan sajian
                  yang nikmat, Alarasa Catering juga menyediakan semua peralatan
                  prasmanan dimulai dari meja, chaffing dish, dan peralatan
                  makan. One stop solution untuk acara special kalian.
                </p>
                <div className="flex space-x-4 mb-6">
                  <div className="flex flex-row justify-center items-center space-x-4">
                    <Link
                      href="#pricing"
                      className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-800 transition duration-300 w-full sm:w-auto"
                    >
                      Lihat Menu Prasmanan
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 text-sm w-full sm:w-auto animate-bounce"
                    >
                      Konsultasi Berlangganan Catering
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
        </div>
      </main>
    </div>
  );
}
