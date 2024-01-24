'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numberLength = 4;
  const firstNum = Math.floor(Math.random() * 9 + 1);
  const numbers = [firstNum];

  while (numbers.length < numberLength) {
    const newNumber = Math.floor(Math.random() * 10);

    if (numbers.includes(newNumber)) {
      continue;
    }

    numbers.push(newNumber);
  }

  return +numbers.join('');
}

module.exports = {
  generateRandomNumber,
};
