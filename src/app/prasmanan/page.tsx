import ProductShowcase from "@/components/product-showcase";
import Minuman from "@/components/minuman";
import { Review } from "@/components/Review";
import PricingComponent from "@/components/pricingPlanPrasmanan";
import PrasmananMenu from "@/components/prasmananMenu";
import CTASection from "@/components/CTASection";
import Link from "next/link";
const pricingPlans = [
  {
    name: "Standard A",
    price: "Rp. 75.000",
    features: [
      { name: "1 Karbo", included: true },
      { name: "2 Protein", included: true },
      { name: "1 Sup", included: true },
      { name: "2 Sayur", included: true },
      { name: "Sambal", included: true },
      { name: "Kerupuk", included: true },
      { name: "Acar", included: true },
      { name: "Buah-Buahan", included: true },
      { name: "Teh", included: true },
    ],
    cta: "Order Now",
    isBestSeller: false,
  },
  {
    name: "Standard B",
    price: "Rp. 90.000",
    features: [
      { name: "2 Karbo", included: true },
      { name: "2 Protein", included: true },
      { name: "1 Sup", included: true },
      { name: "2 Sayur", included: true },
      { name: "Sambal", included: true },
      { name: "Kerupuk", included: true },
      { name: "Acar", included: true },
      { name: "Buah-Buahan", included: true },
      { name: "Flavoured Tea", included: true },
    ],
    cta: "Order Now",
    isBestSeller: true,
  },
  // ... other plans
];

export default function Home() {
  return (
    <main className="mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex justify-center items-center">
            <ProductShowcase
              images={["/prasmanan1.jpg", "/prasmanan2.jpg", "/prasmanan3.jpg"]}
              title="Rice Box"
            />
          </div>
          <div className="md:w-1/2">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">
                Prasmanan
              </h1>
              <p className="text-lg text-slate-800 mb-6 text-justify">
                Prasmanan merupakan solusi untuk elevate acara kalian agar
                terlihat lebih mewah dan elegan. Tidak hanya menyajikan sajian
                yang nikmat, Alarasa Catering juga menyediakan semua peralatan
                prasmanan dimulai dari meja, chaffing dish, dan peralatan makan.
                One stop solution untuk acara special kalian.
              </p>
              <div className="flex space-x-4 mb-6">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <Link
                    href="#pricing"
                    className="animate-bounce inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-800 transition duration-300 w-full sm:w-auto animate-jiggle"
                  >
                    Pesan Paket Event Prasmanan
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 text-sm w-full sm:w-auto"
                  >
                    Konsultasi Berlangganan Catering
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PricingComponent
          title="Pilih Paket Prasmanan yang kamu inginkan"
          plans={pricingPlans}
        />
        <div className="max-w-4xl mx-auto">
          <PrasmananMenu />
        </div>

        <Minuman />
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
  );
}
