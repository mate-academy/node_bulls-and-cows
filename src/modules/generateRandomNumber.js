'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const availableNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [];

  const getRandomN = () => Math.floor(Math.random() * availableNums.length);

  result.push(availableNums.splice(getRandomN(), 1)[0]);
  availableNums.unshift(0);

  while (result.length < 4) {
    result.push(availableNums.splice(getRandomN(), 1)[0]);
  }

  return Number(result.join(''));
}

module.exports = {
  generateRandomNumber,
};
