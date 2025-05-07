"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductShowcaseProps {
  images: string[];
  title: string;
}

export default function ProductShowcase({
  images,
  title,
}: ProductShowcaseProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleThumbnails, setVisibleThumbnails] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setVisibleThumbnails(3);
      } else {
        setVisibleThumbnails(4);
      }
    };

    handleResize();
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const nextImage = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, images.length - visibleThumbnails)
    );
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-[#EBEBE5] border-black">
      <CardContent className="p-4 sm:p-6">
        <div className="relative aspect-square mb-4 overflow-hidden">
          <Image
            src={images[currentImage]}
            alt={`Main ${title} image ${currentImage + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative">
          <div className="flex justify-center space-x-2 py-2 overflow-x-auto">
            {images
              .slice(startIndex, startIndex + visibleThumbnails)
              .map((src, index) => (
                <button
                  key={startIndex + index}
                  onClick={() => setCurrentImage(startIndex + index)}
                  className={`flex-shrink-0 ${
                    startIndex + index === currentImage
                      ? "ring-2 ring-primary"
                      : ""
                  }`}
                >
                  <div className="relative w-20 h-20 overflow-hidden rounded">
                    <Image
                      src={src}
                      alt={`${title} image ${startIndex + index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </button>
              ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-800 font-bold border-black"
            onClick={prevImage}
            disabled={currentImage === 0 && startIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-800 font-bold border-black"
            onClick={nextImage}
            disabled={
              currentImage === images.length - 1 &&
              startIndex >= images.length - visibleThumbnails
            }
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
