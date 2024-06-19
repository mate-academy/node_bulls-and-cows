/* eslint-disable no-console */
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
  const inputArr = userInput.toString().split('');
  const randomArr = numberToGuess.toString().split('');
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < randomArr.length; j++) {
      if (randomArr[j] === inputArr[i] && j === i) {
        result.bulls += 1;
      } else if (randomArr[j] === inputArr[i]) {
        result.cows += 1;
      }
    }
  }

  console.log(result);

  return result;
}

module.exports = {
  getBullsAndCows,
};
