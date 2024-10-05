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
  const bullsAndCows = {
    bulls: 0,
    cows: 0,
  };

  const strToGuess = `${numberToGuess}`;
  const strInput = `${userInput}`;

  for (let i = 0; i < strInput.length; i++) {
    if (strInput[i] === strToGuess[i]) {
      bullsAndCows.bulls += 1;
    } else if (strToGuess.includes(strInput[i])) {
      bullsAndCows.cows += 1;
    }
  }

  return bullsAndCows;
}

module.exports = {
  getBullsAndCows,
};
