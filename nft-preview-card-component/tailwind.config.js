/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      // fontFamily: {
      //   Outfit: 'Outfit',
      // },
      colors: {
        mainBG: 'hsl(217, 54%, 11%)',
        cardBG: 'hsl(216, 50%, 16%)',
        line: 'hsl(215, 32%, 27%)',
        'soft-blue': 'hsl(215, 51%, 70%)',
        Cyan: 'hsl(178, 100%, 50%)',
      },
      scale: {
        25: '.25',
        15: '.15',
      },
    },
  },
  plugins: [],
};
