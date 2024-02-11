'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  while (true) {
    const number = Math.floor(Math.random() * 9000) + 1000;
    const digits = number.toString().split('').map(Number);

    if (new Set(digits).size === 4 && digits[0] !== 0) {
      return number;
    }
  }
}

module.exports = {
  generateRandomNumber,
};
