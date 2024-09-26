'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const set = new Set();
  let index = 0;

  while (set.size < 4) {
    const newNumber = Math.floor(Math.random() * 10);

    if (index === 0 && newNumber === 0) {
      continue;
    }

    set.add(newNumber);
    index++;
  }

  return +Array.from(set).join('');
}

module.exports = {
  generateRandomNumber,
};
