'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const availableNumbers = Array.from({ length: 10 }, (_, i) => i);
  const nums = [];

  const firstIndex = Math.floor(Math.random() * 9) + 1;
  const firstDigit = availableNumbers[firstIndex];

  nums.push(firstDigit);
  availableNumbers.splice(firstIndex, 1);

  while (nums.length < 4) {
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);

    nums.push(availableNumbers[randomIndex]);
    availableNumbers.splice(randomIndex, 1);
  }

  return Number(nums.join(''));
}

module.exports = {
  generateRandomNumber,
};
