'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numbers = [];

  numbers[0] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;

  let i = 1;

  while (i < 4) {
    numbers[i] = Math.floor(Math.random() * 10);

    let achouRepetido = false;

    for (let y = i - 1; y >= 0; y--) {
      if (numbers[i] === numbers[y]) {
        achouRepetido = true;
        break;
      }
    }

    if (achouRepetido === false) {
      i++;
    }
  }

  const str = numbers.join('');

  return Number(str);
}

module.exports = {
  generateRandomNumber,
};
