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
  const guess = String(userInput).padStart(4, '0');
  const target = String(numberToGuess).padStart(4, '0');

  const guessRemaining = [];
  const targetRemaining = [];

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (guess[i] === target[i]) {
      bulls++;
    } else {
      guessRemaining.push(guess[i]);
      targetRemaining.push(target[i]);
    }
  }

  for (let i = 0; i < guessRemaining.length; i++) {
    const index = targetRemaining.indexOf(guessRemaining[i]);

    if (index !== -1) {
      cows++;

      targetRemaining.splice(index, 1);
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
