'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let randomNumber;

  do {
    randomNumber = Math.floor(1000 + Math.random() * 9000);

    const digits = randomNumber.toString().split('');
    const uniqueDigits = new Set(digits);

    if (uniqueDigits.size !== 4) {
      randomNumber = 0;
    }
  } while (randomNumber === 0);

  return randomNumber;
}

module.exports = {
  generateRandomNumber,
};
