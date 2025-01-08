/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
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
