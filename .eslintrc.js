module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0,
    'no-console': 'off',
    "prefer-promise-reject-errors": "off",
  },
  plugins: ['jest'],
  parser: "babel-eslint",
};
