'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const result = [getRandomInt(1, 9)];

  while (result.length < 4) {
    const newNum = getRandomInt(0, 9);
    let isNewNum = true;

    for (let i = 0; i < result.length; i++) {
      if (result[i] === newNum) {
        isNewNum = false;
      }
    }

    if (isNewNum) {
      result.push(newNum);
    }
  }

  return Number(result.join(''));
}

module.exports = {
  generateRandomNumber,
};
