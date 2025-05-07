import type { FacebookPixel } from '../types/global';

declare global {
  interface Window {
    fbq?: FacebookPixel;
  }
}

export const FB_PIXEL_ID = "2168736646808729";

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