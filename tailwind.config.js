// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ash: {
          50: '#F5F3F2',
          100: '#EAE7E5',
          200: '#B8B2AE',
          300: '#918982',
          400: '#5D5652',
          500: '#4A433D',
          600: '#403933',
          700: '#302822',
          800: '#171311',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        float: 'float 4s ease-out forwards',
        'fade-out': 'fadeOut 4s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%': {
            transform: 'translateY(100vh)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100vh)',
            opacity: '0',
          },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};