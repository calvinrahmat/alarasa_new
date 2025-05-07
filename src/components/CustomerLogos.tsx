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
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rowRef.current) {
      setRowWidth(rowRef.current.scrollWidth / 2); // width of one set
    }
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-center mb-2 text-white">
        Our Customers
      </h2>
      <div className="relative overflow-hidden">
        <div
          className="flex animate-marquee space-x-8 whitespace-nowrap"
          ref={rowRef}
          style={{ minWidth: rowWidth ? `${rowWidth * 2}px` : undefined }}
        >
          {logos.map((customer, index) => (
            <div
              key={`${customer.name}-${index}`}
              className="flex-shrink-0 w-[120px] flex items-center justify-center bg-white p-4 rounded-lg"
            >
              <Image
                src={customer.logo}
                alt={`${customer.name} logo`}
                width={60}
                height={60}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
} 