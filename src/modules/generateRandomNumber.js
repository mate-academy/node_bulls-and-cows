'use strict';

function randomIntRange(start, end) {
  return Math.trunc(Math.random() * (end - start) + start);
}

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const resultNumbers = [];

  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      const randElement = allNumbers.splice(
        randomIntRange(1, allNumbers.length - 1),
        1,
      );

      resultNumbers.push(...randElement);
    } else {
      const randElement = allNumbers.splice(
        randomIntRange(0, allNumbers.length - 1),
        1,
      );

      resultNumbers.push(...randElement);
    }
  }

  // return [resultNumbers].toString();

  return Number(resultNumbers.join(''));
}

module.exports = {
  generateRandomNumber,
};
