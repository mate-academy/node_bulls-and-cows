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
  const result = { bulls: 0, cows: 0 };
  const userInpStr = userInput.toString();
  const numToGuessStr = numberToGuess.toString();

  for (let i = 0; i < userInpStr.length; i++) {
    if (userInpStr[i] === numToGuessStr[i]) {
      result.bulls += 1;
    } else {
      if (numToGuessStr.includes(userInpStr[i])) {
        result.cows += 1;
      }
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
