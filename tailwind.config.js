/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* =====================
         Fonts
      ====================== */
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },

      /* =====================
         Brand Colors
      ====================== */
      colors: {
        brandDark: "#0f2b48",
        brandLight: "#d1f3ff",
        brandAccent: "#33c1ff",
      },

      /* =====================
         Animations
      ====================== */
      animation: {
        blink3d: "blink3d 2s ease-in-out infinite",
        softBlink: "softBlink 1.8s infinite",
      },

      /* =====================
         Keyframes
      ====================== */
      keyframes: {
        blink3d: {
          "0%, 100%": {
            transform: "translateY(0)",
            boxShadow:
              "0 8px 0 rgba(0,0,0,0.25), 0 18px 30px rgba(0,0,0,0.35)",
          },
          "50%": {
            transform: "translateY(-4px)",
            boxShadow:
              "0 12px 0 rgba(0,0,0,0.35), 0 30px 45px rgba(0,0,0,0.45)",
          },
        },

        softBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },

  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ["group-hover"],
      opacity: ["group-hover"],
    },
  },

  plugins: [],
};
