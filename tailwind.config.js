/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "gray-dark": "#757575",
      gray: "#E9E9E9",
      "gray-light": "F4F4F4",
      purple: "#A445ED",
      red: "#FF5252",
      text: "#2D2D2D",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        slate: colors.slate,
        neutral: colors.neutral,
      },
    },
  },
  plugins: [],
};
