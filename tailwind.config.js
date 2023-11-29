const {fontFamily} = require('tailwindcss/defaultTheme') 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        mont:['var(--font-monserrat)',...fontFamily.sans]
      },
      colors:{
        dark: "#1b1b1b", 
        light: "#f5f5f5",
        primary: "#863E96", // 240,86, 199 
        primaryDark: "#58E6D9", // 80,230,217
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'circularLight': 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)'
      },
    },
  },
  plugins: [],
}
