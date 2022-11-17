import getHint from '../src/getHint.js';

describe('Number generation tests', () => {
  test('return string', () => {
    const target = getHint('4143', '4341');

    expect(typeof target).toBe('string');
  });

  test('return proper quantity of bulls and cows', () => {
    expect(getHint('4143', '4341')).toBe('bulls: 2, cows: 2, try once more: ');
  });

  test('return zero if no bulls and cows', () => {
    expect(getHint('0000', '7777')).toBe('bulls: 0, cows: 0, try once more: ');
  });

  test('return empty string if numbers are equal', () => {
    expect(getHint('4278', '4278')).toBe('');
  });
});
