'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let randomNumber = '';

  while (randomNumber.length < 4) {
    const digit = Math.floor(Math.random() * 10).toString();

    if (randomNumber.length === 0 && digit === '0') {
      continue;
    }

    if (!randomNumber.includes(digit)) {
      randomNumber += digit;
    }
  }

  return +randomNumber;
}

module.exports = {
  generateRandomNumber,
};
