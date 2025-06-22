'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numsArr = [];

  while (numsArr.length < 4) {
    const n = Math.floor(Math.random() * 10);

    if (!numsArr.includes(n)) {
      numsArr.push(n);
    }

    if (numsArr.length === 1 && numsArr[0] === 0) {
      numsArr.shift();
    }
  }

  return Number(numsArr.join(''));
}

module.exports = {
  generateRandomNumber,
};
