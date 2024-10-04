'use strict';

const { passRules } = require('../utils/passRules');

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  return passRules(userInput);
}

module.exports = {
  checkIsValidUserInput,
};
