/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/**/*.{html,js}"],
  theme: {
      colors:{
        'Tomato': 'hsl(4, 100%, 67%)',
        'Dark Slate Grey': 'hsl(234, 29%, 20%)',
        'Charcoal Grey': 'hsl(235, 18%, 26%)',
        'Grey': 'hsl(231, 7%, 60%)',
        'White': 'hsl(0, 0%, 100%)',
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
      'sm': '200px',
      // => @media (min-width: 200px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {

    },
  },
  plugins: [],
}

