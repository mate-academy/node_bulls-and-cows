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
  let countBulls = 0;
  let countCows = 0;

  const userInputArray = ('' + userInput).split('');
  const numberToGuessArray = ('' + numberToGuess).split('');

  for (let i = 0; i < numberToGuessArray.length; i++) {
    if (userInputArray[i] === numberToGuessArray[i]) {
      countBulls++;
    }

    const index = userInputArray.indexOf(numberToGuessArray[i]);

    if (index !== -1 && index !== i) {
      countCows++;
    }
  }

  return { bulls: countBulls, cows: countCows };
}

module.exports = {
  getBullsAndCows,
};
