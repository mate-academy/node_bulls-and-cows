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
  const result = { bulls: 0, cows: 0 };

  const secret = String(numberToGuess).split('');
  const guess = String(userInput).split('');

  for (let i = 0; i < 4; i++) {
    if (guess[i] === secret[i]) {
      result.bulls++;

      secret[i] = null;
      guess[i] = null;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (guess[i] !== null) {
      const indexInSecret = secret.indexOf(guess[i]);

      if (indexInSecret !== -1) {
        result.cows++;
        secret[indexInSecret] = null;
      }
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
