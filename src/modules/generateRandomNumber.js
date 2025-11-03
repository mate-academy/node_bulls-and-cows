'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const value = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const firstIndex = 1 + Math.floor(Math.random() * 9);
  const firstValue = value.splice(firstIndex, 1)[0];

  const secondIndex = Math.floor(Math.random() * 8);
  const secondValue = value.splice(secondIndex, 1)[0];

  const thirdIndex = Math.floor(Math.random() * 7);
  const thirdValue = value.splice(thirdIndex, 1)[0];

  const fourthIndex = Math.floor(Math.random() * 6);
  const fourthValue = value.splice(fourthIndex, 1)[0];

  const numberStr = firstValue + secondValue + thirdValue + fourthValue;

  return Number(numberStr);
}

module.exports = {
  generateRandomNumber,
};
