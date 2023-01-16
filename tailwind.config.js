/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#c11f13",
        
"secondary": "#20db24",
        
"accent": "#f7a8aa",
        
"neutral": "#25192E",
        
"base-100": "#E6E4E7",
        
"info": "#A5CDEE",
        
"success": "#61DBCF",
        
"warning": "#FC9C3B",
        
"error": "#F93943",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
