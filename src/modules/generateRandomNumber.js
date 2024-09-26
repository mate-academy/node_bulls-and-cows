'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const randomNumbers = [];
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  while (randomNumbers.length < 4) {
    let index;
    const randomNumber = Math.random() * (digits.length - 1);

    if (!randomNumbers.length) {
      index = Math.ceil(randomNumber);
    } else {
      index = Math.floor(randomNumber);
    }

    randomNumbers.push(digits.splice(index, 1));
  }

  return Number(randomNumbers.join(''));
}

module.exports = {
  generateRandomNumber,
};
