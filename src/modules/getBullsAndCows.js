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

  const userInputStr = String(userInput);
  const numberToGuessStr = String(numberToGuess);

  for (let i = 0; i < userInputStr.length; i++) {
    const guessNumber = userInputStr[i];
    const rightNumber = numberToGuessStr[i];

    if (guessNumber === rightNumber) {
      bulls += 1;
    } else if (
      numberToGuessStr.includes(guessNumber) &&
      guessNumber !== rightNumber
    ) {
      cows += 1;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
