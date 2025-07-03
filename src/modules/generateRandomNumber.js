'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const nums = [];

  nums.push(Math.floor(Math.random() * 9) + 1);

  while (nums.length < 4) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (!nums.includes(randomDigit)) {
      nums.push(randomDigit);
    }
  }

  return +nums.join('');
}

module.exports = {
  generateRandomNumber,
};
