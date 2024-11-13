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
    <div className="container mx-auto px-4 py-8 text-slate-800 min-h-[100vh]">
      <h1 className="text-5xl font-bold mb-8 border-t pt-4 text-center">VISI DAN MISI</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <p className="mb-8 text-lg text-center">
            Menjadi top of mind perusahaan catering di JABODETABEK yang
            mengutamakan standar kualitas dan pelayanan yang memuaskan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {qualityItems.map((item) => (
              <div key={item.id} className="flex">
                <span className="text-orange-500 font-bold mr-4">
                  {item.id}/
                </span>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
