'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [];

  while (digits.length < 4) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }

  while (digits[0] === 0) {
    const newFirstDigit = Math.floor(Math.random() * 9 + 1);

    if (!digits.includes(newFirstDigit)) {
      digits[0] = newFirstDigit;
    }
  }

  return +digits.join('');
}

module.exports = {
  generateRandomNumber,
};
