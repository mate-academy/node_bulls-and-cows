'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const length = 4;
  const arrNums = [];

  while (arrNums.length < length) {
    const num = Math.floor(Math.random() * 10);

    if (num === 0 && !arrNums.length) {
      continue;
    }

    if (arrNums.includes(num)) {
      continue;
    }

    arrNums.push(num);
  }

  return Number(arrNums.join(''));
}

module.exports = {
  generateRandomNumber,
};
