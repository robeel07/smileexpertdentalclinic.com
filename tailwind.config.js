/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        brandDark: "#0f2b48",
        brandLight: "#d1f3ff",
        brandAccent: "#33c1ff",
      },
    },
  },
  // YE WALA BLOCK ADD KAREIN AGAR VERSION 2 HAI
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
      opacity: ['group-hover'],
    },
  },
  plugins: [],
};