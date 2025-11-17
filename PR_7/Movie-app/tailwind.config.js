/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideUp: {
          "0%": { transform: "translateY(12px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        // new: gentle float motion
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        // new: shimmer beam sweep
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "100%": { transform: "translateX(160%) skewX(-12deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 500ms ease-out",
        slideUp: "slideUp 500ms ease-out",
        float: "float 3s ease-in-out infinite",
        shine: "shine 1.2s ease-in-out",
      },
    },
  },
  plugins: [],
};