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
      },
    },
  },
  plugins: [
    function({ addUtilities }){
      const newUtilities = {
        '.scrollbar':{
          '&::-webkit-scrollbar':{
            width: '0.7rem'
          },
          '&::-webkit-scrollbar-track':{
            background: 'rgba(0,0,0,0.5)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgb(68 64 60)',
          },
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

