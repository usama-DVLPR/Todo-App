/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F57173',
        'secondary': '#4c50d0',
        'text-gray': '#8F8DA5',
        'border-gray': '#D2DE3E',
      }
    },
  },
  plugins: [],
}
