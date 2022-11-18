'use strict';

const { generateSecretNumber } = require('../src/generateSecretNumber.js');

describe('Number generation tests', () => {
  test('return string', () => {
    const target = generateSecretNumber('')()()()();

    expect(typeof target).toBe('string');
  });

  test('return a string of 4 numbers', () => {
    expect(generateSecretNumber('')()()()()).toMatch(/[0-9]{4}/);
  });

  test('return a string of 4 different numbers', () => {
    const secretNumber = generateSecretNumber('')()()()().split('');
    const isUnique = arr => arr.length === new Set(arr).size;

    expect(isUnique(secretNumber)).toBeTruthy();
  });
});
