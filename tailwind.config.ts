/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#fff9e7",
        cream: "#fff5d9"
      },
      fontFamily: {
        'heading': ['PPHatton', 'Inter', 'sans-serif'],
        'body': ['PPHatton', 'Inter', 'sans-serif'],
        'accent': ['PPHatton', 'Playfair Display', 'serif'],
        'pphatton': ['PPHatton', 'sans-serif'],
        'avenir': ['Avenir', 'Avenir Next', 'Helvetica Neue', 'sans-serif']
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'image': '16px'
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}