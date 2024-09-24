'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
export default function checkIsValidUserInput(userInput) {
  const usersNum = String(userInput).split('');
  const unic = new Set(userInput);

  if (
    usersNum.length !== 4 ||
    !/^\d+$/.test(userInput) ||
    userInput[0].includes('0') ||
    unic.size < 4
  ) {
    return false;
  }

  return true;
}
