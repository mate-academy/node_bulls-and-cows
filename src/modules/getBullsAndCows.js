/* eslint no-console: [,{ allow: ["warn", "log", "error"] }] */
'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 * Assume that the user input and the number to guess
 * are always 4-digit numbers.
 *
 * @param {number} userInput - The user input
 * @param {number} numberToGuess - The number to guess
 * @return {object} An object containing the number of bulls and cows.
 * Example: { bulls: 1, cows: 2 }
 */
function getBullsAndCows(userInput, numberToGuess) {
  const result = { cows: 0, bulls: 0 };
  const stringToGuess = String(numberToGuess);
  const stringInput = String(userInput);

  for (let i = 0; i < 4; i++) {
    if (stringInput[i] === stringToGuess[i]) {
      result.bulls += 1;
      continue;
    }

    if (stringToGuess.includes(stringInput[i])) {
      result.cows += 1;
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
