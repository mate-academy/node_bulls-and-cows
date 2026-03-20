'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function getRandomInt(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

function generateRandomNumber() {
  const randomNumberComponents = [];

  randomNumberComponents.push(getRandomInt(1, 9));

  while (randomNumberComponents.length < 4) {
    const valueToPush = getRandomInt(0, 9);
    const isAlreadyInArray = randomNumberComponents.includes(valueToPush);

    if (isAlreadyInArray) {
      continue;
    }

    randomNumberComponents.push(valueToPush);
  }

  return +randomNumberComponents.join('');
}

module.exports = {
  generateRandomNumber,
};
