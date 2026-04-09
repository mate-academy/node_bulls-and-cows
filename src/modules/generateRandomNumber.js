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
    const digit = Math.floor(Math.random() * 10).toString();

    if (digits.size === 0 && digit === '0') {
      continue; // Skip if the first digit is 0
    }

    if (!digits.has(digit)) {
      digits.add(digit);
    }
  }

  return parseInt([...digits].join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
