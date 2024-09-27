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
  let isValid = false;
  const seenElement = [];

  if (userInput[0] === '0') {
    return false;
  }

  for (const el of userInput) {
    if (isNaN(parseInt(el))) {
      return false;
    }

    if (!seenElement.includes(el)) {
      seenElement.push(el);
    }
  }

  if (seenElement.length === 4) {
    isValid = true;
  }

  return isValid;
}

module.exports = { checkIsValidUserInput };
