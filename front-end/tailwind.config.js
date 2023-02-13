/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '450px',
        // => @media (min-width: 640px) { ... }
        },
      colors: {
        'primary': '#F57173',
        'secondary': '#4c50d0',
        'text-gray': '#8F8DA5',
        'border-gray': '#D2DE3E',
        'heading-blue':'#666afb',
        'txt-primary': '#82829c',
        'txt-gray': '#afb0ce'
      }
    },
  },
  plugins: [],
}
