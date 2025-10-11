'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 * Assume that the user input and the number to guess
 * are always 4-digit numbers.
 *
 * @param {string|number} userInput - The user input
 * @param {string|number} numberToGuess - The number to guess
 * @return {object} An object containing the number of bulls and cows.
 * Example: { bulls: 1, cows: 2 }
 */
function getBullsAndCows(userInput, numberToGuess) {
  const secret = String(numberToGuess);
  const guess = String(userInput);

  let bulls = 0;
  let totalMatches = 0;

  const len = Math.min(secret.length, guess.length);

  for (let i = 0; i < len; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    }

    if (secret.includes(guess[i])) {
      totalMatches++;
    }
  }

  const cows = totalMatches - bulls;

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
