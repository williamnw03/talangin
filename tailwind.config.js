/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkTeal: "#1B262C",
        navy: "#0F4C75",
        blue: "#3282B8",
        lightBlue: "#BBE1FA",
        offWhite: "#FAF9F6",
      },

      fontFamily: {
        sans: ["montserrat"],
      },

      screens: {
        xs: "540px",
      },
    },
  },
  plugins: [],
};
