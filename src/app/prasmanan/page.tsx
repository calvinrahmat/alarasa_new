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
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-center min-h-dvh">
            <div className="w-full md:w-1/2 px-4 md:px-0 min-h-[50vh] md:min-h-[75vh]">
              <ImageSlider images={["/prasmanan2.jpg", "/prasmanan3.jpg"]} />
            </div>
            <div className="md:w-1/2 pe-5 mb-10">
              <div className="p-8">
                <h1 className="text-4xl font-bold mb-4">Prasmanan</h1>
                <p className="text-lg mb-6 text-left">
                  Prasmanan merupakan solusi untuk elevate acara kalian agar
                  terlihat lebih mewah dan elegan. Tidak hanya menyajikan sajian
                  yang nikmat, Alarasa Catering juga menyediakan semua peralatan
                  prasmanan dimulai dari meja, chaffing dish, dan peralatan
                  makan. One stop solution untuk acara special kalian.
                </p>
                <div className="flex space-x-4 mb-6">
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

          <Review />
          <CTASection
            description="Sudah ada 1000++ Snackbox dan Coffee Break Terjual Sebagai Pelengkap Hidangan Berbagai Acara. Snackbox & Coffebreak Premium MUlai dari 20Rb-an, Cocok Untuk Acara Kantor, Ulang Tahun, Wedding, Dan Lainnya."
            primaryCTA={{
              text: "Dapatkan Promo Prasmanan Sekarang!",
              href: `https://wa.me/6285280730787?text=${encodeURIComponent("Halo Minrasa! Mau tanya-tanya tentang paket catering Alarasa")}`,
            }}
          />
        </div>
      </main>
    </>
  );
}
