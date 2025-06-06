'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [];

  // First digit: 1-9 (no leading zero)
  digits.push(Math.floor(Math.random() * 9) + 1);

  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!digits.includes(digit)) {
      digits.push(digit);
    }
  }

  return parseInt(digits.join(''), 10);
}

// eslint-disable-next-line no-console

module.exports = {
  generateRandomNumber,
};
