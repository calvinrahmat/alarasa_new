/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        highlight: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-120px * 9))" },
        },
      },
      animation: {
        highlight: "highlight 1s ease-in-out forwards",
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
};
