/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'earth-green': '#4CAF50',
        'earth-green-dark': '#2E7D32',
        'earth-blue': '#2196F3',
        'earth-blue-dark': '#1565C0',
        'earth-purple': '#9C27B0'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
