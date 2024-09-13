/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        lexend: ['Lexend', ...defaultTheme.fontFamily.sans],
        mulish: ['Mulish', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customBgColor: '#FFFAFE',
        loginColor: '#FCE3F5',
        snColor: '#AD47B2',
        editorColor: '#F4F4F4',
      },
      width: {
        'custom-width': '12rem',
      },
      inset: {
        'custom-inset': '6.9rem',
      },
      fontSize: {
        'smallFont': '12px',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}