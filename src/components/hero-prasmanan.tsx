import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-black  text-white py-16 px-4 md:px-8 lg:px-16 min-h-[80vh] flex items-center">
      {/* Background image */}
      <Image
        src="/kitchen2.jpg"
        alt="Kitchen background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-[#141e14]/80 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-8xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 flex justify-center items-center">
          <div className="relative w-full max-w-[300px] md:max-w-[600px] aspect-square">
            <Image
              src="/rice-box.png"
              alt="Rice Box"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              priority
            />
          </div>
        </div>

        <div>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-4xl  font-bold text-yellow-300 max-w-4xl leading-tight sm:leading-snug lg:leading-snug">
            SOLUSI CATERING PRASMANAN-MU!
          </h1>
          <p className="font-sans text-base md:text-xl xl:text-2xl text-white font-bold mb-6">
            PRASMANAN EXCLUSIVE MULAI DARI 35 RB
            <br />
            TERIMA PENGIRIMAN JADETABEK
            <br />
            DIMASAK OLEH KOKI PROFESIONAL & DAPUR HIGIENIS
          </p>
          <p className="text-lg mb-4">
            Terima catering setiap hari dengan minimal order 30 box dan H-1
            sebelum acara, kamu dapat menikmati kelezatan cita rasa nusantara
            pada catering PRASMANAN alarasa.
          </p>

          <div className="w-full h-1 bg-white mb-4"></div>
          <p className="font-bold mb-4">
            <span className="text-yellow-300 text-xl">
              CATERING PRASMANAN ALARASA
            </span>
            <br />
            Pesan sekarang PRASMANAN alarasa dan dapatkan beragam promo lainnya.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
            <Link
              href="#pricing"
              className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-800 transition duration-300 w-full text-center"
            >
              LIHAT MENU PRASMANAN
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-yellow-500 font-bold text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300  w-full text-center animate-bounce"
            >
              PESAN CATERING PRASMANAN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
