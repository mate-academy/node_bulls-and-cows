'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [];
  const availableDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const firstDigitIndex = Math.floor(1 + Math.random() * 9);

  digits.push(availableDigits.splice(firstDigitIndex, 1)[0]);

  while (digits.length < 4) {
    const randomIndex = Math.floor(Math.random() * availableDigits.length);

    digits.push(availableDigits.splice(randomIndex, 1)[0]);
  }

  return +digits.join('');
}

module.exports = {
  generateRandomNumber,
};
