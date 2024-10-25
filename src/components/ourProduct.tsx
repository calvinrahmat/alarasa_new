"use client";
import React from "react";
import { AppleCarousel } from "@/components/appleCarousel";

export default function OurProduct() {
  return (
    <div className="bg-[#042824] text-slate-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <AppleCarousel />
        </div>
      </div>
    </div>
  );
}
