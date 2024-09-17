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
  const result = {
    bulls: 0,
    cows: 0,
  };

  const userInputStr = userInput.toString();
  const numberToGuessStr = numberToGuess.toString();

  const guessedDigits = new Set(numberToGuessStr.split(''));

  for (let i = 0; i < userInputStr.length; i++) {
    if (userInputStr.charAt(i) === numberToGuessStr.charAt(i)) {
      result.bulls++;
    } else if (guessedDigits.has(userInputStr.charAt(i))) {
      result.cows++;
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
