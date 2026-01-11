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
  const userInputStr = userInput.toString().padStart(4, '0');
  const numberToGuessStr = numberToGuess.toString().padStart(4, '0');

  let bulls = 0;
  let cows = 0;

  const userInputDigitsCount = {};
  const numberToGuessDigitsCount = {};

  for (let i = 0; i < 4; i++) {
    if (userInputStr[i] === numberToGuessStr[i]) {
      bulls++;
    } else {
      userInputDigitsCount[userInputStr[i]] =
        (userInputDigitsCount[userInputStr[i]] || 0) + 1;

      numberToGuessDigitsCount[numberToGuessStr[i]] =
        (numberToGuessDigitsCount[numberToGuessStr[i]] || 0) + 1;
    }
  }

  for (const digit in userInputDigitsCount) {
    if (numberToGuessDigitsCount[digit]) {
      cows += Math.min(
        userInputDigitsCount[digit],
        numberToGuessDigitsCount[digit],
      );
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
