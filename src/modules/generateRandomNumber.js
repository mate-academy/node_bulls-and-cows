'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let randomNumber = '';
  const previousNumbers = [];

  for (let i = 0; i < 4;) {
    const randomNum = Math.floor(Math.random() * 10);

    if (randomNum === 0 && i === 0) {
      continue;
    }

    if (previousNumbers.includes(randomNum)) {
      continue;
    }

    previousNumbers.push(randomNum);
    randomNumber += randomNum.toString();
    i++;
  }

  return +randomNumber;
}

module.exports = {
  generateRandomNumber,
};
