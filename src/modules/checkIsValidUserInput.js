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
  if (userInput.length !== 4 || userInput.startsWith('0')) {
    return false;
  }

  const digits = userInput.split('');

  if (digits.some((v) => isNaN(v))) {
    return false;
  }

  return !Object.values(
    digits.reduce((obj, value) => {
      if (obj[value]) {
        obj[value] += 1;
      } else {
        obj[value] = 1;
      }

      return obj;
    }, {}),
  ).some((v) => v > 1);
}

module.exports = { checkIsValidUserInput };
