module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    "browser": true,
    "node": true,
    "es2020": true,
    jest: true
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest']
};
