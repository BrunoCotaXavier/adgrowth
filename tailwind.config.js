/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      width: {
        '650': '650px',
        '580': '580px',
        '450': '450px',
        '333': '333px',
        '400': '400px',
        '200': '200px',
        '120': '120px',
        '80': '80px',
      },
      height: {
        '650': '650px',
        '580': '580px',
        '450': '450px',
        '400': '400px',
        '200': '200px',
        '120': '120px',
        '80': '80px',
      },
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
        '450': '450px',
        '400': '400px',
        '333': '333px',
        '200': '200px',
        '80': '80px',
      },
      height: {
        '650': '650px'
      }
    },
  },
  plugins: [],
}

