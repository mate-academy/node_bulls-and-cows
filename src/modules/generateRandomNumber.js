'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const availableDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arrayOfRandomDigits = [];

  const numberLength = 4;

  const firstDigitIndex =
    Math.floor(Math.random() * (availableDigits.length - 1)) + 1;

  arrayOfRandomDigits.push(availableDigits[firstDigitIndex]);
  availableDigits.splice(firstDigitIndex, 1);

  for (let i = 0; i < numberLength - 1; i++) {
    const randomDigitIndex = Math.floor(Math.random() * availableDigits.length);
    const randomDigit = availableDigits[randomDigitIndex];

    arrayOfRandomDigits.push(randomDigit);
    availableDigits.splice(randomDigitIndex, 1);
  }

  return parseInt(arrayOfRandomDigits.join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
