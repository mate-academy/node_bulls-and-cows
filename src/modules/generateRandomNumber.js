'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number}
 */
function generateRandomNumber() {
  const numbers = [];

  numbers.push(Math.floor(Math.random() * 9) + 1);

  while (numbers.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return Number(numbers.join(''));
}

module.exports = {
  generateRandomNumber,
};
