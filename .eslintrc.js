module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended', 'plugin:n/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['promise'],
  rules: {
    'promise/always-return': 'error',
    'promise/no-callback-in-promise': 'error',
  },
};
