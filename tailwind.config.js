/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Inter, sans-serif']
      },
      backgroundImage: {
        'circles': "url('src/assets/freesample-bg.svg')",
      },
      colors: {
        'fs-dark': '#1A1C2B',
        'fs-light': '#B8C3CF',
        'fs-text': '#D9D9D9',
        'fs-gold': '#91611A',
        'fs-yellow': '#CD8C2A'
      }
    },
  },
  plugins: [],
}

