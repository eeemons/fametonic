/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fametonic-bg": "#00E7F9",
      },
      boxShadow: {
        "fametonic-glow": "0px 4px 4px 0px #FC004E",
      },
      textShadow: {
        "fametonic-glow": "0px 4px 4px #FC004E",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    },
  ],
};
