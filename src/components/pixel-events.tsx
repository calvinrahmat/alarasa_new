"use client";

import { useEffect } from "react";

export function FacebookPixelEvents() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init("2168736646808729", undefined, {
            autoConfig: true,
            debug: false
          });
          ReactPixel.pageView();
        });
    }
  }, []);

  return null;
}
