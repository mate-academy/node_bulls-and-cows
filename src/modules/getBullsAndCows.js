'use strict';
/* eslint-disable no-console */

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
  let cows = 0;
  let bulls = 0;
  const splittedGuess = String(userInput).split('');
  const splittedNumber = String(numberToGuess).split('');

  for (let i = 0; i < splittedGuess.length; i++) {
    if (splittedNumber.includes(splittedGuess[i])) {
      cows++;

      if (splittedNumber[i] === splittedGuess[i]) {
        cows--;
        bulls++;
      }
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
