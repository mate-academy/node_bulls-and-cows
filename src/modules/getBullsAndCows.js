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
  let bulls = 0;
  let cows = 0;

  const userInputDigits = numberToGuess.toString().split('');
  const numberToGuessDigits = userInput.toString().split('');

  for (let i = 0; i < userInputDigits.length; i++) {
    if (userInputDigits[i] === numberToGuessDigits[i]) {
      bulls++;
      userInputDigits[i] = numberToGuessDigits[i] = null;
    }
  }

  for (let i = 0; i < userInputDigits.length; i++) {
    if (
      numberToGuessDigits[i] !== null &&
      userInputDigits.includes(numberToGuessDigits[i])
    ) {
      cows++;
      userInputDigits[userInputDigits.indexOf(numberToGuessDigits[i])] = null;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
