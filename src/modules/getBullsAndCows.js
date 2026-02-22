'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 * Assume that the user input and the number to guess
 * are always 4-digit numbers.
 *
 * @param {string} userInput - The user input
 * @param {number} numberToGuess - The number to guess
 * @return {object} An object containing the number of bulls and cows.
 * Example: { bulls: 1, cows: 2 }
 */
function getBullsAndCows(userInput, numberToGuess) {
  const userInputStr = String(userInput);
  const numberToGuessStr = String(numberToGuess);

  if (!/^\d{4}$/.test(userInputStr) || !/^\d{4}$/.test(numberToGuessStr)) {
    throw new Error('Both inputs must be 4-digit strings');
  }

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userInputStr.length; i++) {
    if (userInputStr[i] === numberToGuessStr[i]) {
      bulls++;
    } else if (numberToGuessStr.includes(userInputStr[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
