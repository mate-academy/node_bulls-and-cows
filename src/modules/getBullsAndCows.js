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
  const userValue = String(userInput).split('');
  const guessValue = String(numberToGuess).split('');
  let bulls = 0;
  let cows = 0;
  const guessedDigits = new Array(10).fill(0);

  userValue.forEach((item, index) => {
    if (item === guessValue[index]) {
      bulls++;
    } else {
      guessedDigits[guessValue[index]]++;
    }
  });

  userValue.forEach((item, index) => {
    if (item !== guessValue[index] && guessedDigits[item] > 0) {
      cows++;
      guessedDigits[item]--;
    }
  });

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
