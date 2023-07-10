module.exports = {
  root: true,
  extends: ['adama', 'plugin:@next/next/recommended'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
