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
 *
 */

function getBullsAndCows(userInput, numberToGuess) {
  const infoUserInput = userInput.toString().trim().split(''); // [1, 3,4,5]
  const inforComputerInput = numberToGuess.toString().split(''); // [1,2,3,4]

  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < infoUserInput.length; i++) {
    if (infoUserInput[i] === inforComputerInput[i]) {
      result.bulls += 1;
    } else if (inforComputerInput.includes(infoUserInput[i])) {
      result.cows += 1;
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
