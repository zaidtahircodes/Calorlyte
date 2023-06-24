/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mod-teal': '#00d6e0',
        'mod-black': '#222831',
        'mod-white': '#EEEEEE',
        'mod-grey': '#393E46',
      },
    },
  },

}