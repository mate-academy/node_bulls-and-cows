'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const getNumber = () => Math.random().toString().slice(2, 6).split('');

  let set = new Set(getNumber());

  while (set.size < 4 || set.has('0')) {
    set = new Set(getNumber());
  }

  return +[...set.values()].join('');
}

module.exports = {
  generateRandomNumber,
};
