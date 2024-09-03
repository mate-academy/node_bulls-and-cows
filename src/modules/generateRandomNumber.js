'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function generateRandomNumber() {
  const availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randomNumber = [];

  for (let i = 0; i < 4; i++) {
    const currentNumber = Math.floor(Math.random() * availableNumbers.length);

    randomNumber.push(availableNumbers[currentNumber]);
    availableNumbers.splice(currentNumber, 1);

    if (i === 0) {
      availableNumbers.push(0);
    }
  }

  return +randomNumber.join('');
}

module.exports = {
  generateRandomNumber,
};
