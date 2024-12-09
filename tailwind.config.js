/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff386f', //cyan
        secondary: '#fff6f7', //white
        accent: '#21392c', //black
        altprimary: "#95b0b4", //gray
      },
    },
  },
  plugins: [],
}

