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
  const correctNumbers = numberToGuess.toString().split('');

  return userInput
    .toString()
    .split('')
    .reduce(
      (prev, curr, i) => {
        if (curr === correctNumbers[i]) {
          return {
            ...prev,
            bulls: prev.bulls + 1,
          };
        }

        if (correctNumbers.includes(curr)) {
          return {
            ...prev,
            cows: prev.cows + 1,
          };
        }

        return prev;
      },
      { bulls: 0, cows: 0 },
    );
}

module.exports = {
  getBullsAndCows,
};
