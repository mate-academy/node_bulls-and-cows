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
    bulls: 0,
    cows: 0,
  };

  const ifValidUserInput = require('./checkIsValidUserInput');

  if (!ifValidUserInput.checkIsValidUserInput(userInput)) {
    throw new Error('Invalid user input');
  }

  const userInputNumbers = userInput.toString().split('').map(Number);
  const numberToGuessNumbers = numberToGuess.toString().split('').map(Number);

  for (let i = 0; i < 4; i++) {
    if (userInputNumbers[i] === numberToGuessNumbers[i]) {
      result.bulls++;
    } else if (numberToGuessNumbers.includes(userInputNumbers[i])) {
      result.cows++;
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
