import Image from "next/image";

export default function Component() {
  return (
    <div className="bg-gradient-to-b from-[#141e14] to-[#1C2C1C] text-slate-100 min-h-screen p-8 ">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square md:aspect-[4/3]">
            <Image
              src="/kitchen2.jpg"
              alt="kitchen"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">DAPUR KOMERSIL</h2>
            <p className="text-gray-400">
              Kami selalu menggunakan bahan-bahan segar dan berkualitas tinggi
              untuk memastikan kepuasan dan kesehatan pelanggan.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-2xl font-bold">TENAGA KERJA PROFESSIONAL</h2>
            <p className="text-gray-400">
              Setiap produk dari Alarasa Catering diolah dan disortir oleh
              tenaga kerja professional dengan latar belakang dan kualifikasi
              yang terpercaya, memastikan mutu dan kualitas yang terjamin
            </p>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] order-1 md:order-2">
            <Image
              src="/kitchen3.jpg"
              alt="kitchen"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Third Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square md:aspect-[4/3]">
            <Image
              src="/our-values.png"
              alt="Spacecraft in assembly"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Layanan Cepat</h2>
            <p className="text-gray-400">
              Didukung dengan kapasitas dapur berstandar komersil dan tenaga
              kerja professional, Alarasa Catering dapat melayani last minute
              dan same-day order dengan kualitas yang terjamin.
            </p>
          </div>
        </div>

        {/* Forth Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-top">
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-2xl font-bold">Harga Bersaing</h2>
            <p className="text-gray-400">
              Dari setiap keunggulan Alarasa Catering, harga produk yang
              ditawarkan masih sangat terjangkau yaitu dimulai dari 35,000 per
              porsinya
            </p>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] order-1 md:order-2">
            <Image
              src="/menu-basic.png"
              alt="Silhouette overlooking launch facility"
              layout="fill"
              objectFit="object-scale-down h-48 w-48"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
