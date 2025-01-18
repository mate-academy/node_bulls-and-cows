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
const { checkIsValidUserInput } = require('./checkIsValidUserInput');

function getBullsAndCows(userInput, numberToGuess) {
  const userInputValid = checkIsValidUserInput(userInput);

  if (!userInputValid) {
    return 'You entered a not valid digits!!!';
  }

  const strUserInput = userInput.toString();
  const strNumberToGuess = numberToGuess.toString();
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < strUserInput.length; i++) {
    if (strUserInput[i] === strNumberToGuess[i]) {
      bulls++;
    } else if (
      strUserInput[i] !== strNumberToGuess[i] &&
      strNumberToGuess.includes(strUserInput[i])
    ) {
      cows++;
    }
  }

  return { bulls: bulls, cows: cows };
}

module.exports = {
  getBullsAndCows,
};
