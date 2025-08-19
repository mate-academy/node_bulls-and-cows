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
 * @return {object} An object containing the number of bu lls and cows.
 * Example: { bulls: 1, cows: 2 }
 */

function getBullsAndCows(userInput, numberToGuess) {
  const input = userInput.toString().split('');
  const randomNumber = numberToGuess.toString().split('');
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < 4; i++) {
    const numbersBefore = [];

    if (input[i] === randomNumber[i]) {
      result.bulls += 1;
      numbersBefore.push(input[i]);
    } else if (
      randomNumber.includes(input[i]) &&
      !numbersBefore.includes(input[i])
    ) {
      result.cows += 1;
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
