/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('../public/images/backgroundBanner.png')",
      },
      fontSize: {
        '67': '90px', 
        '50': '57px', 
        '40': '40px',
        '25': '25px', 
      },
      maxWidth: {
        '650': '650px',
        '580': '580px',
        '400': '400px',
        '450': '450px',
      },
      height: {
        '650': '650px'
      }
    },
  },
  plugins: [],
}

