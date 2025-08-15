'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = new Set();
  let number = '';

  while (number.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (digit !== 0 && !digits.has(digit)) {
      digits.add(digit);
      number += digit;
    }
  }

  return +number;
}

module.exports = {
  generateRandomNumber,
};
