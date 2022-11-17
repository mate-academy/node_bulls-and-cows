import validInput from '../src/validInput.mjs';

describe('Number generation tests', () => {
  test('return string', () => {
    const target = validInput('abcs');

    expect(typeof target).toBe('string');
  });

  test('to check input length less than 4 symbols', () => {
    expect(validInput('as')).toBe('Guessed number format is XXXX, try again: ');
  });

  test('to check input length longer than 4 symbols', () => {
    expect(validInput('assadas')).toBe(
      'Guessed number format is XXXX, try again: '
    );
  });

  test('to check if some symbols is not numbers', () => {
    expect(validInput('a444')).toBe('Symbols not allowed, try again: ');
  });

  test('return empty string if input is valid', () => {
    expect(validInput('4444')).toBe('');
  });
});
