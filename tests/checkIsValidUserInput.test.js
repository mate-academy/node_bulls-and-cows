'use strict';

const {
  checkIsValidUserInput,
} = require('../src/modules/checkIsValidUserInput');

describe('checkIsValidUserInput', () => {
  test('returns false for non-4-digit inputs', () => {
    const invalidInputs = ['', '1', '12', '123', '12345'];

    for (const invalidInput of invalidInputs) {
      expect(checkIsValidUserInput(invalidInput)).toBe(false);
    }
  });

  test('returns false for inputs starting with 0', () => {
    expect(checkIsValidUserInput('0123')).toBe(false);
  });

  test('returns false for inputs with duplicate digits', () => {
    const invalidInputs = ['1123', '1213', '1231'];

    for (const invalidInput of invalidInputs) {
      expect(checkIsValidUserInput(invalidInput)).toBe(false);
    }
  });

  test('returns false for inputs with non-numeric characters', () => {
    const invalidInputs = ['1a23', '12a3', 'abcd'];

    for (const invalidInput of invalidInputs) {
      expect(checkIsValidUserInput(invalidInput)).toBe(false);
    }
  });

  // eslint-disable-next-line max-len
  test('returns true for valid 4-digit inputs without leading 0 or duplicates', () => {
    const validInputs = ['1234', '5678', '9012', '3456', '7890'];

    for (const validInput of validInputs) {
      expect(checkIsValidUserInput(validInput)).toBe(true);
    }
  });
});
