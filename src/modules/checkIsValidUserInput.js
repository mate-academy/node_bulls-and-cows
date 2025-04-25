'use strict';
/* eslint-disable no-console */

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  if (/^\d{4}$/.test(userInput) === false || userInput[0] === '0') {
    return false;
  }

  // Проверка на уникальность цифр
  const digits = new Set(userInput);

  if (digits.size !== 4) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
