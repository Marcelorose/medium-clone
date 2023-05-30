/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-medium': '#FFC017',
        'salmon-medium': '#ffd1b9',
        'blue-medium': '#4479ff',
        'orange-medium': '#f24d2e'
      },
    },
  },
  plugins: [require("daisyui")],
}
