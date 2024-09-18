'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let resultString = '';

  const firstDigitIndex = Math.floor(Math.random() * 9 + 1);

  resultString += DIGITS[firstDigitIndex];
  DIGITS.splice(firstDigitIndex, 1);

  for (let i = 0; i < 3; i++) {
    const digitIndex = Math.floor(Math.random() * DIGITS.length);

    resultString += DIGITS[digitIndex];
    DIGITS.splice(digitIndex, 1);
  }

  return +resultString;
}

module.exports = {
  generateRandomNumber,
};
