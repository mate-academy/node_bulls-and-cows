'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let random = getFirstRandomDigit().toString();

  while (random.length < 4) {
    const digit = getRandomDigit().toString();

    if (!random.includes(digit)) {
      random += digit;
    }
  }

  return +random;
}

function getFirstRandomDigit() {
  return Math.floor(1 + Math.random() * 10);
}

function getRandomDigit() {
  return Math.floor(Math.random() * 10);
}

module.exports = {
  generateRandomNumber,
};
