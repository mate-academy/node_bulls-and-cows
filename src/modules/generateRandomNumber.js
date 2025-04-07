'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = '0123456789'.split('');
  let result = '';

  while (result.length < 4) {
    const randIndex = Math.floor(Math.random() * digits.length);
    const digit = digits[randIndex];

    if (result.length === 0 && digit === '0') {
      continue;
    }

    if (!result.includes(digit)) {
      result += digit;
    }
  }

  return parseInt(result, 10);
}

module.exports = {
  generateRandomNumber,
};
