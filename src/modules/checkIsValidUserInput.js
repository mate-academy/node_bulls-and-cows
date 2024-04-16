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
  const uniq = [...new Set(String(userInput))].length;
  const isNum = userInput.replace(/[^0-9]/g, '').length;

  return (
    String(userInput)[0] !== '0' &&
    userInput.length === 4 &&
    uniq === 4 &&
    isNum === 4
  );
}

module.exports = {
  checkIsValidUserInput,
};
