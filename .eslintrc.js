module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  parserOptions: {
    "sourceType": "module",
  },
  type: "module",
  rules: {
    'no-proto': 0
  },
  plugins: ['jest']
};
