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
  const guessedDigits = [...numberToGuess.toString()];
  const userDigits = [...userInput.toString()];

  const initResult = {
    bulls: 0,
    cows: 0,
  };

  return userDigits.reduce((result, item, index) => {
    if (guessedDigits[index] === item) {
      return {
        ...result,
        bulls: result.bulls + 1,
      };
    }

    if (guessedDigits.includes(item)) {
      return {
        ...result,
        cows: result.cows + 1,
      };
    }

    return result;
  }, initResult);
}

module.exports = {
  getBullsAndCows,
};
