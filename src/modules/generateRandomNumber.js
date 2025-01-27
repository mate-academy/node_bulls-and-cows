'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const nums = [];

  while (nums.length < 4) {
    const num = Math.floor(Math.random() * 10);

    if (!nums.includes(num) && num !== 0) {
      nums.push(num);
    }
  }

  return Number(nums.join(''));
}

module.exports = {
  generateRandomNumber,
};
