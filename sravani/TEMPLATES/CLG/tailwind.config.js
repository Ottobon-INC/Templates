/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mjc: {
          blue: '#172b54',
          darkblue: '#0d1b34',
          yellow: '#f6a800',
          yellowHover: '#df9800',
          dark: '#111827',
          grayBg: '#f0f0f0',
          cardDark: '#222222',
          lightBlue: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        condensed: ['Oswald', 'Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
