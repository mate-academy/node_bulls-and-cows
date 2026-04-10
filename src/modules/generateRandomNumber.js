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
    const n = Math.floor(Math.random() * 10);

    if (digits.size === 0 && n === 0) {
      continue;
    }

    digits.add(n);
  }

  return Number([...digits].join(''));
}

module.exports = {
  generateRandomNumber,
};
