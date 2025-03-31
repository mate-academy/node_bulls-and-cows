'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const firstDigit = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  const number = [];

  number.push(firstDigit);

  while (number.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!number.includes(digit)) {
      number.push(digit);
    }
  }

  return Number(number.join(''));
}

module.exports = {
  generateRandomNumber,
};
