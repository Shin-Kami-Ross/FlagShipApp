/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "slide-in-right": "slide-in-right 1s ease-out"
      },
      keyframes: {

        "slide-in-right": {
          "0%": {
            "transform": "translateX(110%)"
          },
          "100%": {
            "transform": "translateX(0)"
          }
        }
      },
      spacing: {
        //'128': '32rem',
      }
    },
  },
  plugins: [],
}

