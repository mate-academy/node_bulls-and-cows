'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const used = new Set();
  let number = '';

  while (number.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (number.length === 0 && digit === 0) {
      continue;
    }

    if (used.has(digit)) {
      continue;
    }

    used.add(digit);
    number += digit;
  }

  return Number(number);
}

module.exports = {
  generateRandomNumber,
};
