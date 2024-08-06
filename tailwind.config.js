/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        poppins: ['Poppins'],
      },
      textShadow: {
        white: '0 0 10px rgba(255, 255, 255, 0.8)',
        purple: '0 0 10px rgba(128, 0, 128, 0.8)',
      },
  },
  },
  plugins: [
    require('tailwindcss-textshadow'), // pastikan Anda memiliki plugin ini
  ],
}