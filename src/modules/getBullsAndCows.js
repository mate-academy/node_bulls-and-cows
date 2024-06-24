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
  const userNumber = userInput.toString();
  const guessNumber = numberToGuess.toString();

  for (let i = 0; i < userNumber.length; i++) {
    if (userNumber[i] === guessNumber[i]) {
      bulls++;
    } else if (guessNumber.includes(userNumber[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
