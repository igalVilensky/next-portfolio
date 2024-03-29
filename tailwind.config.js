module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },

    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e ,-5px -5px 10px #14161c",
    },

    extend: {
      colors: {
        yellowCustom: {
          DEFAULT: "#F4DB7D",
        },
        purpleCustom: {
          DEFAULT: "#9DAAF2",
        },
        greenCustom: {
          DEFAULT: "#BCFD4C",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
