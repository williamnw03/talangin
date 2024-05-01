/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstColor: "#0096c7",
        secondColor: "#00b4d8",
        thirdColor: "#48cae4",
        fourthColor: "#90e0ef",
        offWhite: "#FAF9F6",
        blueWhite: "#F1FAFF",
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
