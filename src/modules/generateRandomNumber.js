'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let randomNumber;
  let isValid = false;

  while (!isValid) {
    randomNumber = Math.floor(1000 + Math.random() * 9000);

    if (randomNumber.toString().length === 4) {
      const uniqueDigits = new Set(randomNumber.toString());

      if (uniqueDigits.size === 4) {
        isValid = true;
      }
    }
  }

  return randomNumber;
}

module.exports = {
  generateRandomNumber,
};
