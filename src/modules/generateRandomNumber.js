'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [];
  const digit1 = Math.ceil(Math.random() * 9);

  digits.push(digit1);

  let digit2 = null;
  let digit3 = null;
  let digit4 = null;

  while (digit2 === null || digits.includes(digit2)) {
    digit2 = Math.floor(Math.random() * 10);
  }

  digits.push(digit2);

  while (digit3 === null || digits.includes(digit3)) {
    digit3 = Math.floor(Math.random() * 10);
  }

  digits.push(digit3);

  while (digit4 === null || digits.includes(digit4)) {
    digit4 = Math.floor(Math.random() * 10);
  }

  digits.push(digit4);

  return +digits.join('');
}

module.exports = {
  generateRandomNumber,
};
