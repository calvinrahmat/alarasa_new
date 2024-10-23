import ProductShowcase from "@/components/product-showcase";
import Minuman from "@/components/minuman";
import { Review } from "@/components/Review";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroRiceBox from "@/components/hero-rice-box";

export default function Home() {
  return (
    <>
      <HeroRiceBox />
      <main className="mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 flex justify-center items-center">
              <ProductShowcase
                images={[
                  "/nasi-box.jpg",
                  "/nasi-box1.jpg",
                  "/nasi-box2.jpg",
                  "/nasi-box3.jpg",
                  "/nasi-box4.jpg",
                ]}
                title="Rice Box"
              />
            </div>
            <div className="md:w-1/2">
              <div className="p-8">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">
                  Rice Box
                </h1>
                <p className="text-lg text-slate-800 mb-6 text-justify">
                  Dengan lebih dari 100 variasi lauk, Rice Box menjadi produk
                  andalan Alarasa Catering untuk melengkapi berbagai kebutuhan
                  acara seperti meeting, peresmian kantor, ulang tahun,
                  gathering dan pemberkatan. Dimulai dari harga 35,000 / box,
                  kemasan rice box juga sering dijadikan sebagai solusi untuk
                  staff catering dalam jangka panjang yang lezat dan terjangkau.
                </p>
                <div className="flex space-x-4 mb-6">
                  <div className="flex flex-row justify-center items-center space-x-4">
                    <Link
                      href="#pricing"
                      className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-800 transition duration-300 w-full sm:w-auto"
                    >
                      Lihat Menu Rice Box
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
            description="Sudah ada 1000++ Customer Yang Mempercayakan Alarasa Sebagai Pelengkap Hidangan Berbagai Acara. Catering Nasi Box Premium Dengan Budget Minim, Cocok Untuk Acara Kantor, Ulang Tahun, Wedding, Dan Lainnya."
            primaryCTA={{
              text: "Dapatkan Promo Langganan Rice Box Sekarang!",
              href: "#pricing",
            }}
          />
        </div>
      </main>
    </>
  );
}
