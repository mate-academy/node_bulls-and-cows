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

  const userInputDigits = Array.from(userInputStr);
  const numberToGuessDigits = Array.from(numberToGuessStr);

  for (let i = 0; i < 4; i++) {
    if (userInputDigits[i] === numberToGuessDigits[i]) {
      bulls++;
      userInputDigits[i] = null;
      numberToGuessDigits[i] = null;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (
      userInputDigits[i] !== null &&
      numberToGuessDigits.includes(userInputDigits[i])
    ) {
      cows++;

      numberToGuessDigits[numberToGuessDigits.indexOf(userInputDigits[i])] =
        null;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
