'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let result = '';

  const digits = Array.from({ length: 10 }, (_, i) => i.toString());
  const firstDigitIndex = Math.floor(Math.random() * 9) + 1;

  result += digits[firstDigitIndex];
  digits.splice(firstDigitIndex, 1);

  for (let i = 0; i < 3; i++) {
    const remainingDigitIndex = Math.floor(Math.random() * digits.length);

    result += digits[remainingDigitIndex];
    digits.splice(remainingDigitIndex, 1);
  }

  return parseInt(result, 10);
}

module.exports = {
  generateRandomNumber,
};
