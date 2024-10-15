"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import arrow icons
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/promo1.jpeg", alt: "Order Dadakan" },
    { src: "/promo2.jpeg", alt: "Gratis Ongkir" },
    { src: "/promo3.png", alt: "Nasi Berkat" },
    { src: "/promo4.png", alt: "Catering Harian" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1C2C1C] text-white py-8 md:py-16 pt-12 md:pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 space-y-4">
            <div className="flex items-center space-x-1 mb-4 mt-12">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-6 h-6 ${index < 4 ? "text-yellow-400" : ""}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {index < 4 ? (
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  ) : (
                    <>
                      <defs>
                        <linearGradient id="halfColorGradient">
                          <stop offset="50%" stopColor="#FACC15" />
                          <stop offset="50%" stopColor="#1C2C1C" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#halfColorGradient)"
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </>
                  )}
                </svg>
              ))}
              <div className="flex items-center space-x-2 font-bold">
                <span className="underline">185+</span>
                <span>Verified Reviews</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              SOLUSI CATERINGMU!
            </h1>
            <p className="text-sm md:text-base max-w-md">
              Percayakan Alarasa Catering untuk melengkapi setiap acara special
              kalian! Enak, higienis dan terjangkau!
            </p>
            <Button
              asChild
              className="mt-4 bg-[#F5F5F5] md:text-xl hover:bg-[#E0E0E0] transition-colors duration-300 text-slate-800"
            >
              <Link
                href="https://api.whatsapp.com/send?phone=6285280730787&text=Halo%20Minrasa!%20Mau%20tanya-tanya%20tentang%20paket%20catering%20Alarasa"
                className="text-xl font-bold  rounded-full px-10 py-6 border-2 border-black"
              >
                Order Now
              </Link>
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              width={800}
              height={800}
              className="object-cover w-full h-full aspect-square max-w-full max-h-full"
            />
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
