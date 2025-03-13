'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const randomNumbers = [];

  while (randomNumbers.length < 4) {
    const randomNumber = 1 + Math.floor(Math.random() * 9);

    if (randomNumbers.indexOf(randomNumber) === -1) {
      randomNumbers.push(randomNumber);
    }
  }

  return +randomNumbers.join('');
}

module.exports = {
  generateRandomNumber,
};
