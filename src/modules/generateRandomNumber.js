'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = new Set();

  const firstDigit = Math.floor(Math.random() * 4) + 1;

  digits.add(firstDigit);

  while (digits.size < 4) {
    const randomDigit = Math.floor(Math.random() * 5);

    digits.add(randomDigit);
  }

  const randomNumber = parseInt([...digits].join(''));

  return randomNumber;
}

module.exports = {
  generateRandomNumber,
};
