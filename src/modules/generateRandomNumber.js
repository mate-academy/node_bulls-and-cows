'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const generatedNumsArr = [];

  for (let i = 0; i < 4; i++) {
    const pickingNumberIndex = Math.floor(Math.random() * nums.length);

    generatedNumsArr.push(nums[pickingNumberIndex]);
    nums.splice(pickingNumberIndex, 1);
  }
  /* Write your code here */

  return +generatedNumsArr.join('');
}

module.exports = {
  generateRandomNumber,
};
