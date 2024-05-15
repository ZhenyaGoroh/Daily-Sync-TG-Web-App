/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#12100E',
        green: '#9FCC2E',
        blue: '#52FFEE',
        green400: '#058c42',
        green200: '#16db65',
      }
    },
  },
  plugins: [],
}