'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let str = '';

  while (str.length !== 4) {
    const randNum =
      str.length === 0
        ? Math.floor(Math.random() * 9 + 1)
        : Math.floor(Math.random() * 9 + 0);

    if (!str.includes(randNum.toString())) {
      str += randNum;
    }
  }

  return +str;
}

module.exports = {
  generateRandomNumber,
};
