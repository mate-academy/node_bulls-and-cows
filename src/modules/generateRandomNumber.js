'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let randomNumber = '';

  for (let i = 0; i < 4; i++) {
    let newValue = Math.floor(Math.random() * 10);

    while (randomNumber.includes(newValue)) {
      newValue = Math.floor(Math.random() * 10);
    }

    if (i === 0) {
      while (newValue === 0) {
        newValue = Math.floor(Math.random() * 10);
      }
    }

    randomNumber += newValue;
  }

  return +randomNumber;
}

module.exports = {
  generateRandomNumber,
};
