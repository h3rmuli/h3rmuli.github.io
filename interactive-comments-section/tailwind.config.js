/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        cgrey: 'hsl(228, 33%, 97%)',
        clgrey: 'hsl(211, 10%, 45%)',
        cmblue: 'hsl(238, 40%, 52%)',
        cdblue: 'hsl(212, 24%, 26%)',
        clgblue: 'hsl(239, 57%, 85%)',
        csred: 'hsl(358, 79%, 66%)',
      },
    },
  },
  plugins: [],
};
