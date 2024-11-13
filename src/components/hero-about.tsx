"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/kitchen1.jpg"
          alt="About Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-[#141e14]/80 z-10" />

      {/* Content */}
      <div className="relative z-20 text-left px-4 sm:px-6 lg:px-8 max-w-5xl ml-8 sm:ml-16 md:ml-24 pb-20">
        <h1 className="font-sans md:font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-300 tracking-tight mb-6">
          ALARASA CATERING
        </h1>
        <p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed font-medium text-justify pe-10">
          Alarasa Catering merupakan perusahaan catering yang berkomitmen untuk
          menyajikan aneka lauk selera nusantara yang dikemas dalam berbagai
          macam kemasan untuk memenuhi kebutuhan setiap acara. <br /> <br /> Dengan
          pengalaman dan dedikasi dalam bidang kuliner, Alarasa Catering
          menyajikan produk dengan mengutamakan mutu dan kualitas yang didukung
          oleh tenaga kerja professional dan peralatan dapur berstandar komersil
          skala industri.
        </p>
      </div>
    </div>
  );
}
