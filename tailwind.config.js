/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#16191A",
          light: "#E7E7E7",
        },
        secondary: {
          dark: "#1F2123",
          light: "#E7E7E7",
        },
        tx: {
          dark: "#F5F6F6",
          light: "#303030",
        },
        stroke: {
          dark: "#2F3134",
        },
        orange: {
          light: "#ffb287",
          default: "#ff7e37",
        },
        indigo: "#7B96F4",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        script: ["Righteous", "sans-serif"],
      },
    },
  },
  plugins: [],
}
