'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumber() {
  let randomNumber = '';

  while (randomNumber.length < 4) {
    const number = getRndInteger(0, 9);

    if (number === 0 && randomNumber.length < 1) {
      continue;
    }

    if (randomNumber.includes(String(number))) {
      continue;
    }

    randomNumber += number;
  }

  return +randomNumber;
}

module.exports = {
  generateRandomNumber,
};
