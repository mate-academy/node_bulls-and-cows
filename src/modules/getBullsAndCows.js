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
  let countOfBulls = 0;
  let countOfCows = 0;

  const userInputToString = String(userInput);
  const numberToGuessToString = String(numberToGuess);

  for (let i = 0; i < 4; i++) {
    if (userInputToString[i] === numberToGuessToString[i]) {
      countOfBulls++;
    } else if (numberToGuessToString.includes(userInputToString[i])) {
      countOfCows++;
    }
  }

  return {
    bulls: countOfBulls,
    cows: countOfCows,
  };
}

module.exports = {
  getBullsAndCows,
};
