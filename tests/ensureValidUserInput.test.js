'use strict';

const { ensureValidUserInput } = require('../src/modules/ensureValidUserInput');

describe('ensureValidUserInput', () => {
  test('returns null for non-4-digit inputs', () => {
    const invalidInputs = [
      '',
      '1',
      '12',
      '123',
      '12345',
    ];

    for (const invalidInput of invalidInputs) {
      expect(ensureValidUserInput(invalidInput)).toBeNull();
    }
  });

  test('returns null for inputs starting with 0', () => {
    expect(ensureValidUserInput('0123')).toBeNull();
  });

  test('returns null for inputs with duplicate digits', () => {
    const invalidInputs = [
      '1123',
      '1213',
      '1231',
    ];

    for (const invalidInput of invalidInputs) {
      expect(ensureValidUserInput(invalidInput)).toBeNull();
    }
  });

  test('returns null for inputs with non-numeric characters', () => {
    const invalidInputs = [
      '1a23',
      '12a3',
      'abcd',
    ];

    for (const invalidInput of invalidInputs) {
      expect(ensureValidUserInput(invalidInput)).toBeNull();
    }
  });

  // eslint-disable-next-line max-len
  test('returns number for valid 4-digit inputs without leading 0 or duplicates', () => {
    const validInputs = [
      '1234',
      '5678',
      '9012',
      '3456',
      '7890',
    ];

    for (const validInput of validInputs) {
      expect(ensureValidUserInput(validInput)).toBe(Number(validInput));
    }
  });
});
