module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-plusplus': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': ['error', { maxDepth: 1 }],
    'implicit-arrow-linebreak': ['error', 'beside'],
  },
};
