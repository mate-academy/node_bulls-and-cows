'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [];

  digits.push(Math.floor(Math.random() * 9) + 1);

  while (digits.length < 4) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (
      !digits.includes(randomDigit) &&
      (digits.length !== 0 || randomDigit !== 0)
    ) {
      digits.push(randomDigit);
    }
  }

  // Convert array to a number and return the 4-digit number
  return parseInt(digits.join(''), 10);
}

module.exports = { generateRandomNumber };
