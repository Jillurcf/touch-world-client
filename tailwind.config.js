/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 0%': { transform: 'rotate()' },
          '0%': { transform: 'rotate()' },
        }
      }
      
    },
  },
  plugins: [require("daisyui")],
}