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
  const userNums = userInput.toString().split('');
  const guessNums = numberToGuess.toString().split('');

  return userNums.reduce(
    (resultObj, currNum, index) => {
      if (currNum === guessNums[index]) {
        resultObj.bulls += 1;
      } else if (guessNums.includes(currNum)) {
        resultObj.cows += 1;
      }

      return resultObj;
    },
    { bulls: 0, cows: 0 },
  );
}

module.exports = {
  getBullsAndCows,
};
