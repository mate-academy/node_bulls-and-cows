'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let randomNum = '';

  randomNum += Math.floor(Math.random() * 9) + 1;

  while (randomNum.length !== 4) {
    const num = Math.floor(Math.random() * 10);

    if (!randomNum.includes(num)) {
      randomNum += num;
    }
  }

  return +randomNum;
}

module.exports = {
  generateRandomNumber,
};
