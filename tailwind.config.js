/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      fontWeight: {
        500: '500',
        600: '600',
        700: '700',
        800: '800'
      },
      margin: {
        50: '50px'
      },
      backgroundImage: {
        backgroundHome: "url('./assets/image/bg-image.jpeg')"
      }
    },
  },
  plugins: [],
}

