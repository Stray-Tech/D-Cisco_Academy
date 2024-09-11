/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans-serif'],
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