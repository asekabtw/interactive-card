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
      backgroundImage: {
        bgMobile: "url('/images/bg-main-mobile.png')",
        bgDesktop: "url('/images/bg-main-desktop.png')",
      },
    },
  },
  plugins: [],
};
