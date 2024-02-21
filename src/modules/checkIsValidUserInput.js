/* eslint-disable no-console */
'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */

const { checkAreDuplicateDigits } = require('./generateRandomNumber');

function checkIsValidUserInput(userInput) {
  if (userInput.length !== 4 || isNaN(userInput)) {
    console.log('You should input 4-digit number');

    return false;
  }

  if (userInput[0] === '0') {
    console.log('Number cannot start with 0');

    return false;
  }

  if (checkAreDuplicateDigits(userInput)) {
    console.log('Number cannot have duplicate digits');

    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
