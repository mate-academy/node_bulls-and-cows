'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [];

  // Generate first digit (1-9, cannot be 0)
  digits.push(Math.floor(Math.random() * 9) + 1);

  // Generate remaining 3 digits (0-9, but unique)
  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!digits.includes(digit)) {
      digits.push(digit);
    }
  }

  return parseInt(digits.join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
