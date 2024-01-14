/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "fellow-400": "#F3B758",
        "fellow-500": "#F1A64A",
        "fellow-50": "#F2F0E6",
        "fellow-600": "#c85a3f",
      },
      fontFamily:{
        "lato": ['Kanit', 'sans-serif' ],
      }
    },
  },
  plugins: [],
}