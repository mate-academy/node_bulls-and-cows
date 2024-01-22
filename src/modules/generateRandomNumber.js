'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const number = [];

  while (number.length < 4) {
    let randomNumber = 0;

    if (number.length === 0) {
      randomNumber = Math.floor(Math.random() * 8) + 1;
    } else {
      do {
        randomNumber = Math.floor(Math.random() * 9);
      } while (number.includes(randomNumber));
    }

    number.push(randomNumber);
  }

  return Number([...number].join(''));
}

module.exports = {
  generateRandomNumber,
};
