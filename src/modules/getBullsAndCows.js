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
  const userInputStr = String(userInput);
  const numberToGuessStr = String(numberToGuess);

  if (userInputStr.length !== 4) {
    return result;
  }

  for (let i = 0; i < 4; i++) {
    if (userInputStr[i] === numberToGuessStr[i]) {
      result.bulls++;
      continue;
    }

    if (numberToGuessStr.includes(userInputStr[i])) {
      result.cows++;
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
