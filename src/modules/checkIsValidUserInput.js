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
  const input = new Set(userInput.split(''));
  const keys = input.keys();
  const hasNoneNumeric = [...input].some((value) => {
    return !Number.isFinite(Number(value));
  });

  if (
    hasNoneNumeric ||
    input.size !== 4 ||
    userInput.startsWith('0') ||
    keys.next().value === '0'
  ) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
