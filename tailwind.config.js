/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollSeamless: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-seamless": "scrollSeamless 10s linear infinite",
      },
      spacing: {
        "200px": "200px",
        "300px": "300px",
      },
      translate: {
        "-50%": "-50%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
