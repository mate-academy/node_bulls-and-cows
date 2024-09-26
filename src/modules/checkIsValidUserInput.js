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
  if (userInput.startsWith('0')) {
    return false;
  }

  if (userInput.length !== 4) {
    return false;
  }

  const uniqueValues = new Set(userInput.split(''));

  return (
    Array.from(uniqueValues.values()).filter((i) => !Number.isNaN(Number(i)))
      .length === 4
  );
}

module.exports = {
  checkIsValidUserInput,
};
