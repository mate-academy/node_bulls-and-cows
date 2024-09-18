'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let digits = '123456789';
  let randomNumber = '';

  for (let i = 0; i < 4; i++) {
    const min = 0;
    const max = digits.length - 1;
    const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);

    randomNumber += digits[randomIndex];

    digits = digits.slice(0, randomIndex) + digits.slice(randomIndex + 1);
  }

  return +randomNumber;
}

module.exports = {
  generateRandomNumber,
};
