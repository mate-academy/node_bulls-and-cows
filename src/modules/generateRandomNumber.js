'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = new Set();

  digits.add(Math.floor(Math.random() * 9) + 1);

  while (digits.size < 4) {
    const digit = Math.floor(Math.random() * 10);

    digits.add(digit);
  }

  return +Array.from(digits).join('');
}

module.exports = {
  generateRandomNumber,
};
