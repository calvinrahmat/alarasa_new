import ProductShowcase from "@/components/product-showcase";
import Minuman from "@/components/minuman";
import { Review } from "@/components/Review";
import PricingComponent from "@/components/pricingPlanNasiBox";
import SnackMenu from "@/components/snackMenu";

const pricingPlans = [
  {
    name: "Paket Snack Box 1",
    price: "Rp. 20.000",
    features: [
      { name: "Pilih 2 Snack ", included: true },
      { name: "Air Mineral", included: true },
    ],
    cta: "Order Now",
    isBestSeller: false,
  },
  {
    name: "Paket Snack Box 2",
    price: "Rp. 28.000",
    features: [
      { name: "Pilih 3 Snack ", included: true },
      { name: "Air Mineral", included: true },
    ],
    cta: "Order Now",
    isBestSeller: true,
  },
  {
    name: "Paket Coffee Break 1",
    price: "Rp. 35.000",
    features: [
      { name: "Pilih 2 Snack ", included: true },
      { name: "Kopi", included: true },
      { name: "Teh", included: true },
    ],
    cta: "Order Now",
    isBestSeller: false,
  },
  {
    name: "Paket Coffee Break 2",
    price: "Rp. 40.000",
    features: [
      { name: "Pilih 3 Snack ", included: true },
      { name: "Kopi", included: true },
      { name: "Teh", included: true },
    ],
    cta: "Order Now",
    isBestSeller: true,
  },
  // ... other plans
];

const menuItemsRoti = [
  {
    name: "Aneka Roti",
    items: [
      { name: "Roti Srikaya", price: "Rp 9.000" },
      { name: "Roti Kelapa", price: "Rp 9.000" },
      { name: "Roti Nanas", price: "Rp 9.000" },
      { name: "Roti Pisang Coklat", price: "Rp 9.000" },
      { name: "Roti Pisang Keju", price: "Rp 9.000" },
      { name: "Roti Boy Ori", price: "Rp 11.000" },
      { name: "Roti Boy Coklat", price: "Rp 11.000" },
      { name: "Roti Cokelat Kacang", price: "Rp 9.000" },
      { name: "Roti Moka", price: "Rp 9.000" },
      { name: "Roti Ayam/Tuna", price: "Rp 13.000" },
      { name: "Roti Cokelat", price: "Rp 9.000" },
      { name: "Roti CokJu", price: "Rp 9.000" },
      { name: "Roti Goreng", price: "Rp 10.000" },
    ],
  },
  {
    name: "Kue Basah",
    items: [
      { name: "Moho Labu", price: "Rp 8.000" },
      { name: "Moho Ubi", price: "Rp 8.000" },
      { name: "Onde-onde", price: "Rp 8.000" },
      { name: "Kue Mangkok Coklat", price: "Rp 6.000" },
      { name: "Wajik", price: "Rp 8.000" },
      { name: "Kue Talam", price: "Rp 6.000" },
      { name: "Bugis Mandi", price: "Rp 6.000" },
      { name: "Angku", price: "Rp 8.000" },
      { name: "Bolu Kukus", price: "Rp 7.000" },
      { name: "Kue Soes", price: "Rp 10.000" },
      { name: "Pisang Daun", price: "Rp 8.000" },
      { name: "Dadar Gulung", price: "Rp 12.000" },
      { name: "Putu Ayu", price: "Rp 5.000" },
    ],
  },
  {
    name: "Pia & Pao",
    items: [
      { name: "Pia Kacang Ijo", price: "Rp 8.000" },
      { name: "Pao Kacang Ijo", price: "Rp 8.000" },
      { name: "Pao Kacang Tanah", price: "Rp 8.000" },
      { name: "Pao Cokelat", price: "Rp 8.000" },
      { name: "Pao Srikaya", price: "Rp 8.000" },
      { name: "Pao Ayam", price: "Rp 10.000" },
    ],
  },
  {
    name: "Gorengan",
    items: [
      { name: "Lontong", price: "Rp 8.000" },
      { name: "Lemper", price: "Rp 8.000" },
      { name: "Martabak Telor", price: "Rp 8.000" },
      { name: "Risol", price: "Rp 8.000" },
      { name: "Lumpia", price: "Rp 8.000" },
      { name: "Pastel", price: "Rp 10.000" },
      { name: "Risol Mayo", price: "Rp 12.000" },
      { name: "Kroket Kentang", price: "Rp 12.000" },
    ],
  },
];

export default function Home() {
  return (
    <main className="mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center justify-center">
          <div className="xl:w-1/2 w-screen px-2 flex justify-center items-center">
            <ProductShowcase
              images={["/snack1.jpg", "/snack2.jpg"]}
              title="Snack Box / Coffee Break"
            />
          </div>
          <div className="xl:w-1/2">
            <PricingComponent
              title="Snack Box & Coffee Break"
              subtitle="Pilih Paket Snack Box & Coffee Break yang kamu inginkan"
              plans={pricingPlans}
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <SnackMenu title="Menu Coffee Break" menuItems={menuItemsRoti} />
        </div>
        <Minuman />
        <Review />
      </div>
    </main>
  );
}
