'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [];

  const firstIndex = Math.floor(Math.random() * digits.length);

  result.push(digits.splice(firstIndex, 1)[0]);

  digits.push(0);

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    result.push(digits.splice(randomIndex, 1)[0]);
  }

  return Number(result.join(''));
}

module.exports = {
  generateRandomNumber,
};
