/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    boxShadow: {
      card: '0 2px 16px 0 rgba(25, 40, 57, 0.09)',
    },
    extend: {
      colors: {
        inversePrimary: '#D8E4FD',
        primary: '#305EFF',
        secondary: '#1B3591',
        tertiary: '#0D1A48',
        onPrimary: '#FFFFFF',
        onSecondary: '#FFFFFF',
        on: '#FFFFFF',
        surface: '#192839',
        accent: '#00BE5F',
        border: '#6C849D',
      },
      fontSize: {
        xxs: ['10px', '12px'],
      },
      fontFamily: {
        inter: 'Inter',
      },
    },
  },
  plugins: [],
}
