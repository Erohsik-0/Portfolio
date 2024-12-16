/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        typing:'typing 5s steps(20, end) blink : 1s step-end infinite',
      },
      keyframes:{
        typing:{
          '0%':{width:'0%'},
          '100%':{width:'100%'}
        },
        blink:{
          '0% , 100%':{borderColor:'transparent'},
          '50':{borderColor:'white'},
        }
      }
    },
  },
  plugins: [],
}