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
  const userInputStr = userInput.toString();
  const numberToGuessStr = numberToGuess.toString();
  let bulls = 0;
  let cows = 0;

  const guessCopy = numberToGuessStr.split('');

  for (let i = 0; i < userInputStr.length; i++) {
    if (userInputStr[i] === guessCopy[i]) {
      bulls++;
      guessCopy[i] = null;
    }
  }

  for (let i = 0; i < userInputStr.length; i++) {
    if (guessCopy.includes(userInputStr[i])) {
      cows++;

      const index = guessCopy.indexOf(userInputStr[i]);

      guessCopy[index] = null;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
