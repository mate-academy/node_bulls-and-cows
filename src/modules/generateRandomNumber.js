'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numArr = [Math.floor(Math.random() * 9) + 1];

  while (numArr.length < 4) {
    const newNum = Math.floor(Math.random() * 10);

    if (!numArr.includes(newNum)) {
      numArr.push(newNum);
    }
  }

  return +numArr.join('');
}

module.exports = {
  generateRandomNumber,
};
