import generateSecretNumber from '../src/generateSecretNumber.js';

describe('Number generation tests', () => {
  test('return string', () => {
    const target = generateSecretNumber('')()()()();

    expect(typeof target).toBe('string');
  });

  test('return a string of 4 numbers', () => {
    expect(generateSecretNumber('')()()()()).toMatch(/[0-9]{4}/);
  });
});
