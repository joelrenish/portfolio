/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a2f4ff', //cyan
        secondary: '#cfc4f4', //lavender
        accent: '#21392c', //black
        altprimary: "#95b0b4", //gray
      },
    },
  },
  plugins: [],
}

