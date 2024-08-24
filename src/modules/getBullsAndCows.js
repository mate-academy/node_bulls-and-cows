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
  const userStr = userInput.toString();
  const guessStr = numberToGuess.toString();

  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < userStr.length; i++) {
    if (userStr[i] === guessStr[i]) {
      result.bulls += 1;
    }
  }

  // cows
  for (let i = 0; i < userStr.length; i++) {
    for (let j = 0; j < guessStr.length; j++) {
      if (i !== j && userStr[i] === guessStr[j]) {
        result.cows += 1;
        break;
      }
    }
  }

  return result;
}

module.exports = { getBullsAndCows };
