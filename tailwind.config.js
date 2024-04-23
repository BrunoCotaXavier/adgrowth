/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('../public/images/backgroundBanner.jpg')",
      },
      fontSize: {
        '40': '40px', 
        '25': '25px', 
      },
      maxWidth: {
        '650': '600px',
        '580': '580px',
        '450': '450px',
      },
      height: {
        '650': '650px'
      }
    },
  },
  plugins: [],
}

