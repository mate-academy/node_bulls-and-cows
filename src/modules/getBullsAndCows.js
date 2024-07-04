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
  const userInputStr = userInput.toString();
  const numberToGuessStr = numberToGuess.toString();
  const res = { bulls: 0, cows: 0 };

  Array.from(numberToGuessStr).forEach((num, i) => {
    const userNum = userInputStr[i];

    if (userNum === num) {
      res.bulls++;
    } else if (numberToGuessStr.includes(userNum)) {
      res.cows++;
    }
  });

  return res;
}

module.exports = {
  getBullsAndCows,
};
