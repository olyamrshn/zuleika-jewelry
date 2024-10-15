/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        termina: ["Termina Test", "sans-serif"],
        kepler: ['"Kepler Std"', "serif"],
      },
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
}
