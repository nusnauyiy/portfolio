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
      fontFamily: {
        cursive: ['Charmonman', 'cursive'],
        sub: ['Edu AU VIC WA NT Pre', 'cursive'],
        sans: ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};