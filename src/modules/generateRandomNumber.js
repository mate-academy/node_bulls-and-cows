'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function generateRandomNumber() {
  const digits = new Set();

  const firstDigit = Math.floor(1 + Math.random() * 9);

  digits.add(firstDigit);

  while (digits.size < 4) {
    const randomDigit = Math.floor(Math.random() * 10);

    digits.add(randomDigit);
  }

  return Number(Array.from(digits).join(''));
}

module.exports = {
  generateRandomNumber,
};
