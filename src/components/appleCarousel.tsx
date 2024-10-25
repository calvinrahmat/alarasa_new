"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion, useInView } from "framer-motion";

export function AppleCarousel() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div
      ref={ref}
      className="flex text-slate-100 flex-col items-center justify-center w-full h-full py-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-slate-100 font-sans"
      >
        Our Products
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base md:text-xl max-w-2xl text-center py-4"
      >
        Alarasa Catering menyediakan berbagai macam masakan khas Nusantara yang
        dikemas kedalam beragam kemasan untuk memenuhi segala kebutuhan konsumsi
        kalian!
      </motion.p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref}>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <motion.div
            key={"dummy-content" + index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto"
            >
              <motion.span
                initial={{ color: "#000" }}
                animate={isInView ? { color: "#333" } : { color: "#000" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="font-bold text-neutral-700 dark:text-neutral-200"
              >
                The first rule of Apple club is that you boast about Apple club.
              </motion.span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            >
              <Image
                src="https://assets.aceternity.com/macbook.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
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
    title: "Snack Box & Coffee Break",
    src: "/snack.jpg",
    content: <DummyContent />,
    link: "/snack-box",
  },
];
