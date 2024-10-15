import ProductShowcase from "@/components/product-showcase";
import Minuman from "@/components/minuman";
import { Review } from "@/components/Review";
import PricingComponent from "@/components/pricingPlanPrasmanan";
import PrasmananMenu from "@/components/prasmananMenu";
import CTASection from "@/components/CTASection";

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
          <div className="md:w-1/2 text-justify">
            <CTASection
              description="Prasmanan merupakan solusi untuk elevate acara kalian agar terlihat lebih mewah dan elegan. Tidak hanya menyajikan sajian yang nikmat, Alarasa Catering juga menyediakan semua peralatan prasmanan dimulai dari meja, chaffing dish, dan peralatan makan. One stop solution untuk acara spesial kalian."
              primaryCTA={{
                text: "Pesan Paket Event Prasmanan",
                href: "#pricing",
              }}
            />
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
          description="Sudah ada 1000++ Customer Yang Mempercayakan Alarasa Sebagai Pelengkap Hidangan Berbagai Acara. Catering Nasi Box Premium Dengan Budget Minim, Cocok Untuk Acara Kantor, Ulang Tahun, Wedding, Dan Lainnya"
          primaryCTA={{
            text: "Dapatkan Promo Langganan Nasi Box Sekarang!",
            href: "#pricing",
          }}
        />
      </div>
    </main>
  );
}
