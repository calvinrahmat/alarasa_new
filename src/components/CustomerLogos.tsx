"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const customers = [
  { name: "atmajaya", logo: "/atma-jaya.png" },
  { name: "bakrie", logo: "/bakrie.png" },
  { name: "fatmawati", logo: "/fatmawati.png" },
  { name: "huawei", logo: "/huawei.png" },
  { name: "kemendikbud", logo: "/kemendikbud.png" },
  { name: "kementrian", logo: "/kementrian.png" },
  { name: "kimia-farma", logo: "/kimia-farma.png" },
  { name: "paragon", logo: "/paragon.png" },
  { name: "uph", logo: "/UPH.png" },
];

export default function CustomerLogos() {
  // Duplicate the array for seamless looping
  const logos = [...customers, ...customers];
  const [rowWidth, setRowWidth] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set a timeout to ensure we have a fallback width even if calculation fails
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const calculateWidth = () => {
      if (rowRef.current) {
        const width = rowRef.current.scrollWidth / 2;
        setRowWidth(width);
        setIsLoading(false);
      }
    };

    // Initial calculation
    calculateWidth();

    // Recalculate on window resize
    window.addEventListener('resize', calculateWidth);
    return () => {
      window.removeEventListener('resize', calculateWidth);
      clearTimeout(timeoutId);
    };
  }, []);

  // If we have a rowWidth, we can show the content
  if (isLoading && !rowWidth) {
    return <div className="w-full h-[120px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>;
  }

  return (
    <div className="w-full">
      <h2 className="text-lg font-bold text-center mb-2 text-white">
        Our Customers
      </h2>
      <div className="relative overflow-hidden">
        <div
          className="flex customer-logos-marquee space-x-8 whitespace-nowrap"
          ref={rowRef}
          style={{ 
            minWidth: rowWidth ? `${rowWidth * 2}px` : '100%',
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          {logos.map((customer, index) => (
            <div
              key={`${customer.name}-${index}`}
              className="flex-shrink-0 w-[120px] flex items-center justify-center bg-white p-4 rounded-lg"
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            >
              <Image
                src={customer.logo}
                alt={`${customer.name} logo`}
                width={60}
                height={60}
                className="max-w-full h-auto"
                loading="lazy"
                onLoad={() => {
                  if (rowRef.current && !rowWidth) {
                    setRowWidth(rowRef.current.scrollWidth / 2);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .customer-logos-marquee {
            animation: customerLogosMarquee 10s linear infinite;
            will-change: transform;
            transform: translateZ(0);
            backface-visibility: hidden;
          }
          @keyframes customerLogosMarquee {
            0% { transform: translateX(0) translateZ(0); }
            100% { transform: translateX(-50%) translateZ(0); }
          }
          @media (max-width: 768px) {
            .customer-logos-marquee {
              animation-duration: 10s;
            }
          }
        `}
      </style>
    </div>
  );
} 