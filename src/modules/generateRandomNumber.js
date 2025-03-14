'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const newNum = [];

  const getRandom = () => Math.floor(Math.random() * 10);

  do {
    const n = getRandom();

    if (newNum.length === 0 && n === 0) {
      continue;
    }

    if (newNum.includes(n)) {
      continue;
    }

    newNum.push(n);
  } while (newNum.length < 4);

  return +newNum.join('');
}

module.exports = {
  generateRandomNumber,
};
