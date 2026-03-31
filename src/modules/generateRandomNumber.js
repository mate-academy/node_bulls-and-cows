'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = new Set();

  while (digits.size < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (digits.size === 0 && digit === 0) {
      continue;
    }

    digits.add(digit);
  }

  return Number(Array.from(digits).join(''));
}

module.exports = {
  generateRandomNumber,
};
