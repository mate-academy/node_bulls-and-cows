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
  const userStr = String(userInput);
  const targetStr = String(numberToGuess);

  const res = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < 4; i++) {
    if (userStr[i] === targetStr[i]) {
      res.bulls += 1;
    } else if (targetStr.includes(userStr[i])) {
      res.cows += 1;
    }
  }

  return res;
}

module.exports = {
  getBullsAndCows,
};
