/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'creme': '#E8DFD0',
        'creme-dark': '#D9CDB8',
        'musgo': '#1B1D16',
        'musgo-light': '#2e3126',
        'footer-color': '#425A3A',
        'footer-light': '#4f6d44',
        'accent': '#C84B2F',
        'accent-hover': '#a83a20',
      },
      fontFamily: {
        righteous: ['Righteous', 'sans-serif'],
        alegreyaSans: ['Alegreya Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
