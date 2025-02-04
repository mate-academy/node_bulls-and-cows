'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const list = [];

  for (let i = 0; list.length < 4; i++) {
    const randomNumber = Math.floor(Math.random() * 9) + 1;

    if (list.includes(randomNumber)) {
      continue;
    }
    list.push(randomNumber);
  }

  return parseInt(list.join(''));
}

module.exports = {
  generateRandomNumber,
};
