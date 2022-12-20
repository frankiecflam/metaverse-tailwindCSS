const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        universe:
          "linear-gradient(270deg,hsl(295deg 76% 51%) 0%,hsl(284deg 70% 73%) 26%,hsl(257deg 70% 86%) 39%,hsl(202deg 92% 90%) 50%,hsl(215deg 77% 81%) 61%,hsl(221deg 73% 70%) 74%,hsl(220deg 76% 51%) 100%);",
      },
      colors: {
        bg: "#1a232e",
      },
      fontFamily: {
        sans: ["Eudoxus Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
