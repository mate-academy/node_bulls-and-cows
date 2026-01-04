'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 5; i++) {
    const j = Math.floor(Math.random() * (10 - i)) + i;

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  const res =
    digits[0] === 0 ? digits.slice(1, 5).join('') : digits.slice(0, 4).join('');

  return +res;
}

module.exports = {
  generateRandomNumber,
};
