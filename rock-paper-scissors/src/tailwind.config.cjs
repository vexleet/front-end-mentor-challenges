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
      keyframes: {
        sploosh: {
          '0%': {boxShadow: '0 0 0 0px rgba(255, 255, 255, .7)', background: 'rgba(255, 255, 255, .8)'},
          '80%': {background: 'rgba(255, 255, 255, 0)'},
          // '100%': {boxShadow: '0 0 0 20px rgba(255, 255, 255, 0)'}
        },
        pulse: {
          '0%': {transform: 'scale(1)'},
          '3.3': {transform: 'scale(1.1)'},
          '16.5%': {transform: 'scale(1)'},
          '33%': {transform: 'scale(1.1)'},
          '100%': {transform: 'scale(1)'},
        }
      },
      animation: {
        'pulsing-span-1': 'sploosh 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
        'pulsing-span-2': 'sploosh 2s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s infinite',
        'pulsing-span-3': 'sploosh 2s cubic-bezier(0.165, 0.84, 0.44, 1) 0.6s infinite',
      }
    },
  },
  plugins: [],
}
