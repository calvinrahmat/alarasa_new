import ProductShowcase from "@/components/product-showcase";
import RiceBox from "@/components/riceBox";
import Minuman from "@/components/minuman";
import { Review } from "@/components/Review";
import PricingComponent from "@/components/pricingPlanNasiBox";
import Link from "next/link";
import CTASection from "@/components/CTASection";

const pricingPlans = [
  {
    name: "Basic",
    price: "Rp. 35.000",
    features: [
      { name: "Nasi Berkat", included: true },
      { name: "Nasi Bedhaya", included: true },
      { name: "Nasi Ayam Woku", included: true },
      { name: "Nasi Parahyangan", included: true },
      { name: "Nasi Bakso", included: true },
      { name: "Nasi Saikoro", included: true },
    ],
    cta: "Order Now",
    isBestSeller: false,
  },
  {
    name: "Kampung Halaman",
    price: "Rp. 45.000",
    features: [
      { name: "Nasi Uduk Jakarta", included: true },
      { name: "Nasi Kuning Cirebon", included: true },
      { name: "Nasi Liwet Solo", included: true },
      { name: "Nasi Bogana Tegal", included: true },
      { name: "Nasi Padang", included: true },
      { name: "Nasi Jinggo Bali", included: true },
    ],
    cta: "Order Now",
    isBestSeller: false,
  },
  {
    name: "Premium",
    price: "Rp. 55.000",
    features: [
      { name: "Nasi Alarasa", included: true },
      { name: "Nasi Oper", included: true },
      { name: "Nasi Ayam Mentega", included: true },
      { name: "Nasi Daun Jeruk", included: true },
      { name: "Nasi Bistik", included: true },
      { name: "Nasi Dendeng", included: true },
    ],
    cta: "Order Now",
    isBestSeller: true,
  },
  // ... other plans
];

const menuItemsBasic = [
  {
    name: "Nasi Berkat",
    items: [
      "Nasi Gurih",
      "Ayam Suwir Kecap",
      "Telor Balado",
      "Tumis Kangkung Terasi",
      "Bihun Goreng",
      "Sambel Bawang",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Bedhaya",
    items: [
      "Nasi Gurih",
      "Ayam Suwir Kecap",
      "Telor Balado",
      "Tumis Kangkung Terasi",
      "Bihun Goreng",
      "Sambel Bawang",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Ayam Woku",
    items: [
      "Nasi Gurih",
      "Ayam Suwir Kecap",
      "Telor Balado",
      "Tumis Kangkung Terasi",
      "Bihun Goreng",
      "Sambel Bawang",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Parahyangan",
    items: [
      "Nasi Gurih",
      "Ayam Suwir Kecap",
      "Telor Balado",
      "Tumis Kangkung Terasi",
      "Bihun Goreng",
      "Sambel Bawang",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Bakso",
    items: [
      "Nasi Gurih",
      "Ayam Suwir Kecap",
      "Telor Balado",
      "Tumis Kangkung Terasi",
      "Bihun Goreng",
      "Sambel Bawang",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Saikoro",
    items: [
      "Nasi Gurih",
      "Ayam Suwir Kecap",
      "Telor Balado",
      "Tumis Kangkung Terasi",
      "Bihun Goreng",
      "Sambel Bawang",
      "Kerupuk",
      "Lalapan",
    ],
  },
  // ... other menu items
];

const menuItemsKampungHalaman = [
  {
    name: "Nasi Uduk Jakarta",
    items: [
      "Nasi Uduk",
      "Ayam Goreng Lengkuas",
      "Telor Balado",
      "Kering Tempe",
      "Bihun Goreng",
      "Sambel Terasi",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Kuning Cirebon",
    items: [
      "Nasi Kuning",
      "Ayam Goreng Lengkuas",
      "Telor Balado",
      "Tempe Oreg",
      "Kentang Balado",
      "Sambel Terasi",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Liwet Solo",
    items: [
      "Nasi Gurih",
      "Sotong Hitam",
      "Telor Balado",
      "Tahu Tempe Goreng",
      "Kangkung Terasi",
      "Sambel Terasi",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Bogana Tegal",
    items: [
      "Nasi Putih",
      "Ayam Opor",
      "Telor Balado",
      "Tempe Oreg",
      "Tumis Kacang Panjang",
      "Sambel Terasi",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Padang",
    items: [
      "Nasi Putih",
      "Ayam Gulai",
      "Telor Dadar",
      "Daun Singkong",
      "Kentang Balado",
      "Sambel Cabe Hijau",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Jinggo Bali",
    items: [
      "Nasi Putih",
      "Ayam Sisit Bumbu Bali",
      "Telor Balado",
      "Sate Lilit",
      "Mie Goreng",
      "Sambel Matah",
      "Kerupuk",
      "Lalapan",
    ],
  },
  // ... other menu items
];

const menuItemsPremium = [
  {
    name: "Nasi Alarasa",
    items: [
      "Nasi Berkat",
      "Ayam Suwir Kecap",
      "Telor Balado",
      "Tumis Kangkung Terasi",
      "Bihun Goreng",
      "Sambel Bawang",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Opor",
    items: [
      "Nasi Gurih",
      "Ayam Suwir Opor",
      "Dendeng Balado",
      "Tempe Oreg",
      "Bihun Goreng",
      "Sambel Alarasa",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Ayam Mentega",
    items: [
      "Nasi Putih",
      "Ayam Ayam Mentega",
      "Sapi Lada Hitam",
      "Capcay",
      "Mie Goreng",
      "Sambel Bawang",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Daun Jeruk",
    items: [
      "Nasi Daun Jeruk",
      "Ayam Cabe Ijo",
      "Tumis Bakso Daging",
      "Telur Dadar",
      "Kering Tempe",
      "Sambal Bawang",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Bistik",
    items: [
      "Nasi Gurih",
      "Ayam Suwir Keacap",
      "Bistik Daging",
      "Tumis Kacang Panjang",
      "Capcay",
      "Sambel Bawang",
      "Kerupuk",
      "Lalapan",
    ],
  },
  {
    name: "Nasi Dendeng",
    items: [
      "Nasi Gurih",
      "Ayam Bumbu Seblak",
      "Dendeng Cabe Ijo",
      "Kangkung Terasi",
      "Bihun Goreng",
      "Sambel Alarasa",
      "Kerupuk",
      "Lalapan",
    ],
  },

  // ... other menu items
];

export default function Home() {
  return (
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
                acara seperti meeting, peresmian kantor, ulang tahun, gathering
                dan pemberkatan. Dimulai dari harga 35,000 / box, kemasan rice
                box juga sering dijadikan sebagai solusi untuk staff catering
                dalam jangka panjang yang lezat dan terjangkau.
              </p>
              <div className="flex space-x-4 mb-6">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <Link
                    href="#pricing"
                    className="animate-bounce inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-800 transition duration-300 w-full sm:w-auto animate-jiggle"
                  >
                    Pesan Paket Rice Box
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
        <div>
          <PricingComponent
            title="Rice Box"
            subtitle="Pilih Menu Rice Box yang kamu inginkan"
            plans={pricingPlans}
          />
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-20">
          <RiceBox title="Menu Basic" menuItems={menuItemsBasic} />
          <RiceBox
            title="Menu Kampung Halaman"
            menuItems={menuItemsKampungHalaman}
          />
        </div>
        <div className="max-w-6xl mx-auto mt-8 md:mt-12">
          <RiceBox title="Menu Premium" menuItems={menuItemsPremium} />
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
  );
}
