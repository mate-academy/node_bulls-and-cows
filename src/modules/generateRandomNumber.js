'use strict';

const { passRules } = require('../utils/passRules');

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const number = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

  if (passRules(number)) {
    return number;
  }

  return generateRandomNumber();
}

module.exports = {
  generateRandomNumber,
};
