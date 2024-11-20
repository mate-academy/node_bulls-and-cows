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
  if (!/^\d+$/.test(userInput)) {
    return false;
  }

  if (userInput.length !== 4 || userInput[0] === '0') {
    return false;
  }

  const notUniqueDigits = new Set();

  for (let i = 0; i < userInput.length; i++) {
    if (notUniqueDigits.has(userInput[i])) {
      return false;
    }

    notUniqueDigits.add(userInput[i]);
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
