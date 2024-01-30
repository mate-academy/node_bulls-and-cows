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
  const userInputDigits = userInput.toString();
  const numberToGuessDigits = numberToGuess.toString();

  let bullsAmount = 0;
  let cowsAmount = 0;

  for (let index = 0; index < 4; index++) {
    if (userInputDigits[index] === numberToGuessDigits[index]) {
      bullsAmount++;
    } else if (numberToGuessDigits.includes(userInputDigits[index])) {
      cowsAmount++;
    }
  }

  return {
    bulls: bullsAmount,
    cows: cowsAmount,
  };
}

module.exports = {
  getBullsAndCows,
};
