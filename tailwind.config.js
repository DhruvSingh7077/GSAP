/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#e7d393",
        "white-100": "#efefef",
      },
      fontFamily: {
        sans: ["Mona Sans", "sans-serif"],
        serif: ["DM Serif Text", "serif"],
        "modern-negra": ["Modern Negra", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      maxWidth: {
        "2xs": "16rem",
        40: "10rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
