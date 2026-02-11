'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = '';

  const firstDigitIndex = Math.floor(Math.random() * 9) + 1;
  const firstDigit = digits.splice(firstDigitIndex, 1)[0];

  result += firstDigit;

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const nextDigit = digits.splice(randomIndex, 1)[0];

    result += nextDigit;
  }

  return parseInt(result);
}

module.exports = {
  generateRandomNumber,
};
