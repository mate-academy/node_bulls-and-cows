'use strict';

function generateRandomDigit(existedNumbers = [], min = 1, max = 10) {
  let digit = min;

  do {
    digit = Math.floor(Math.random() * max);
  } while (digit < min || existedNumbers.includes(digit));

  return digit;
}

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const nums = [generateRandomDigit()];

  for (let i = 0; i < 3; i++) {
    nums.push(generateRandomDigit(nums, 0));
  }

  return +nums.map((n) => String(n)).join('');
}

module.exports = {
  generateRandomNumber,
};
