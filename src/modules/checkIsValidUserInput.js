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
  if (userInput.length !== 4) {
    return false;
  } else if (userInput[0] === '0') {
    return false;
  } else if (!/^[0-9]+$/.test(userInput)) {
    return false;
  }

  const seen = new Set();

  for (const char of userInput) {
    if (seen.has(char)) {
      return false;
    }

    seen.add(char);
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
