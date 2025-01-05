'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  let numbers = '';

  while (numbers.length < 4) {
    const number = Math.floor(Math.random() * 9) + 1;

    if (!numbers.includes(number)) {
      numbers += number;
    }
  }

  return Number(numbers);
}

module.exports = {
  generateRandomNumber,
};
