import { Review } from "@/components/Review";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroRiceBox from "@/components/hero-rice-box";
import ImageSlider from "@/components/image-slider";
export default function Home() {
  return (
    <>
      <HeroRiceBox />
      <main className="bg-gradient-to-b from-[#141e14] to-[#1C2C1C] text-slate-100 py-10">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <div className="w-full md:w-1/2 px-4 md:px-0 flex items-center justify-center">
              <ImageSlider
                images={[
                  "/NASI-AYAM-WOKU.jpg",
                  "/NASI-BERKAT.jpg",
                  "/NASI-SAIKORO.jpg",
                  "/NASI-JINGGO-BALI.jpeg",
                  "/NASI-KUNING-CIREBON.jpeg",
                  "/NASI-PADANG.jpg",
                  "/NASI-ALARASA.jpg",
                  "/NASI-AYAM-MENTEGA.jpg",
                  "/NASI-OPOR.jpg",
                ]}
              />
            </div>
            <div className="md:w-1/2 mb-10 flex items-center justify-center">
              <div className="p-8 max-w-xl">
                <h1 className="text-4xl font-bold text-slate-100 mb-4 text-left">
                  Nasi Box
                </h1>
                <p className="text-lg text-slate-100 mb-6 text-left">
                  Dengan lebih dari 100 variasi lauk, Nasi Box menjadi produk
                  andalan Alarasa Catering untuk melengkapi berbagai kebutuhan
                  acara seperti meeting, peresmian kantor, ulang tahun,
                  gathering dan pemberkatan. Dimulai dari harga 35,000 / box,
                  kemasan Nasi Box juga sering dijadikan sebagai solusi untuk
                  staff catering dalam jangka panjang yang lezat dan terjangkau.
                </p>
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="flex flex-row justify-center items-center space-x-4">
                    <Link
                      href="https://drive.google.com/file/d/183B2pQSgkSnIFSYuWB04tGfYGuZGrbiU/view?usp=drive_link"
                      className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-800 transition duration-300 w-full sm:w-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIHAT MENU NASI BOX
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10" />
        <Review />
        <CTASection
          description="Sudah ada 1000++ Customer Yang Mempercayakan Alarasa Sebagai Pelengkap Hidangan Berbagai Acara. Catering Nasi Box Premium Dengan Budget Minim, Cocok Untuk Acara Kantor, Ulang Tahun, Wedding, Dan Lainnya."
          primaryCTA={{
            text: "Dapatkan Promo Langganan Nasi Box Sekarang!",
            href: `https://wa.me/6285280730787?text=${encodeURIComponent("Halo Minrasa! Mau tanya-tanya tentang Paket Catering Nasi Box Alarasa")}`,
            target: "_blank",
            rel: "noopener noreferrer",
            gtmValue: "PESAN CATERING NASI BOX",
          }}
        />
      </main>
    </>
  );
}
