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
  /* Write your code here */
  // const userInputStr = userInput.toString();

  const is4digitNumber = userInput.length === 4;
  const isAllAreNumbers = userInput.split('').every((x) => /^[0-9]$/.test(x));
  const isNotStartZero = userInput[0] !== '0';
  const isNotDuplicates = userInput
    .split('')
    .every((x, _, arr) => arr.indexOf(x) === arr.lastIndexOf(x));

  if (is4digitNumber && isAllAreNumbers && isNotStartZero && isNotDuplicates) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  checkIsValidUserInput,
};
