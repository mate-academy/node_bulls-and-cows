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
  const inputArr = userInput.toString().split('');
  const guessArr = numberToGuess.toString().split('');

  let bulls = 0;
  let cows = 0;

  const remainingInputDigits = [];
  const remainingGuessDigits = [];

  for (let i = 0; i < 4; i++) {
    if (inputArr[i] === guessArr[i]) {
      bulls++;
    } else {
      remainingInputDigits.push(inputArr[i]);
      remainingGuessDigits.push(guessArr[i]);
    }
  }

  for (const digit of remainingInputDigits) {
    const index = remainingGuessDigits.indexOf(digit);

    if (index !== -1) {
      cows++;
      remainingGuessDigits.splice(index, 1);
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
