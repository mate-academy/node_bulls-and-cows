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
  const userInputString = userInput.toString();
  const numberToGuessString = numberToGuess.toString();
  const bullsAndCows = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < numberToGuessString.length; i++) {
    if (numberToGuessString[i] === userInputString[i]) {
      bullsAndCows.bulls++;
    } else if (numberToGuessString.includes(userInputString[i])) {
      bullsAndCows.cows++;
    }
  }

  return bullsAndCows;
}

module.exports = {
  getBullsAndCows,
};
