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
  const cleanInput = String(userInput || '').trim();

  const hasFourDigits = /^\d{4}$/.test(cleanInput);
  const doesNotStartWithZero = cleanInput[0] !== '0';
  const hasUniqueDigits = new Set(cleanInput).size === 4;

  return hasFourDigits && doesNotStartWithZero && hasUniqueDigits;
}

module.exports = {
  checkIsValidUserInput,
};
