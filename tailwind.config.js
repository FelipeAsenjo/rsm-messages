/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    colors: {
      'primary': '#0095D6',
      'primary-light': '#70D4FF',
      'primary-dark': '#004E70',
      'secondary': '#14A538',
      'secondary-light': '#92F2AA',
      'secondary-dark': '#094919',
      'text': '#757574',
      'error': '#EB0000',
      'error-light': '#FF8585',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    extend: {},
  },
  plugins: [],
}

