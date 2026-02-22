'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  while (true) {
    const result = Math.floor(Math.random() * 9000) + 1000;
    const digits = new Set(result.toString());

    if (digits.size === 4) {
      return result;
    }
  }
}

module.exports = {
  generateRandomNumber,
};
