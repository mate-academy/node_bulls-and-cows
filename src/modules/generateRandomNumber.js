'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const randomNumbers = [];

  while (randomNumbers.length < 4) {
    const randomNumber = getRandomInt(10);

    if (randomNumbers.length === 0 && randomNumber === 0) {
      continue;
    } else if (randomNumbers.includes(randomNumber)) {
      continue;
    }

    randomNumbers.push(randomNumber);
  }

  return Number(randomNumbers.join(''));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
  generateRandomNumber,
};
