'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randomNumbers = [];

  randomNumbers[0] = Math.floor(Math.random() * 9) + 1;

  while (randomNumbers.length < 4) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const randomNumber = digits.splice(randomIndex, 1)[0];

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return parseInt(randomNumbers.join(''));
}

module.exports = {
  generateRandomNumber,
};
