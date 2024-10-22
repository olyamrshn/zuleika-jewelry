/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        termina: ["Termina Test", "sans-serif"],
        kepler: ["Kepler Std"],
        keplerCondensed: ["Kepler Std Condensed"],
      },
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
}
