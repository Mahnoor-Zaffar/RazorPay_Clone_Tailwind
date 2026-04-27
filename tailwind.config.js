/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b95ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        greyText: "#818597",
        lightGrey: "#e2e2e2",
        greyBlue: "#344a6c",
        deepBlueHead: "#162f56",
        grey2: "#525a76",
      },
      boxShadow: {
        razor: "0 18px 45px rgba(22, 47, 86, 0.12)",
        "razor-lg": "0 28px 70px rgba(2, 4, 42, 0.18)",
      },
    },
  },
  plugins: [],
};
