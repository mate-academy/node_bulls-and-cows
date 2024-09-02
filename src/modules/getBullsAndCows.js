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
  const initialScore = { bulls: 0, cows: 0 };
  const normUserInput = '' + userInput;
  const normNumberToGuess = '' + numberToGuess;

  for (let i = 0; i < normNumberToGuess.length; i++) {
    if (normUserInput[i] === normNumberToGuess[i]) {
      initialScore.bulls = initialScore.bulls + 1;
    } else if (normNumberToGuess.includes(normUserInput[i])) {
      initialScore.cows = initialScore.cows + 1;
    }
  }

  return initialScore;
}

module.exports = {
  getBullsAndCows,
};
