module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb-base'],
  rules: {
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
  },
};
