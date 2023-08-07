/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'main':'radial-gradient(134.34% 134.34% at 50.00% 0%, #1F3757 0%, #131537 100%)',
        'score':'linear-gradient(0deg, #F3F3F3 0%, #FFF 100%)',
        'rules':'linear-gradient(0deg, #F3F3F3 0%, #FFF 100%)',
      },
      borderColor:{
        'header':'rgba(255, 255, 255, 0.29)'
      },
      fontFamily:{
        'barlow-condesed':'Barlow Condensed'
      },
      boxShadow:{
        'score':'0px 3px 3px 0px rgba(0, 0, 0, 0.20)'
      }
    },
  },
  plugins: [],
}

//background: radial-gradient(134.34% 134.34% at 50.00% 0%, #1F3757 0%, #131537 100%);