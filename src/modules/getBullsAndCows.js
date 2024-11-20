'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 * Assume that the user input and the number to guess
 * are always 4-digit numbers.
 *
 * @param {string} userInput - The user input
 * @param {string} numberToGuess - The number to guess
 * @return {object} An object containing the number of bulls and cows.
 * Example: { bulls: 1, cows: 2 }
 */
'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 * Assume that the user input and the number to guess
 * are always 4-digit numbers.
 *
 * @param {string} userInputStr - The user input
 * @param {string} numberToGuessStr - The number to guess
 * @return {object} An object containing the number of bulls and cows.
 * Example: { bulls: 1, cows: 2 }
 */
function getBullsAndCows(userInput, numberToGuess) {
  const userInputStr = userInput.toString();
  const numberToGuessStr = numberToGuess.toString();
  const result = { bulls: 0, cows: 0 };
  const guessed = new Set();

  // check for bulls
  for (let i = 0; i < userInputStr.length; i++) {
    if (numberToGuessStr[i] === userInputStr[i]) {
      result.bulls++;
      guessed.add(userInputStr[i]);
    }
  }

  // check for cows
  for (let i = 0; i < userInputStr.length; i++) {
    if (
      numberToGuessStr.includes(userInputStr[i]) &&
      !guessed.has(userInputStr[i])
    ) {
      result.cows++;
      guessed.add(userInputStr[i]);
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};

module.exports = {
  getBullsAndCows,
};
