'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  function random() {
    const minNumber = 1000;
    const maxNumber = 10000;

    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  }

  let result = random().toString();
  let uniq = new Set(result);

  while (result[0] === '0' || uniq.size !== 4) {
    result = random().toString();
    uniq = new Set(result);
  }

  return parseInt(result);
}

module.exports = {
  generateRandomNumber,
};
