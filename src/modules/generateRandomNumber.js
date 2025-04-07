'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Fisher–Yates shuffle
  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  // Ensure the first digit is not 0
  if (digits[0] === '0') {
    for (let i = 1; i < digits.length; i++) {
      if (digits[i] !== '0') {
        [digits[0], digits[i]] = [digits[i], digits[0]];
        break;
      }
    }
  }

  return parseInt(digits.slice(0, 4).join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
