'use strict';

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

  if (userInput[0] === '0' || userInput.length !== 4) {
    return false;
  }

  const uniqueChars = new Set(userInput.split(''));

  if (uniqueChars.size !== userInput.length) {
    return false;
  }

  const re = /^[0-9]+$/;

  return re.test(userInput);
}

module.exports = {
  checkIsValidUserInput,
};
