module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true,
  },
  rules: {
    'no-console': 0,
    'no-console': 'off',
    'no-proto': 0,
  },
  plugins: ['jest'],
};
