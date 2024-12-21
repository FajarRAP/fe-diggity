/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    boxShadow: {
      card: '0 2px 16px 0 rgba(25, 40, 57, 0.09)',
      navbar: '0 -2px 12px 0 rgba(0, 0, 0, 0.25)',
    },
    extend: {
      colors: {
        background: '#F5F8FF',
        inversePrimary: '#D8E4FD',
        primary: '#305EFF',
        secondary: '#1B3591',
        tertiary: '#0D1A48',
        onPrimary: '#FFFFFF',
        onSecondary: '#FFFFFF',
        surface: '#192839',
        accent: '#00BE5F',
        border: '#6C849D',
        warning: '#FFC107',
        error: '#F44336'
      },
      fontSize: {
        xxs: ['10px', '12px'],
      },
      fontFamily: {
        inter: 'Inter',
      },
      width: {
        lg: '32rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
