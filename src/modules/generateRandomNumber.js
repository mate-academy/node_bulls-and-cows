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
    if (randomNumber.length === 0) {
      randomNumber += Math.floor(Math.random() * 9) + 1;
    }

    const randomDigit = Math.floor(Math.random() * 10);

    if (!randomNumber.includes(randomDigit)) {
      randomNumber += randomDigit;
    }
  }

  return +randomNumber;
}

module.exports = {
  generateRandomNumber,
};
