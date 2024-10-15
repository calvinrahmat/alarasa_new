import { Check } from "lucide-react";

export default function ProductCard() {
  return (
    <div className="bg-[#F5F5F5] p-8 flex flex-col md:flex-row items-center ">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-black">
          Add On <span className="text-[#8B4513]">Drink</span>
        </h2>
        <p className="text-xl font-semibold text-black">Rp 5.000</p>
        <p className="text-gray-700">
          Nikmati kesegaran yang menyegarkan dengan pilihan minuman kami yang
          beragam. Sempurna untuk menemani hidangan utama.
        </p>
        <div className="grid grid-cols-2 gap-4 text-black font-handwriting">
          {[
            "TEH JASMINE",
            "TEH JASMINE SEREH",
            "TEH LEMON",
            "TEH VANILLA PANDAN",
            "TEH FLORAL",
          ].map((feature) => (
            <div key={feature} className="flex items-center space-x-2">
              <Check className="text-yellow-500" />
              <span className="text-sm font-semibold">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 relative">
        <img src="/minuman.png" alt="Minuman" />
      </div>
    </div>
  );
}
