/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        'landing': '25% 30% 15% 25%',
      },
      gridTemplateRows: {
        'landing': '50% 50%',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      
      animation: {
        "fade-in": "fadeIn 0.15s ease-in-out"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      colors: {
        sun: {
          '50': '#fff9eb',
          '100': '#ffeec6',
          '200': '#fede89',
          '300': '#fec446',
          '400': '#fdae22',
          '500': '#f88c08',
          '600': '#db6604',
          '700': '#b64507',
          '800': '#94350c',
          '900': '#792c0e',
          '950': '#461402',
        },
        bianca: {
          '50': '#faf8ed',
          '100': '#f2edd3',
          '200': '#e4daa3',
          '300': '#d6c473',
          '400': '#ccb053',
          '500': '#c2973e',
          '600': '#ab7934',
          '700': '#8f5c2e',
          '800': '#754a2b',
          '900': '#613e26',
          '950': '#372011',
        },
        'gin': {
          '50': '#fff9de',
          '100': '#fff5c0',
          '200': '#ffe985',
          '300': '#ffd53f',
          '400': '#ffbc0b',
          '500': '#f4a200',
          '600': '#d37a00',
          '700': '#a85400',
          '800': '#8a4109',
          '900': '#75360e',
          '950': '#451a03',
        },
      }
    },
  },
  plugins: [],
}

