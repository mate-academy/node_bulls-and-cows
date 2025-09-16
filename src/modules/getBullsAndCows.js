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
  const inputStr = String(userInput);
  const guessStr = String(numberToGuess);

  if (inputStr.length !== 4 || guessStr.length !== 4) {
    throw new Error('Both inputs must be 4 digits');
  }

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (inputStr[i] === guessStr[i]) {
      bulls++;
    } else if (guessStr.includes(inputStr[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
