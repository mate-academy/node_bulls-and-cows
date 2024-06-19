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
  const userStr = userInput.toString();
  const guessStr = numberToGuess.toString();

  let bulls = 0;
  let cows = 0;
  const guessDigitCount = {};
  const userDigitCount = {};

  for (let i = 0; i < 4; i++) {
    if (userStr[i] === guessStr[i]) {
      bulls++;
    } else {
      if (!guessDigitCount[guessStr[i]]) {
        guessDigitCount[guessStr[i]] = 0;
      }

      if (!userDigitCount[userStr[i]]) {
        userDigitCount[userStr[i]] = 0;
      }
      guessDigitCount[guessStr[i]]++;
      userDigitCount[userStr[i]]++;
    }
  }

  for (const digit in userDigitCount) {
    if (guessDigitCount[digit]) {
      cows += Math.min(userDigitCount[digit], guessDigitCount[digit]);
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
