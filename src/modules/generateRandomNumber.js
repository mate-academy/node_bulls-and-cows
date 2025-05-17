'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  while (true) {
    const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const digits = String(randomNumber).split('');
    const uniqueDigits = new Set(digits);

    if (digits.length === uniqueDigits.size) {
      return randomNumber;
    }
  }
}

module.exports = {
  generateRandomNumber,
};
