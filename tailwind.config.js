/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,ts,js,jsx,css,scss,sass}"],
  theme: {
    extend: {
      fontFamily: {
        "jakarta": ["Plus Jakarta Sans", "sans-serif"],
        "duplicate-sans-regular": ["DuplicateSansRegular", "sans-serif"],
        "duplicate-sans": ["DuplicateSans", "sans-serif"],
      },
      gridRow: {
        "span-1-3": "1 / 3",
        "span-2-3": "2 / 3",
        "span-3-4": "3 / 4",
      },
      gridColumn: {
        "span-1-3": "1 / 3",
        "span-2-3": "2 / 3",
      },
    },
    colors: {
      "transparent": "transparent",
      "current": "currentColor",
      "white": "#ffffff",
      "black": "#000000",
      "pitch-white": "#BCC1C8",
      "dark-yellow": "#FFC501",
      "green": {
        100: "#218068",
        200: "#195D4C",
        300: "#0C513F",
      },
    },
  },
  plugins: [],
};
