import Image from "next/image";

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

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="relative w-full h-[600px] overflow-hidden">
          <Image
            src="/about-us.jpg"
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center z-20 p-8">
            <div className="bg-white p-8 max-w-md">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                VISI KAMI
              </h2>
              <p className="text-gray-700">
                Menjadi top of mind perusahaan catering di JABODETABEK yang
                mengutamakan standar kualitas dan pelayanan yang memuaskan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#EBEBE5] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="text-center">
              <Image
                src={`/placeholder.svg?height=300&width=300&text=Team Member ${member}`}
                alt={`Team Member ${member}`}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">Position</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl italic mb-6">
              &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.&rdquo;
            </p>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Client"
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div className="text-left">
                <h4 className="font-semibold">Jane Smith</h4>
                <p className="text-gray-600">CEO, Company Name</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
    </div>
  );
}
