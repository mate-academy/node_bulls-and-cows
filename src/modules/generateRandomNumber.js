'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const randomNumberArr = [Math.floor(Math.random() * 9 + 1)];

  while (randomNumberArr.length < 4) {
    const randNum = Math.floor(Math.random() * 10);

    if (!randomNumberArr.includes(randNum)) {
      randomNumberArr.push(randNum);
    }
  }

  return +randomNumberArr.join('');
}

module.exports = {
  generateRandomNumber,
};
