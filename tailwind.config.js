/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myblue : '#00bbff',
        myyellow : '#ffc106'
      }
    },
  },
  plugins: [],
}