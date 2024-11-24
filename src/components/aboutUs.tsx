import Image from "next/image";
import HeroAbout from "@/components/hero-about";
import ValuesAndVision from "@/components/valuesAndVision";
import OurValues from "@/components/ourValues";

export default function AboutUs() {
  return (
    <div className="bg-[#EBEBE5]">
      {/* Hero Section */}
      <HeroAbout />

      <ValuesAndVision />

      {/* Services Section */}
      <OurValues />

      {/* Kitchen Photos Section */}
      <section className="bg-[#EBEBE5] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl text-slate-800 font-bold text-center mb-8">
            Our Kitchen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["/kitchen1.jpg", "/kitchen2.jpg", "/kitchen3.jpg"].map(
              (photo, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={photo}
                    alt={`Kitchen Photo ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              )
            )}
            <div className="overflow-hidden rounded-lg shadow-md lg:col-span-1 lg:col-start-2">
              <Image
                src="/kitchen4.jpg"
                alt="Kitchen Photo 4"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
