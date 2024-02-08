'use strict';

const { NUMBER_LENGTH } = require('./constants');

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput = '') {
  return userInput.length === NUMBER_LENGTH
    && [...userInput].every(item => !Number.isNaN(+item))
    && new Set(userInput).size === NUMBER_LENGTH
    && !!Number(userInput[0]);
}

module.exports = {
  checkIsValidUserInput,
};
