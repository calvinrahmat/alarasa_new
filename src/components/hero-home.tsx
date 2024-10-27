"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-image.jpeg')",
          backgroundSize: "451px 720px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-[#141e14]/80 z-10" />

      {/* Content */}
      <div className="relative z-20 text-left px-4 sm:px-6 lg:px-8 max-w-xl ml-8 sm:ml-16 md:ml-24">
        <div className="flex flex-col mb-6">
          <div className="flex items-center mb-2">
            <div className="flex">
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
            </div>
            <p className="text-sm font-medium text-white ml-2">4.5/5</p>
          </div>
          <div className="flex items-center text-white text-sm">
            <span className="font-bold underline">185+</span>
            <span className="ml-2">Pembeli merasa puas</span>
          </div>
        </div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="font-sans md:font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-300 dark:text-white max-w-4xl leading-tight sm:leading-snug lg:leading-snug mb-6"
        >
          <span
            className={`relative text-yellow-300 inline-block transition-all duration-1000 ${
              isAnimated
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            SOLUSI CATERINGMU!
          </span>
        </motion.h1>

        <p
          className={`text-xl sm:text-2xl text-white transition-all duration-1000 delay-300 ${
            isAnimated
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0"
          }`}
        >
          Percayakan Alarasa Catering untuk melengkapi setiap acara special
          kalian! Enak, higienis dan terjangkau!
        </p>
      </div>

      {/* Attribution for screen readers */}
      <div className="sr-only">
        Background image: Our product in use in a modern office setting
      </div>
    </div>
  );
}
