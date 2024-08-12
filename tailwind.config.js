/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}","./node_modules/flowbite/**/*.js"],

  theme: {
    colors: {
      'gold': '#B88E2F'
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

