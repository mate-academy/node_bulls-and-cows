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
  let countBulls = 0;
  let countCows = 0;
  const guess = String(userInput);
  const secret = String(numberToGuess);

  const secretCount = {};
  const guessCount = {};

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      countBulls++;
    } else {
      secretCount[secret[i]] = (secretCount[secret[i]] || 0) + 1;
      guessCount[guess[i]] = (guessCount[guess[i]] || 0) + 1;
    }
  }

  for (const digit in guessCount) {
    if (secretCount[digit]) {
      countCows += Math.min(secretCount[digit], guessCount[digit]);
    }
  }

  return { bulls: countBulls, cows: countCows };
}

module.exports = {
  getBullsAndCows,
};
