/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/images/illustration-hero.svg')",
        'music-icon': "url('/src/images/icon-music.svg')",
        'pattern-desktop': "url('/src/images/pattern-background-desktop.svg')",
        'pattern-mobile': "url('/src/images/pattern-background-mobile.svg')",
      },
      colors: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
      },
      fontFamily: {
        RedHatDisplay: ['Red Hat Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
