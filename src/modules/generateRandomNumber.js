'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numbers = [];
  const [start, end] = [1, 9];

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  let result = '';

  for (let i = 0; i < 4; i++) {
    const roundIndex = Math.floor(Math.random() * numbers.length);

    result += numbers[roundIndex];
    numbers.splice(roundIndex, 1);
  }

  return +result;
}

module.exports = {
  generateRandomNumber,
};
