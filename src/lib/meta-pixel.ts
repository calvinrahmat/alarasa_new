import type { FacebookPixel } from '../types/global';

declare global {
  interface Window {
    fbq?: FacebookPixel;
  }
}

// Multiple Meta Pixel IDs
export const FB_PIXEL_IDS = [
  "2168736646808729",
  "824799943675762"
];

export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options);
  }
}; 