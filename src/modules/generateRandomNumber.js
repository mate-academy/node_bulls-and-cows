'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const randomArr = [];
  let n;

  for (let i = 0; i < 4; i++) {
    do {
      n = Math.floor(Math.random() * 9) + 1;
    } while (randomArr.indexOf(n) !== -1);

    randomArr[i] = n;
  }

  return +randomArr.join('');
}

module.exports = { generateRandomNumber };
