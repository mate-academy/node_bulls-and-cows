'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const newArr = [Math.floor(Math.random() * 9) + 1];

  while (newArr.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!newArr.includes(digit)) {
      newArr.push(digit);
    }
  }

  return Number(newArr.join(''));
}

module.exports = {
  generateRandomNumber,
};
