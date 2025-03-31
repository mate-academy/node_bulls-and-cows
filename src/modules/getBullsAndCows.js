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
  let bulls = 0;
  let cows = 0;

  const sUserInput = userInput.toString();
  const sNumberToGuess = numberToGuess.toString();

  for (let i = 0; i < 4; i++) {
    const n = sUserInput[i];
    const p = sNumberToGuess.indexOf(n);

    if (i === p) {
      // bull
      bulls++;
    } else {
      if (p >= 0) {
        cows++;
      }
    }
  }

  return {
    bulls: bulls,
    cows: cows,
  };
}

module.exports = {
  getBullsAndCows,
};
