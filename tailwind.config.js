module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0863D6",     // Blue CTA
        accent: "#EB2480",      // Pink accent
        navy: {
          100: "#718093",       // Grey blue
          700: "#1F3759",       // Navy medium
          900: "#132C50",       // Navy dark
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

