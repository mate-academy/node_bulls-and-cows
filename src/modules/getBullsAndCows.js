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
  const userInputArray = Array.from(userInput.toString());
  const numberToGuessArray = Array.from(numberToGuess.toString());
  const res = { bulls: 0, cows: 0 };

  for (let i = 0; i < userInputArray.length; i++) {
    for (let j = 0; j < numberToGuessArray.length; j++) {
      if (userInputArray[i] === numberToGuessArray[j] && i !== j) {
        res.cows += 1;
      }

      if (i === j && userInputArray[i] === numberToGuessArray[j]) {
        res.bulls += 1;
      }
    }
  }

  return res;
}

module.exports = {
  getBullsAndCows,
};
