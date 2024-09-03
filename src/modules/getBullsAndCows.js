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
  const userInputString = userInput.toString().split('');
  const numberToGuessString = numberToGuess.toString().split('');

  const bullsAndCows = userInputString.reduce(
    (acc, digit, index) => {
      if (numberToGuessString[index] === digit) {
        return {
          ...acc,
          bulls: acc.bulls + 1,
        };
      }

      if (numberToGuessString.includes(digit)) {
        return {
          ...acc,
          cows: acc.cows + 1,
        };
      }

      return acc;
    },
    { bulls: 0, cows: 0 },
  );

  return bullsAndCows;
}

module.exports = {
  getBullsAndCows,
};
