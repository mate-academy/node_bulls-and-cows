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
  const input = userInput.toString();
  const correctNumber = numberToGuess.toString();

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < input.length; i++) {
    const correctIndex = correctNumber.indexOf(input[i]);

    if (correctIndex === -1) {
      continue;
    }

    if (correctIndex === i) {
      bulls++;
    } else {
      cows++;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
