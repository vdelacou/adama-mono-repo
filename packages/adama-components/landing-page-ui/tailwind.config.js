const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    `src/**/*.{ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": colors.teal[500],
        "brand-secondary": colors.green[500],
      },
    },
  },
  plugins: [],
};
