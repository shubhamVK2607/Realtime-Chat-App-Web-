import daisyui from "daisyui";
import scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fly: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-50px)", opacity: 0 },
        },

      },
      animation: {
        fly: "fly 1s ease-out",
        bounce: "bounce 2s infinite",
        spin: "spin 3s linear infinite",
        pulse: "pulse 2s infinite",
      },
      scrollbar: {
        width: "1px", // Thin scrollbar width
        height: "1px",
      },
    },
  },
  plugins: [daisyui, scrollbar],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
