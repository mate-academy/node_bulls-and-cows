module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    "ecmaVersion": 2020,
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
