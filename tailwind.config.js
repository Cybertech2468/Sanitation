/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',"./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-primary': '#508D69'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

