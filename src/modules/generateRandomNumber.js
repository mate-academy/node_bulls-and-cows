'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  const result = new Set();

  while (result.size !== 4) {
    result.add(getRandomIntInclusive(1, 9));
  }

  return +[...result].join('');
}

module.exports = {
  generateRandomNumber,
};
