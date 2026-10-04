/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'tri-green': '#13402f',
        'tri-green-dark': '#0c2c20',
        'tri-yellow': '#f0a536',
        'tri-gray': '#f5f7f6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
