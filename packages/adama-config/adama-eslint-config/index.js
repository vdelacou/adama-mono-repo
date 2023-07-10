module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:security/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
    'turbo',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      1,
      {
        endOfLine: 'lf',
        printWidth: 180,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: '18',
    },
  },
  env: {
    node: true,
  },
  ignorePatterns: ['tailwind.config.js'],
};
