'use strict';

const getRandomIndex = () => {
  return Math.floor(Math.random() * 10);
};

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const usedDigits = [];

  let randomNumber = '';

  while (randomNumber.length !== 4) {
    const index = getRandomIndex();

    if (usedDigits.includes(index)) {
      continue;
    }

    randomNumber += digits[index];
    usedDigits.push(index);
  }

  if (randomNumber.startsWith(0)) {
    randomNumber = randomNumber.slice(1) + 0;
  }

  return Number(randomNumber);
}

module.exports = {
  generateRandomNumber,
};
