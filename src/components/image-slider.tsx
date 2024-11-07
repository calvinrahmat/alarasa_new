"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  className?: string;
}

export default function ImageSlider({
  images,
  className = "",
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Card className={`w-full max-w-md mx-auto ${className}`}>
      <CardContent className="p-0 relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10"
          onClick={toggleFavorite}
        >
          <Heart
            className={favorite ? "fill-red-500 text-red-500" : "text-gray-500"}
          />
        </Button>
        <div className="relative aspect-square rounded-xl overflow-hidden">
          {images.length > 0 ? (
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              No images available
            </div>
          )}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 left-2 transform -translate-y-1/2"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-2 transform -translate-y-1/2"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
