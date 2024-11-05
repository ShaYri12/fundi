/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "night-black": "#1c1d24",
      },
      fontFamily: {
        axiformaa: ["Axiforma Regular", "sans-serif"], // Custom font
      },
    },
  },
  plugins: [],
};
