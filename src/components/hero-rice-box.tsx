"use client";

import Image from "next/image";
import Link from "next/link";
import OrderButton from "./OrderButton";

export default function Hero() {
  return (
    <div className="relative bg-[#657A4E] text-white">
      {/* Navigation bar placeholder - you may want to use your actual Navbar component here */}
      <div className="absolute top-0 left-0 right-0 z-30">
        {/* Your navigation component */}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 min-h-screen flex items-center">
        <div className="relative grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content column - Left */}
          <div className="order-2 md:order-1 space-y-8">
            <h1 className="font-['Loubag_Semi_Bold'] text-4xl md:text-4xl lg:text-6xl text-[#E5DFCC]">
              Nasi Box Alarasa Mulai dari
              Rp 38.000,-
            </h1>

            {/* Features list */}
            <div className="bg-[#E5DFCC] rounded-2xl p-6 space-y-3" style={{ color: "#223324" }}>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg">Pengiriman JADETABEK</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg">Tersertifikasi HALAL</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg">Bisa dipesan H-1 sebelum acara</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg">Terima catering harian</p>
              </div>
            </div>

            <p className="text-xl md:text-2xl font-['Sweet Sans Pro Heavy']">
              Nikmati kelezatan cita rasa nusantara pada catering nasi box Alarasa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col  sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link
                href="https://drive.google.com/file/d/1NVsJzx-zXkUMwa-nZwPg6K0rpnAf8fjC/view?usp=drivesdk"
                className="inline-block bg-[#E5DFCC] text-green-900 font-semibold py-3 px-6 rounded-full hover:bg-green-800 hover:text-white transition duration-300 w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                LIHAT MENU 
              </Link>
              <OrderButton
                value="PESAN CATERING NASI BOX"
                whatsappText="Halo Minrasa! Mau tanya-tanya tentang Paket Catering Nasi Box Alarasa"
                phoneNumber="6285280730787"
              >
                PESAN SEKARANG
              </OrderButton>
            </div>
          </div>

          {/* Image column - Right */}
          <div className="relative order-1 md:order-2 space-y-6 flex justify-center items-center">
            <div className="relative w-full max-w-[300px] md:max-w-[600px] aspect-square">
              <Image
                src="/berkat-01.png"
                alt="Nasi Box"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>
            {/* Bottom right text - Mobile */}
            <div className="md:hidden absolute bottom-0 right-0 text-right">
              <h2 className="font-['Loubag_Semi_Bold'] text-lg text-[#E5DFCC]">
                NASI BOX BERKAT
              </h2>
              <p className="font-['Sweet Sans Pro Heavy'] text-sm text-[#E5DFCC]">
                Siap H-5 Jam Sebelum Acara
              </p>
            </div>
          </div>

          {/* Bottom right text - Desktop */}
          <div className="hidden md:block absolute bottom-0 right-0 text-right">
            <h2 className="font-['Loubag_Semi_Bold'] text-2xl md:text-3xl text-[#E5DFCC]">
              NASI BOX BERKAT
            </h2>
            <p className="font-['Sweet Sans Pro Heavy'] text-lg md:text-xl text-[#E5DFCC]">
              Siap H-5 Jam Sebelum Acara
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
