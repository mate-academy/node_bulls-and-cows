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
  const stringNumberToGess = numberToGuess.toString();
  const stringUserInput = userInput.toString();

  const result = stringUserInput.split('').reduce(
    (acc, ch, idx) => {
      if (ch === stringNumberToGess[idx]) {
        return { ...acc, bulls: acc.bulls + 1 };
      }

      if (stringNumberToGess.includes(ch)) {
        return { ...acc, cows: acc.cows + 1 };
      }

      return acc;
    },
    { bulls: 0, cows: 0 },
  );

  return result;
}

module.exports = {
  getBullsAndCows,
};
