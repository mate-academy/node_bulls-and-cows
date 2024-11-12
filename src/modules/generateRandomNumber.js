'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const availableDigits = [...digits];
  let number = '';

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * availableDigits.length);
    const randomDigit = availableDigits[randomIndex];

    number = number.concat(randomDigit);
    availableDigits.splice(randomIndex, 1);
  }

  return Number(number);
}

module.exports = {
  generateRandomNumber,
};
