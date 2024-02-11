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
 *

 */

function getBullsAndCows(userInput, numberToGuess) {
  const arrToGues = numberToGuess.toString().split('');
  const arrInput = userInput.toString().split('');

  const result = {
    bulls: 0,
    cows: 0,
  };

  arrToGues.forEach((digit, index) => {
    if (digit === arrInput[index]) {
      result.bulls++;
    }
  });

  arrToGues.forEach((digit) => {
    if (arrInput.includes(digit)) {
      result.cows++;
    }
  });

  result.cows = result.cows - result.bulls;

  return result;
}

module.exports = {
  getBullsAndCows,
};
