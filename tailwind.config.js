/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "9rem",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
        barlowC: ["Barlow Condensed", "sans-serif"],
      },

      colors: {
        secondary: "#d2d8f9",
        litGray: "rgba(255, 255, 255, 0.5)",
        littGray: "rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
