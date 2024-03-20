'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

function generateRandomNumber() {
  const numbersArr = [];

  while (numbersArr.length !== 4) {
    const randomDigit = randomInteger(0, 9);

    if (numbersArr.length === 0 && randomDigit === 0) {
      continue;
    }

    if (!numbersArr.includes(randomDigit)) {
      numbersArr.push(randomDigit);
    }
  }

  return +numbersArr.join('');
}

module.exports = {
  generateRandomNumber,
};
