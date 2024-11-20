'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function isValid(num) {
  const digits = num.toString().split('');
  const digitSet = new Set(digits);

  return digitSet.size === 4;
}

function generateRandomNumber() {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 9000) + 1000;
  } while (!isValid(randomNumber));

  return randomNumber;
}

module.exports = {
  generateRandomNumber,
};
