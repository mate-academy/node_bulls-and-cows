'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numbers = [];

  const firstDigit = Math.floor(Math.random() * 9) + 1;

  numbers.push(firstDigit);

  while (numbers.length < 4) {
    const newNumber = Math.floor(Math.random() * 10);

    if (!numbers.includes(newNumber)) {
      numbers.push(newNumber);
    }
  }

  return Number(numbers.join(''));
}

module.exports = {
  generateRandomNumber,
};
