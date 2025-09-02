'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = Array.from({ length: 10 }, (_, i) => i);

  const firstDigitIndex = Math.floor(Math.random() * 9) + 1;
  const firstDigit = digits[firstDigitIndex];

  digits.splice(firstDigitIndex, 1);

  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  const numberStr = [firstDigit, ...digits.slice(0, 3)].join('');

  return +numberStr;
}

module.exports = {
  generateRandomNumber,
};
