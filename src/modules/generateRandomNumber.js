'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
const getRandomDigit = () => {
  return Math.floor(0 + (10) * Math.random());
};

function generateRandomNumber() {
  const result = [];

  for (let i = 0; i < 4; i++) {
    let newDigit = getRandomDigit();

    while (!result.length && newDigit === 0) {
      newDigit = getRandomDigit();
    }

    if (!result.includes(newDigit)) {
      result.push(newDigit);
    } else {
      i--;
    }
  }

  return Number(result.join(''));
}

module.exports = {
  generateRandomNumber,
};
