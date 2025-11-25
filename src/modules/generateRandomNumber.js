'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';

  const firstIndex = Math.floor(Math.random() * digits.length);

  result += digits[firstIndex];
  digits.splice(firstIndex, 1);

  digits.push('0');

  while (result.length < 4) {
    const idx = Math.floor(Math.random() * digits.length);

    result += digits[idx];
    digits.splice(idx, 1);
  }

  return Number(result);
}

module.exports = {
  generateRandomNumber,
};
