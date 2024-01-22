'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = Array.from({ length: 9 }, (_, index) => index + 1);

  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  if (digits[0] === 0) {
    [digits[0], digits[1]] = [digits[1], digits[0]];
  }

  const randomNumber = parseInt(digits.slice(0, 4).join(''));

  return randomNumber;
}

module.exports = {
  generateRandomNumber,
};
