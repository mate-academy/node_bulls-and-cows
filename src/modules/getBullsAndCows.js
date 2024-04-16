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
  if (userInput === numberToGuess) {
    return { bulls: 4, cows: 0 };
  }

  const result = { bulls: 0, cows: 0 };
  const _numberToGuess = numberToGuess.toString().split('');
  const _userInput = userInput.toString().split('');

  _userInput.forEach((digit, index) => {
    if (_numberToGuess[index] === digit) {
      result.bulls += 1;
    } else if (_numberToGuess.includes(digit)) {
      result.cows += 1;
    }
  });

  return result;
}

module.exports = { getBullsAndCows };
