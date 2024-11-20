'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  while (true) {
    const number = Math.floor(Math.random() * 10000);

    if (new Set(number.toString()).size === 4) {
      return number;
    }
  }
}

module.exports = {
  generateRandomNumber,
};
