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
  const guessDigits = String(userInput).split('');
  const secretDigits = String(numberToGuess).split('');
  let bulls = 0;
  let cows = 0;

  const remainingGuess = [];
  const remainingSecret = [];

  for (let i = 0; i < 4; i++) {
    if (guessDigits[i] === secretDigits[i]) {
      bulls++;
    } else {
      remainingGuess.push(guessDigits[i]);
      remainingSecret.push(secretDigits[i]);
    }
  }

  for (const digit of remainingGuess) {
    const index = remainingSecret.indexOf(digit);

    if (index !== -1) {
      cows++;
      remainingSecret.splice(index, 1);
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
