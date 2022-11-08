/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('https://wallpapercave.com/wp/wp2459791.jpg')",
      },
    },
    // that is animation class
    animation: {
      fade: "fadeIn 5s ease-in",
    },

    // that is actual animation
    keyframes: (theme) => ({
      fadeIn: {
        "0%": { opacity: theme("0") },
        "100%": { opacity: theme("1") },
      },
    }),
  },
  plugins: [],
};
