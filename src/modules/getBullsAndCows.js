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
  const obj = {
    bulls: 0, cows: 0,
  };

  const inputStr = userInput.toString();
  const numberStr = numberToGuess.toString();

  for (let i = 0; i < inputStr.length; i += 1) {
    if (inputStr[i] === numberStr[i]) {
      obj.bulls += 1;
      continue;
    }

    if (numberStr.includes(inputStr[i])) {
      obj.cows += 1;
    }
  }

  return obj;
}

module.exports = {
  getBullsAndCows,
};
