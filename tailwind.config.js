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
      animation: {
        blink3d: "blink3d 2s ease-in-out infinite",
      },
      keyframes: {
        blink3d: {
          "0%, 100%": {
            transform: "translateY(0)",
            boxShadow: "0 8px 0 rgba(0,0,0,0.25), 0 18px 30px rgba(0,0,0,0.35)",
          },
          "50%": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 0 rgba(0,0,0,0.35), 0 30px 45px rgba(0,0,0,0.45)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
      opacity: ['group-hover'],
    },
  },
  plugins: [],
  extend: {
  animation: {
    blink3d: "blink3d 2s ease-in-out infinite",
  },
  keyframes: {
    blink3d: {
      "0%, 100%": { transform: "translateY(0)", boxShadow: "0 8px 0 rgba(0,0,0,0.25), 0 18px 30px rgba(0,0,0,0.35)" },
      "50%": { transform: "translateY(-4px)", boxShadow: "0 12px 0 rgba(0,0,0,0.35), 0 30px 45px rgba(0,0,0,0.45)" },
    },
  },
}

};
