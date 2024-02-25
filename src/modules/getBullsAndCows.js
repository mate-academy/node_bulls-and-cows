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
  const result = {
    bulls: 0,
    cows: 0,
  };

  const inputArr = userInput.toString().split('');
  const terinalArray = numberToGuess.toString().split('');

  inputArr.forEach((_, i) => {
    if (inputArr[i] === terinalArray[i]) {
      result.bulls++;
    } else if (terinalArray.includes(inputArr[i])) {
      result.cows++;
    }
  });

  return result;
}

module.exports = {
  getBullsAndCows,
};
