import { Card, CardContent } from "@/components/ui/card";

export default function CompanyValues() {
  const values = [
    {
      number: "01",
      title: "Dapur Komersil.",
      description:
        "Kami selalu menggunakan bahan-bahan segar dan berkualitas tinggi untuk memastikan kepuasan dan kesehatan pelanggan.",
    },
    {
      number: "02",
      title: "TENAGA KERJA PROFESSIONAL.",
      description:
        "Setiap produk dari Alarasa Catering diolah dan disortir oleh tenaga kerja professional dengan latar belakang dan kualifikasi yang terpercaya, memastikan mutu dan kualitas yang terjamin.",
    },
    {
      number: "03",
      title: "LAYANAN CEPAT.",
      description:
        "Didukung dengan kapasitas dapur berstandar komersil dan tenaga kerja professional, Alarasa Catering dapat melayani same-day hingga last-minute order..",
    },
    {
      number: "04",
      title: "HARGA BERSAING.",
      description:
        "Alarasa Catering berkomitmen untuk memberikan pelayanan terbaik dengan harga yang terjangkau.",
    },
  ];

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Values</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-grow">
          {values.map((value, index) => (
            <Card key={index} className="border-t-4 border-primary">
              <CardContent className="pt-6">
                <span className="text-primary text-2xl font-semibold">
                  {value.number}
                </span>
                <h2 className="text-xl font-semibold mt-2 mb-3">
                  {value.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
