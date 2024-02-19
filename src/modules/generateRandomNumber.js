'use strict';

function getRandomIndex(length, start = 0) {
  return Math.floor(Math.random() * (length - start)) + start;
}

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber(length = 4) {
  const availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numbers = Array.from({ length }, (_, i) => {
    const startFrom = i === 0 ? 1 : 0;
    const index = getRandomIndex(availableNumbers.length, startFrom);

    return availableNumbers.splice(index, 1)[0];
  });

  return Number(numbers.join(''));
}

module.exports = {
  generateRandomNumber,
};
