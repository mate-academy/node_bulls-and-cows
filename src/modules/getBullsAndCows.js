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
  const bulls = [];
  let cows = 0;

  const userString = userInput.toString();
  const computerString = numberToGuess.toString();

  for (let j = 0; j < computerString.length; j++) {
    if (userString[j] === computerString[j]) {
      bulls.push(userString[j]);
    } else if (computerString.includes(userString[j])) {
      cows++;
    }
  }

  return {
    bulls: bulls.length,
    cows,
  };
}

module.exports = {
  getBullsAndCows,
};
