"use client";

import { useEffect } from "react";
import { FB_PIXEL_IDS } from "@/lib/meta-pixel";

export function FacebookPixelEvents() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          // Initialize all Meta Pixel IDs
          FB_PIXEL_IDS.forEach((pixelId) => {
            ReactPixel.init(pixelId, undefined, {
              autoConfig: true,
              debug: false
            });
          });
          // Track pageview for all pixels
          ReactPixel.pageView();
        });
    }
  }, []);

  return null;
}
