import ProductShowcase from "@/components/product-showcase";
import RiceBox from "@/components/riceBox";
import Minuman from "@/components/minuman";
import { Review } from "@/components/Review";
export default function Home() {
  return (
    <main className="mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center items-center">
            <ProductShowcase />
          </div>
          <div className="md:w-1/2">
            <RiceBox />
          </div>
        </div>
        <Minuman />
        <Review />
      </div>
    </main>
  );
}
