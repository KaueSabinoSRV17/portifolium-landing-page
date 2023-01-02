/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "index.html"
  ],
  theme: {
    extend: {
      colors: {
        "background-black": "#22212C",
        "card-grey": "#302F3D",
        "text-grey": "#837E9F",
        "image-border-green": "#00FF00",
        "stacks-pink": "#CB92B1"
      }
    },
  },
  plugins: [],
}
