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
  const result = {
    cows: 0,
    bulls: 0,
  };

  for (const char of userInput.toString()) {
    if (numberToGuess.toString().includes(char)) {
      result.cows++;
    }
  }

  for (let i = 0; i < userInput.toString().length; i++) {
    if (userInput.toString()[i] === numberToGuess.toString()[i]) {
      result.bulls++;
      result.cows--;
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
