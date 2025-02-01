export default {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
};
