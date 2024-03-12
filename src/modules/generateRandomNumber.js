'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numsArr = [];

  while (numsArr.length < 4) {
    const generated = Math.floor(Math.random() * 10);

    if (!numsArr.includes(generated)) {
      if (numsArr.length === 0 && generated === 0) {
        continue;
      }

      numsArr.push(generated);
    }
  }

  return +numsArr.join('');
}

module.exports = {
  generateRandomNumber,
};
