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
  const userInputStr = userInput.toString().split('');
  const numberToGuessStr = numberToGuess.toString().split('');

  const cows = userInputStr
    .map((digit) => numberToGuessStr.includes(digit))
    .filter((val) => val === true).length;

  const bulls = userInputStr
    .map((_, idx) => userInputStr[idx] === numberToGuessStr[idx])
    .filter((val) => val === true).length;

  const result = {
    bulls: bulls,
    cows: cows - bulls,
  };

  return result;
}

module.exports = {
  getBullsAndCows,
};
