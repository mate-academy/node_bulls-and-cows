'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const firstDigitIndex = Math.floor(Math.random() * 9) + 1;
  const firstDigit = digits.splice(firstDigitIndex, 1)[0];

  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  const otherDigits = digits.slice(0, 3);
  const randomNum = Number(firstDigit + otherDigits.join(''));

  return randomNum;
}

module.exports = {
  generateRandomNumber,
};
