'use strict';

// const { generateRandomNumber } = require('./generateRandomNumber');

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */

function checkIsValidUserInput(userInput) {
  if (typeof userInput !== 'string') {
    return false;
  }

  if (userInput.length !== 4) {
    return false;
  }

  if (userInput[0] === '0') {
    return false;
  }

  if (!/^\d{4}$/.test(userInput)) {
    return false;
  }

  const set = new Set(userInput);

  if (set.size !== 4) {
    return false;
  }

  return true;
}

// const generated = generateRandomNumber();

module.exports = {
  checkIsValidUserInput,
};
