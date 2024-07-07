'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const firstNumberIndex = Math.ceil(Math.random() * 9);
  const result = [numbers[firstNumberIndex]];

  numbers.splice(numbers[firstNumberIndex], 1);

  for (let i = 1; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);

    result.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }

  return +result.join('');
}

module.exports = {
  generateRandomNumber,
};
