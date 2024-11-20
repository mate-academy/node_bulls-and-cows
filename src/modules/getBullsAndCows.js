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
  if (userInput === numberToGuess) {
    return { bulls: 4, cows: 0 };
  }

  const result = { bulls: 0, cows: 0 };
  const userString = String(userInput);
  const numberString = String(numberToGuess);

  for (let i = 0; i < userString.length; i += 1) {
    if (userString[i] === numberString[i]) {
      result.bulls += 1;
      continue;
    }

    if (!numberString.includes(userString[i])) {
      continue;
    }

    if (numberString.includes(userString[i])) {
      result.cows += 1;
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
