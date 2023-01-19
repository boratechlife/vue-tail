/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#161215',
        red: '#ea392c',
        pink: '#fff7f3',

        gray: '#747474',
      },
    },
  },
  plugins: [],
};
