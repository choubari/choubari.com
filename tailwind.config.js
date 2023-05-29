/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Bitter', 'serif'],
        mono: ['Roboto Mono', 'mono'],
      },
      colors: {
        'light': '#f3f3f3',
        'lighter': '#FFFFFF',
        'dark': '#343c4c',
        'darker': '#212733',
        'accent': '#12c5ca',
        'accentgrad': '#0A7679',
        'grey': '#ABABAB',
        'orangina': '#ffa74c',
        'rosalina': '#f86077',
        'violina': '#b16dea',
        'vibrant-blue': '#0456f9',


        'mineShaft': '#363636',
        'seashell': '#F1F1F1',
        'wafer': '#D8C9BF',
        'silver': '#ABABAB',
        'rawSienna': '#CF8035',
        'iroko': '#493626',
      },
    },
  },
  plugins: [],
}
