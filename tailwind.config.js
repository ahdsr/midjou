/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
  theme: {
    extend: {
      fontFamily: {
        Content: ['Open Sans', 'sans-serif'],
        Display: ['Roboto Slab', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
