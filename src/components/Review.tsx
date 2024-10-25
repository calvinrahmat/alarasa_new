"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const customers = [
  { name: "atmajaya", logo: "/atma-jaya.png" },
  { name: "bakrie", logo: "/bakrie.png" },
  { name: "fatmawati", logo: "/fatmawati.png" },
  { name: "huawei", logo: "/huawei.png" },
  { name: "kemendikbud", logo: "/kemendikbud.png" },
  { name: "kementrian", logo: "/kementrian.png" },
  { name: "kimia-farma", logo: "/kimia-farma.png" },
  { name: "paragon", logo: "/paragon.png" },
];

export function Review() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % testimonials.length);
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-slate-100 mb-4">
          Testimoni
        </h2>
        <p className="text-center text-slate-100 mb-8">
          Sudah ada 1000++ Customer Yang Mempercayakan Alarasa Sebagai Pelengkap
          Hidangan Berbagai Acara
        </p>
        <div className="w-full max-w-md px-4">
          <div className="relative h-64 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === position
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <blockquote className="text-lg italic text-slate-100 mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <p className="font-semibold text-slate-100">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">
            Our Customers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
            {customers.map((customer) => (
              <div
                key={customer.name}
                className="flex items-center justify-center"
              >
                <Image
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  width={120}
                  height={120}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Prasmanannya enak sekali, pengiriman tepat waktu, admin fast respon semuanya kooperatif, Terimakasih alarasa. Next event pasti bakal pesen lagi di Alarasa Catering.",
    name: "Lina, Universitas Pelita Harapan",
  },
  {
    quote:
      "Rasa makanannya semua enak, bumbunya berasa, sambelnya pun pedess enak. Cuma saran aja lebih variatif lagi untuk menunya.",
    name: "Andreas, PT. Hengjaya Mineralindo",
  },
  {
    quote:
      "Pesanan diterima on time, dan rasa masakannya enak bumbunya meresap. Thanks sekali lagi untuk pelayanannya yang fast reponse dan baik. Semoga sukses usaha cateringnya.",
    name: "Nunu, PT. Asia Pasific Fibers",
  },
  {
    quote:
      "Alhamdulillah feedbacknya positif dari peserta kegiatan kami yang makan hidangan dari Alarasa. Makanannya beneran enak-enak.",
    name: "Ajeng, Universitas Bakrie",
  },
  {
    quote:
      "Terima kasih banyak Alarasa buat provide hidangan Mott Mac hari ini, kita bakal proses berlangganan terus di Alarasa karena rasanya memuaskan dan harganya yang terjangkau.",
    name: "Evelyne, Pt. Mott Mac",
  },
  {
    quote:
      "Thank you Alarasa, tadi makanannya enak enak banget, bos bos pada suka, packaging juga pro banget. Kapan kapan pasti bakal pesen lagi.",
    name: "Adira, Tunas Rental Tangerang",
  },
];
