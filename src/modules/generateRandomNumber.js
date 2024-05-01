'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let randomNumber = '';

  randomNumber += Math.floor(Math.random() * 9) + 1;

  while (randomNumber.length < 4) {
    const randomNum = Math.floor(Math.random() * 10);

    if (!randomNumber.includes(randomNum)) {
      randomNumber += randomNum;
    }
  }

  return parseInt(randomNumber);
}

module.exports = {
  generateRandomNumber,
};
