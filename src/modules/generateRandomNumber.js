'use strict';

const { checkIsValidUserInput } = require('./checkIsValidUserInput');

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const generateNumber = Math.floor(1000 + Math.random() * 9000);

  if (checkIsValidUserInput(generateNumber)) {
    return generateNumber;
  } else {
    return generateRandomNumber();
  }
}

module.exports = {
  generateRandomNumber,
};
