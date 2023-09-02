/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes:{
        circle1Anim:{
          '50%':{left:'32%',transform:'scale(1.11) ' },
          
        },
        circle2Anim:{
          '50%':{transform:'scale(1.1)',left:'53%'}
        }
        
      }
      
    },
  },
  plugins: [],
}

