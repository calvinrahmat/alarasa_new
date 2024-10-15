import ProductShowcase from "@/components/product-showcase";
import RiceBox from "@/components/riceBox";
import Minuman from "@/components/minuman";
import { Review } from "@/components/Review";
import PricingComponent from "@/components/pricingPlanNasiBox";

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

export default function Home() {
  return (
    <main className="mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center items-center">
            <ProductShowcase
              images={[
                "/nasi-box.jpg",
                "/nasi-box1.jpg",
                "/nasi-box2.jpg",
                "/nasi-box3.jpg",
                "/nasi-box4.jpg",
              ]}
              title="Nasi Box"
            />
          </div>
          <div className="md:w-1/2">
            <PricingComponent
              title="Nasi Box"
              subtitle="Pilih Menu Nasi Box yang kamu inginkan"
              plans={pricingPlans}
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-20">
          <RiceBox title="Menu Basic" menuItems={menuItemsBasic} />
          <RiceBox
            title="Menu Kampung Halaman"
            menuItems={menuItemsKampungHalaman}
          />
        </div>
        <Minuman />
        <Review />
      </div>
    </main>
  );
}
