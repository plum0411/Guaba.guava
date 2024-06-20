/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown: "#271d1b",
        limeade: {
          50: "#fbffe5",
          100: "#f4ffc7",
          200: "#e7ff95",
          300: "#d4ff57",
          400: "#bef625",
          500: "#9fdc06",
          600: "#7bb000",
          700: "#689606",
          800: "#4b690b",
          900: "#3e590e",
          950: "#1f3201",
        },
        main: {
          50: "#f8fcea",
          100: "#eef5d9",
          200: "#dbe9b5",
          300: "#bdd774",
          400: "#92ba3e",
          500: "#689606",
          600: "#4f8503",
          700: "#3f6b00",
          800: "#2e4e00",
          900: "#213801",
          950: "#1F3201",
        },
      },
    },
  },
  plugins: [],
};
