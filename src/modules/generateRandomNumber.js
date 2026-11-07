'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function generateRandomNumber() {
  const firstRandomNumber = getRandomInt(1, 10);

  const randomNumbers = [firstRandomNumber];
  const usedRandomNumbers = [firstRandomNumber];

  while (randomNumbers.length < 4) {
    const newRandomNumber = getRandomInt(0, 10);

    if (!usedRandomNumbers.includes(newRandomNumber)) {
      usedRandomNumbers.push(newRandomNumber);
      randomNumbers.push(newRandomNumber);
    }
  }

  return +randomNumbers.join('');
}

module.exports = {
  generateRandomNumber,
};
