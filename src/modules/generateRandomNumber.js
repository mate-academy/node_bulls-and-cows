'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const totalLength = 4;
  const digitsArr = Array.from({ length: 10 }, (_, index) => index);

  let resultString = '';

  for (let i = 0; i < totalLength; i++) {
    const randomIdx
      = i === 0
        ? Math.floor(Math.random() * (digitsArr.length - 1)) + 1
        : Math.floor(Math.random() * digitsArr.length);

    resultString += digitsArr[randomIdx];

    digitsArr.splice(randomIdx, 1);
  }

  return parseInt(resultString);
}

module.exports = {
  generateRandomNumber,
};
