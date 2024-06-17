/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'spotify-lg': "linear-gradient(transparent, rgba(0, 0, 0, 1))"
      }
    },
  },
  plugins: [],
}

