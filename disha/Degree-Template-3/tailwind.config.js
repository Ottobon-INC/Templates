/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#062C22',
          dark: '#031A14',
          light: '#0F4C3A',
          slate: '#145E49',
          muted: '#1E755D'
        },
        electric: {
          DEFAULT: '#059669',
          hover: '#047857',
          light: '#34D399',
          subtle: '#ECFDF5',
          glow: 'rgba(5, 150, 105, 0.25)'
        },
        gold: {
          DEFAULT: '#E2C071',
          hover: '#CFA348',
          light: '#F7E8BA',
          subtle: '#FFFBEB'
        },
        surface: {
          DEFAULT: '#F4F7F5',
          card: '#FFFFFF',
          dark: '#041F18',
          muted: '#E2E8F0'
        }
      },
      fontFamily: {
        heading: ['Sora', 'Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(6, 44, 34, 0.15)',
        'glass-dark': '0 12px 40px 0 rgba(0, 0, 0, 0.5)',
        'card-hover': '0 20px 35px -10px rgba(5, 150, 105, 0.2)',
        'gold-glow': '0 0 25px rgba(226, 192, 113, 0.4)'
      }
    },
  },
  plugins: [],
}
