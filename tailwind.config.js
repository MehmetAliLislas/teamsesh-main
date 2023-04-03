/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaulttheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
      }
    },
  },
  plugins: [],
}