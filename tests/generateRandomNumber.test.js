'use strict';

const {
  generateRandomNumber,
} = require('../src/modules/generateRandomNumber');

describe.skip('generateRandomNumber', () => {
  test('should return a number', () => {
    const result = generateRandomNumber();

    expect(typeof result).toBe('number');
  });

  test('should return a 4-digit number', () => {
    for (let i = 0; i < 100; i++) {
      const result = generateRandomNumber();

      expect(result).toBeGreaterThan(999);
      expect(result).toBeLessThan(10000);
    }
  });

  test('should not contain duplicate digits', () => {
    for (let i = 0; i < 100; i++) {
      const result = generateRandomNumber();
      const digits = new Set(result.toString());

      expect(digits.size).toBe(4);
    }
  });

  test('should generate numbers with a basic level of randomness', () => {
    const results = new Set();

    for (let i = 0; i < 100; i++) {
      const result = generateRandomNumber();

      results.add(result);
    }

    expect(results.size).toBeGreaterThan(50);
  });
});
