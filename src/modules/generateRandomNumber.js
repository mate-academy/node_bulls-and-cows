'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const availableDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const randomDigits = [];

  const firstDigitIndex = Math.floor(Math.random() * 9) + 1;

  randomDigits.push(availableDigits.splice(firstDigitIndex, 1)[0]);

  while (randomDigits.length < 4) {
    const randomIndex = Math.floor(Math.random() * availableDigits.length);

    randomDigits.push(availableDigits.splice(randomIndex, 1)[0]);
  }

  return Number(randomDigits.join(''));
}

module.exports = {
  generateRandomNumber,
};
