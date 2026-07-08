'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const uniqueDigits = new Set();

  const firstDigit = Math.floor(Math.random() * 9) + 1;

  uniqueDigits.add(firstDigit);

  while (uniqueDigits.size < 4) {
    const nextDigit = Math.floor(Math.random() * 10);

    uniqueDigits.add(nextDigit);
  }

  return Number(Array.from(uniqueDigits).join(''));
}

module.exports = {
  generateRandomNumber,
};
