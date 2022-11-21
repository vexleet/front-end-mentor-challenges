/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkText: 'hsl(229, 25%, 31%)',
        scoreText: 'hsl(229, 64%, 46%)',
        headerOutline: 'hsl(217, 16%, 45%)',
        paperIconColor: 'hsl(230, 89%, 62%)',
        rockIconColor: 'hsl(349, 71%, 52%)',
        scissorsIconColor: 'hsl(39, 89%, 49%)',
      },
    }

  },
  plugins: [],
}
