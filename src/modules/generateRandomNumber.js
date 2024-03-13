'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let res = '';

  while (res.length < 4) {
    const number = getRandom(0, 9);

    if (res.length === 0 && number === 0) {
      continue;
    }

    if (res.includes(number.toString())) {
      continue;
    }

    res += number;
  }

  return +res;

  function getRandom(min, max) {
    const number = min + Math.random() * (max + 1 - min);

    return Math.trunc(number);
  }
}

module.exports = {
  generateRandomNumber,
};
