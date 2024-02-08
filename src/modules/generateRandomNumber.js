'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function getRandomInt(max, min) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function generateRandomNumber() {
  let number = '';

  while (number.length !== 4) {
    let randomNumber = getRandomInt(0, 10);

    if (number.length === 0 && randomNumber === 0) {
      while (randomNumber === 0) {
        randomNumber = getRandomInt(0, 10);
      }
    }

    if (!number.includes(randomNumber.toString())) {
      number += randomNumber;
    }
  }

  return +number;
}

module.exports = {
  generateRandomNumber,
};
