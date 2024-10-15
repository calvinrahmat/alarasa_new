"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Review() {
  return (
    <div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-[#EBEBE5] items-center justify-center relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-black">Testimoni</h2>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
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
    name: "Jane Austen",
  },
  {
    quote:
      "Terima kasih banyak Alarasa buat provide hidangan Mott Mac hari ini, kita bakal proses berlangganan terus di Alarasa karena rasanya memuaskan dan harganya yang terjangkau.",
    name: "Herman Melville",
  },
  {
    quote:
      "Thank you Alarasa, tadi makanannya enak enak banget, bos bos pada suka, packaging juga pro banget. Kapan kapan pasti bakal pesen lagi.",
    name: "Herman Melville",
  },
];
