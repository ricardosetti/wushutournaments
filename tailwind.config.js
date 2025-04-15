/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'wushu-black': '#1A1A1A',
        'wushu-white': '#F5F5F5',
        'wushu-gray': '#D3D3D3',
        'wushu-dark-gray': '#4A4A4A',
      },
      fontFamily: {
        sans: ['Cinzel', 'serif'], // A serif font for a traditional, elegant feel
      },
    },
  },
  plugins: [],
};