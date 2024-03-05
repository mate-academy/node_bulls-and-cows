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
  const userInputArr = userInput.toString().split('');
  const numberToGuessArr = numberToGuess.toString().split('');
  const bullsAndCows = {
    bulls: 0,
    cows: 0,
  };

  numberToGuessArr.forEach((digit, index) => {
    if (userInputArr.includes(digit)) {
      if (userInputArr.indexOf(digit) === index) {
        bullsAndCows.bulls++;
      } else {
        bullsAndCows.cows++;
      }
    }
  });

  return bullsAndCows;
}

module.exports = {
  getBullsAndCows,
};
