'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const numberToGuess = [];

  for (let i = 0; i < 4; ) {
    const min = 0;
    const max = 9;

    const randmonNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (!numberToGuess.includes(randmonNumber)) {
      i++;

      numberToGuess.push(randmonNumber);
    }

    continue;
  }

  if (numberToGuess[0] === 0) {
    return generateRandomNumber();
  }

  return Number(numberToGuess.join(''));
}

module.exports = {
  generateRandomNumber,
};
