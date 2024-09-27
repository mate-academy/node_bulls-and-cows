'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const listOfNumbers = [];

  for (let i = 0; listOfNumbers.length < 4; i++) {
    const randNumber = Math.floor(Math.random() * 9) + 1;

    if (listOfNumbers.includes(randNumber)) {
      continue;
    }

    listOfNumbers.push(randNumber);
  }

  return parseInt(listOfNumbers.join(''));
}

module.exports = { generateRandomNumber };
