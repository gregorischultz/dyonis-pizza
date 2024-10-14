/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'creme': '#E8DFD0',
        'musgo': '#1B1D16',
        'footer-color' : '#425A3A',
      },
      fontFamily : {
        righteous: ['Righteous', 'sans-serif'],
        alegreyaSans: ['Alegreya Sans', 'sans-serif'],
        montserrat : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

