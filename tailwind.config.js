/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-left-infinite": "slide-left 15s linear infinite",
      },
      colors: {
        Plavender: "#7456ff",
        Slavender: '#8368ff',
        Tlavender: "#A693FF",
        QLavender: "#C5B9FF",
        QuinLavender: "#E0DAFF",
        Llavender: "#7B5EFF",
        Alavender: "#F5F2FF",

        Pblack : '#0C0C0C',
        Sblack : "#0F0F0F",
        Tblack : "#131313",
        Lblack  : "#0C0916",
        Fblack : "#323443",

        Pgray : "#707070",
        Sgray : "#999999"
      },
    },
  },
  plugins: [],
};
