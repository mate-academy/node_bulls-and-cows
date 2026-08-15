'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let numbers = '';

  while (numbers.length < 4) {
    const randNumb = Math.floor(Math.random() * 9) + 1;

    if (!numbers.includes(randNumb)) {
      numbers += randNumb;
    } else {
      continue;
    }
  }

  return +numbers;
}

module.exports = {
  generateRandomNumber,
};
