/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'custom-purple': 'hsl(234,25%,52%)',
        'dark-blue': 'hsl(233,54%,16%)',
        'custom-gray': 'hsl(232,19%,56%)',
        'custom-pink': 'hsl(341, 92%,62%)',
        'light-pink': 'hsl(341, 100%,83%)',
        cgrpink: '#F02AA6',
        cgrorange: '#FF6F48',
        cgrblue: '#4851FF',
      },
      fontFamily: {
        Jakarta: 'Jakarta',
      },
      scale: {
        200: '2.00',
        180: '1.80',
      },
    },
  },
  plugins: [],
};
