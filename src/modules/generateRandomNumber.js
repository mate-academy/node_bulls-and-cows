'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const firstIndex = 1 + Math.floor(Math.random() * 9);
  let number = digits.splice(firstIndex, 1)[0];

  while (number.length < 4) {
    const index = Math.floor(Math.random() * digits.length);

    number += digits.splice(index, 1)[0];
  }

  return Number(number);
}

module.exports = {
  generateRandomNumber,
};
