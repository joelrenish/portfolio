/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9C84EF', // navbar/buttons
        secondary: '#171717', // background
        accent: '#fff6f7', // white
        altprimary: "#7362AF", // hover button color
        offwhite: "#a0a0a0",
        offgray: "#505050"
      },
    },
  },
  plugins: [],
}

