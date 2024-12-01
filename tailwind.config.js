/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      'inverse-primary': '#D8E4FD',
      onPrimary: '#FFFFFF',
      primary: '#305EFF',
      surface: '#192839',
      secondary: '#1B3591',
    },
    boxShadow: {
      card: '0 2px 16px 0 rgba(25, 40, 57, 0.09)',
    },
    extend: {},
  },
  plugins: [],
}
