"use client";
import Image from "next/image";
import React from "react";
import { AppleCarousel } from "@/components/appleCarousel";

export default function OurProduct() {
  return (
    <div className="bg-[#EBEBE5] text-slate-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-base md:text-xl max-w-2xl text-center">
            Alarasa Catering menyediakan berbagai macam masakan khas Nusantara
            yang dikemas kedalam beragam kemasan untuk memenuhi segala kebutuhan
            konsumsi kalian!
          </p>
          <AppleCarousel />
        </div>
      </div>
    </div>
  );
}
