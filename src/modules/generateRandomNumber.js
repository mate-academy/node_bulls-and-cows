'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const firstIndex = Math.floor(Math.random() * 9) + 1;

  const firtstDigit = numbers.splice(firstIndex, 1)[0];

  let number = firtstDigit;

  for (let i = 0; i <= 2; i++) {
    const index = Math.floor(Math.random() * numbers.length);

    number += numbers.splice(index, 1)[0];
  }

  return +number;
}

module.exports = {
  generateRandomNumber,
};
