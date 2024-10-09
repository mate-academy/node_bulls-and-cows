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
  const userArr = userInput.toString().split('');
  const guessArr = numberToGuess.toString().split('');
  const resultObj = { bulls: 0, cows: 0 };

  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i] === guessArr[i]) {
      resultObj.bulls += 1;
    } else if (guessArr.includes(userArr[i])) {
      resultObj.cows += 1;
    }
  }
  // eslint-disable-next-line no-console
  console.log(resultObj);

  return resultObj;
}

module.exports = {
  getBullsAndCows,
};
