const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    `src/**/*.{ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: colors.teal[500],
        brandSecondary: colors.green[500],
      },
    },
  },
  plugins: [],
};
