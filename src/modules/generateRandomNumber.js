'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const setNums = new Set();

  while (setNums.size < 4) {
    const num = Math.floor(Math.random() * 10);

    if (num === 0 && setNums.size === 0) {
      continue;
    }

    setNums.add(num);
  }

  const randomNumber = Number(Array.from(setNums).join(''));

  return randomNumber;
}

module.exports = {
  generateRandomNumber,
};
