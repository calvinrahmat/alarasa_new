import { Review } from "@/components/Review";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroSnack from "@/components/hero-snack";
import ImageSlider from "@/components/image-slider";

export default function Home() {
  return (
    <>
      <HeroSnack />
      <main className="bg-gradient-to-b from-[#141e14] to-[#1C2C1C] text-slate-100 py-10">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-center min-h-dvh">
            <div className="w-full md:w-1/2 px-4 md:px-0 min-h-[50vh] md:min-h-[75vh]">
              <ImageSlider images={["/snack1.jpg", "/snack2.jpg"]} />
            </div>
            <div className="md:w-1/2 mb-10">
              <div className="p-8">
                <h1 className="text-4xl font-bold mb-4">
                  Snack Box & Coffee Break
                </h1>
                <p className="text-lg mb-6 text-left">
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
                      className=" inline-block bg-green-600  text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-800 transition duration-300 w-full sm:w-auto"
                    >
                      Lihat Menu Snack Box & Coffee Break
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
              text: "Dapatkan Promo Snack Box & Coffee Break Sekarang!",
              href: `https://wa.me/6285280730787?text=${encodeURIComponent("Halo Minrasa! Mau tanya-tanya tentang paket catering Alarasa")}`,
            }}
          />
        </div>
      </main>
    </>
  );
}
