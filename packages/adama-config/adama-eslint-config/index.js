module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:security/recommended",
    "plugin:@next/next/recommended",
    "prettier",
    "turbo",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/react-in-jsx-scope": "off",
    "no-multiple-empty-lines": ["error", { max: 1 }],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "18",
    },
  },
  ignorePatterns: ["prettier.config.js", "tailwind.config.js"],
};
