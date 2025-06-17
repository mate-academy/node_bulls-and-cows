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
  const result = [];

  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  let firstDigitIndex = 0;

  while (digits[firstDigitIndex] === 0) {
    firstDigitIndex++;
  }
  result.push(digits[firstDigitIndex]);
  digits.splice(firstDigitIndex, 1);

  for (let i = 0; i < 3; i++) {
    result.push(digits[i]);
  }

  return Number(result.join(''));
}

module.exports = {
  generateRandomNumber,
};
