/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: "'Space Grotesk', sans-serif",
      },
      colors: {
        button: "#21092f",
      },
    },
  },
  plugins: [],
};
