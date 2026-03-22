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
  const userInputDigits = userInput.toString().split('');
  const numberToGuessDigits = numberToGuess.toString().split('');
  const unmatchedUserDigits = [];
  const unmatchedGuessDigits = [];

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userInputDigits.length; i++) {
    if (userInputDigits[i] === numberToGuessDigits[i]) {
      bulls++;
    } else {
      unmatchedUserDigits.push(userInputDigits[i]);
      unmatchedGuessDigits.push(numberToGuessDigits[i]);
    }
  }

  for (const digit of unmatchedUserDigits) {
    const guessDigitIndex = unmatchedGuessDigits.indexOf(digit);

    if (guessDigitIndex !== -1) {
      cows++;
      unmatchedGuessDigits.splice(guessDigitIndex, 1);
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
