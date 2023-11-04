/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/src/images/illustration-sign-up-desktop.svg')",
        'hero-mobile': "url('/src/images/illustration-sign-up-mobile.svg')",
      },
      colors: {
        Tomato: 'hsl(4, 100%, 67%)',
        charcoal: 'hsl(235, 18%, 26%)',
      },
    },
  },
  plugins: [],
};
