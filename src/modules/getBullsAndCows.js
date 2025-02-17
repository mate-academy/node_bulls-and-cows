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
  /* Write your code here */
  userInput = String(userInput);
  numberToGuess = String(numberToGuess);

  const result = {
    bulls: 0,
    cows: 0,
  };

  const userUsed = [];
  const guessUsed = [];

  for (let i = 0; i < numberToGuess.length; i++) {
    if (numberToGuess[i] === userInput[i]) {
      result.bulls++;
      userUsed[i] = true;
      guessUsed[i] = true;
    }
  }

  for (let i = 0; i < numberToGuess.length; i++) {
    if (!userUsed[i]) {
      for (let j = 0; j < numberToGuess.length; j++) {
        if (!guessUsed[j] && userInput[i] === numberToGuess[j]) {
          result.cows++;
          guessUsed[j] = true;
          break;
        }
      }
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
