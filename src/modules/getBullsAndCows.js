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
  const userInputStr = userInput.toString();
  const numberToGuessStr = numberToGuess.toString();
  const result = { bulls: 0, cows: 0 };
  const targetNumberDigits = Array.from(numberToGuessStr);

  for (let i = 0; i < numberToGuessStr.length; i++) {
    if (userInputStr[i] === numberToGuessStr[i]) {
      result.bulls += 1;
      targetNumberDigits[i] = null;
    }
  }

  for (let i = 0; i < numberToGuessStr.length; i++) {
    if (userInputStr[i] !== numberToGuessStr[i]) {
      const indexInGuess = targetNumberDigits.indexOf(userInputStr[i]);

      if (indexInGuess !== -1) {
        result.cows += 1;
        targetNumberDigits[indexInGuess] = null;
      }
    }
  }

  return result;
}
module.exports = { getBullsAndCows };
// export default getBullsAndCows;
