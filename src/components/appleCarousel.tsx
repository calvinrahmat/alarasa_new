"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-8">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-slate-800 font-sans">
        Our Products
      </h2>
      <p className="text-base md:text-xl max-w-2xl text-center py-4">
        Alarasa Catering menyediakan berbagai macam masakan khas Nusantara yang
        dikemas kedalam beragam kemasan untuk memenuhi segala kebutuhan konsumsi
        kalian!
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    title: "Nasi Box",
    src: "/nasi-box.jpg",
    content: <DummyContent />,
    link: "/nasi-box",
  },
  {
    title: "Prasmanan",
    src: "/prasmanan.jpg",
    content: <DummyContent />,
    link: "/prasmanan",
  },
  {
    title: "Snack Box / Coffee Break",
    src: "/snack.jpg",
    content: <DummyContent />,
    link: "/snack-box",
  },
];
