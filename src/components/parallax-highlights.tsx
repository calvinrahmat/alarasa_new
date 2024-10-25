"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const highlights = [
  { number: "1000+", description: "Satisfied Customers" },
  { number: "50+", description: "Menu Variations" },
  { number: "5+", description: "Years of Experience" },
  { number: "4.5", description: "Star Rating" },
];

export default function ParallaxHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/kitchen1.jpg')",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* New title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-wide">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center"
              style={{
                transform: isInView ? "none" : "translateY(30px)",
                opacity: isInView ? 1 : 0,
                transition: `all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                  index * 0.2
                }s`,
              }}
            >
              <p className="text-5xl md:text-6xl font-bold text-white mb-3">
                {highlight.number}
              </p>
              <p className="text-xl md:text-2xl text-gray-300">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
