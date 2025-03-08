'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numbers = [];

  numbers.push(Math.floor(Math.random() * 9) + 1);

  while (numbers.length < 4) {
    const number = Math.floor(Math.random() * 10);

    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }

  return +numbers.join('');
}

module.exports = {
  generateRandomNumber,
};
