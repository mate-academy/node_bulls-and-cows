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

function checkIsBull(itemToCheck, index, wholeNumber) {
  const wholeNumberDigits = wholeNumber.split('');

  if (wholeNumberDigits[index] === itemToCheck) {
    return true;
  }
}

function getBullsAndCows(userInput, numberToGuess) {
  let bullsAmount = 0;
  let cowsAmount = 0;

  const userInputStrChars = userInput.toString().split('');
  const numberToGuessStr = numberToGuess.toString();

  userInputStrChars.forEach((item, index) => {
    if (numberToGuessStr.includes(item)) {
      const isBull = checkIsBull(item, index, numberToGuessStr);

      if (isBull) {
        bullsAmount++;
      } else {
        cowsAmount++;
      }
    }
  });

  return {
    bulls: bullsAmount,
    cows: cowsAmount,
  };
}

module.exports = {
  getBullsAndCows,
};
