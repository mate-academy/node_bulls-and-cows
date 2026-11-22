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
  const hasValidLength = userInput.length === 4;
  const hasOnlyDigits = userInput
    .split('')
    .every((char) => '0123456789'.includes(char));
  const hasValidFirstDigit = userInput[0] !== '0';
  const uniqueDigits = new Set(userInput);
  const hasUniqueDigits = uniqueDigits.size === 4;

  return (
    hasValidLength && hasOnlyDigits && hasValidFirstDigit && hasUniqueDigits
  );
}

module.exports = {
  checkIsValidUserInput,
};
