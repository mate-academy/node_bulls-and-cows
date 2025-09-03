'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  if (digits[0] === 0) {
    for (let k = 1; k < digits.length; k++) {
      if (digits[k] !== 0) {
        [digits[0], digits[k]] = [digits[k], digits[0]];
        break;
      }
    }
  }

  const number = Number(digits.slice(0, 4).join(''));

  return number;
}

module.exports = {
  generateRandomNumber,
};
