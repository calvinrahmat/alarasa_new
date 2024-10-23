import Image from "next/image";
import HeroAbout from "@/components/hero-about";
import ValuesAndVision from "@/components/valuesAndVision";

const services = [
  {
    title: "Dapur Komersil",
    description:
      "Untuk memastikan standar dan kualitas pelayanan yang terbaik, Alarasa Catering telah berinvestasi pada equipment dan peralatan dapur dengan skala komersil standar industri. Tentunya, mengutamakan kualitas dan higienitas setiap produk Alarasa Catering.",
  },
  {
    title: "Tenaga Kerja Professional",
    description:
      "Setiap produk dari Alarasa Catering diolah dan disortir oleh tenaga kerja professional dengan latar belakang yang terpecaya, memastikan mutu dan kualitas yang terjamin.",
  },
  {
    title: "Layanan Cepat",
    description:
      "Didukung dengan kapasitas dapur berstandar komersil dan tenaga kerja professional, Alarasa Catering dapat melayani last minute dan same-day order .",
  },
  {
    title: "Harga Bersaing",
    description:
      "Dari setiap keunggulan Alarasa Catering, harga produk yang ditawarkan masih sangat terjangkau yaitu dimulai dari 35,000 per porsinya.",
  },
];

const teamMembers = [
  {
    name: "Vincent Goenawan",
    position: "Founder & CEO",
    image: "/avatar.jpg",
  },
  {
    name: "Zephaniah Hidajat",
    position: "Head Chef",
    image: "/avatar.jpg",
  },
  {
    name: "Gita Febryanti",
    position: "Customer Service",
    image: "/avatar.jpg",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroAbout />

      <ValuesAndVision />

      {/* Services Section */}
      <section className="bg-[#EBEBE5] py-16 mt-10 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-800 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center">
        <h2 className="text-4xl text-slate-800 font-bold text-center mb-12">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center text-slate-800 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <Image
                src={member.image}
                alt={`Team Member ${member.name}`}
                width={400}
                height={400}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-slate-800">{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kitchen Photos Section */}
      <section className="bg-[#EBEBE5] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl text-slate-800 font-bold text-center mb-8">
            Our Kitchen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "/kitchen1.jpg",
              "/kitchen2.jpg",
              "/kitchen3.jpg",
              "/kitchen4.jpg",
            ].map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src={photo}
                  alt={`Kitchen Photo ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
