'use strict';

const {
  calculateRandomNumber,
} = require('../src/modules/calculateRandomNumber');

describe('calculateRandomNumber', () => {
  test('should return a number', () => {
    const result = calculateRandomNumber();

    expect(typeof result).toBe('number');
  });

  test('should return a 4-digit number', () => {
    const result = calculateRandomNumber();

    expect(result).toBeGreaterThan(999);
    expect(result).toBeLessThan(10000);
  });

  test('should not start with 0', () => {
    for (let i = 0; i < 100; i++) {
      const result = calculateRandomNumber();

      expect(result.toString()[0]).not.toBe('0');
    }
  });

  test('should not contain duplicate digits', () => {
    for (let i = 0; i < 100; i++) {
      const result = calculateRandomNumber().toString();
      const digits = new Set(result);

      expect(digits.size).toBe(4);
    }
  });

  test('should generate numbers with a basic level of randomness', () => {
    const digitCounts = new Array(10).fill(0);
    const iterations = 100;
    const tolerance = 0.4;

    for (let i = 0; i < iterations; i++) {
      const number = calculateRandomNumber().toString();

      for (const digit of number) {
        digitCounts[parseInt(digit)]++;
      }
    }

    const averageCount = iterations * 4 / 10;

    for (const count of digitCounts) {
      const deviation = Math.abs(count - averageCount) / averageCount;

      expect(deviation).toBeLessThanOrEqual(tolerance);
    }
  });
});
