/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        ora: 'hsl(26, 100%, 55%)',
        paleora: 'hsl(25, 100%, 94%)',
      },
      fontFamily: {
        'Kumbh-Sans': ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
