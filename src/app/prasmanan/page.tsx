import { Review } from "@/components/Review";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import HeroPrasmanan from "@/components/hero-prasmanan";
import ImageSlider from "@/components/image-slider";

export default function PrasmananPage() {
  return (
    <>
      <HeroPrasmanan />
      <main className="bg-gradient-to-b from-[#141e14] to-[#1C2C1C] text-slate-100 py-10">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <div className="w-full md:w-1/2 px-4 md:px-0 flex items-center justify-center">
              <ImageSlider
                images={[
                  "/prasmanan4.jpg",
                  "/prasmanan-1.jpg",
                  "/prasmanan-2.jpg",
                  "/prasmanan-capcay.jpg",
                  "/prasmanan-daging.jpg",
                  "/prasmanan-telor.jpg",
                  "/prasmanan3.jpg",
                  "/prasmanan5.PNG",
                  "/prasmanan2.jpg",
                ]}
              />
            </div>
            <div className="md:w-1/2 mb-10 flex items-center justify-center">
              <div className="p-8 max-w-xl">
                <h1 className="text-4xl font-bold text-slate-100 mb-4 text-left">
                  Prasmanan
                </h1>
                <p className="text-lg text-slate-100 mb-6 text-left">
                  Prasmanan merupakan solusi untuk elevate acara kalian agar
                  terlihat lebih mewah dan elegan. Tidak hanya menyajikan sajian
                  yang nikmat, Alarasa Catering juga menyediakan semua peralatan
                  prasmanan dimulai dari meja, chaffing dish, dan peralatan
                  makan. One stop solution untuk acara special kalian.
                </p>
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="flex flex-row justify-center items-center space-x-4">
                    <Link
                      href="https://drive.google.com/file/d/1PHHj1eeNMt6pBvoEsR0GcHUt0VawW2FS/view?usp=drive_link"
                      className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-800 transition duration-300 w-full sm:w-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lihat Menu Prasmanan
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
          description="Sudah ada 1000++ Snackbox dan Coffee Break Terjual Sebagai Pelengkap Hidangan Berbagai Acara. Snackbox & Coffebreak Premium MUlai dari 20Rb-an, Cocok Untuk Acara Kantor, Ulang Tahun, Wedding, Dan Lainnya."
          primaryCTA={{
            text: "Dapatkan Promo Prasmanan Sekarang!",
            href: `https://wa.me/6285280730787?text=${encodeURIComponent("Halo Minrasa! Mau tanya-tanya tentang paket Catering Prasmanan Alarasa")}`,
            target: "_blank",
            rel: "noopener noreferrer",
            gtmValue: "PESAN CATERING PRASMANAN",
          }}
        />
      </main>
    </>
  );
}
