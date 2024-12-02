"use client";

export default function Component() {
  const qualityItems = [
    {
      id: "01",
      description:
          "Memberikan pilihan yang beragam untuk melengkapi berbagai jenis kebutuhan ",
    },
    {
      id: "02",
      description: "Menyajikan produk yang lezat dan dinikmati setiap customer",
    },
    {
      id: "03",
      description:
          "Menyediakan jasa dan pelayanan terbaik dengan harga yang terjangkau",
    },
  ];

  return (
      <div className="min-h-screen flex items-center justify-center bg-[#233523] text-white px-4 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-12 tracking-wide">
            VISI DAN MISI
          </h1>
          <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
            Menjadi top of mind perusahaan catering di JABODETABEK yang
            mengutamakan standar kualitas dan pelayanan yang memuaskan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {qualityItems.map((item) => (
                <div key={item.id} className="flex items-center justify-center space-x-6">
                  <span className="text-yellow-400 font-bold text-6xl">
                    {item.id}
                  </span>
                  <p className="text-base md:text-lg leading-relaxed text-left">
                    {item.description}
                  </p>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}
