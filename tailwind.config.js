const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "2rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["2rem", { lineHeight: "2.5rem" }],
      "4xl": ["2.5rem", { lineHeight: "3.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1.1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "2xl": "40rem",
      },
      /* Color families created on: https://uicolors.app/create */
      colors: {
        cyan: colors.cyan,
        primary: {
          DEFAULT: "#071C4D",
          50: "#e8f7ff",
          100: "#d4efff",
          200: "#b2e0ff",
          300: "#84c7ff",
          400: "#54a0ff",
          500: "#2d7aff",
          600: "#0a4cff",
          700: "#0143ff",
          800: "#043bcf",
          900: "#071c4d",
        },
        secondary: {
          DEFAULT: "#0044e6",
          50: "#e7f7ff",
          100: "#d3f0ff",
          200: "#b0e0ff",
          300: "#81c9ff",
          400: "#4fa3ff",
          500: "#287aff",
          600: "#044dff",
          700: "#004cff",
          800: "#0044e6",
          900: "#0b3ca4",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
