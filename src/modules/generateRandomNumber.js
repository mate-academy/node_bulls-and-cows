'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  let randomNumber = '';

  randomNumber += digits.splice(Math.floor(Math.random() * 9), 1);

  while (randomNumber.length < 4) {
    const index = Math.floor(Math.random() * digits.length);

    randomNumber += digits.splice(index, 1);
  }

  return parseInt(randomNumber, 10);
}

module.exports = {
  generateRandomNumber,
};
