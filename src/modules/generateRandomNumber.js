'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
const generateRandomNumber = () => {
  const numberArr = [];

  numberArr.push(Math.floor(Math.random() * 9) + 1);

  while (numberArr.length < 4) {
    const char = Math.floor(Math.random() * 10);

    if (!numberArr.includes(char)) {
      numberArr.push(char);
    }
  }

  const number = +numberArr.join('');

  return number;
};

module.exports = {
  generateRandomNumber,
};
