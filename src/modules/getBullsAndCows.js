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
  const userInputDigits = userInput.toString().split('').map(Number);
  const numberToGuessDigits = numberToGuess.toString().split('').map(Number);

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (userInputDigits[i] === numberToGuessDigits[i]) {
      bulls++;
    }
  }

  const digitFrequency = Array(10).fill(0);

  for (let i = 0; i < 4; i++) {
    digitFrequency[numberToGuessDigits[i]]++;
  }

  for (let i = 0; i < 4; i++) {
    if (userInputDigits[i] !== numberToGuessDigits[i]
      && digitFrequency[userInputDigits[i]] > 0) {
      cows++;
      digitFrequency[userInputDigits[i]]--;
    }
  }

  return {
    bulls, cows,
  };
}

module.exports = {
  getBullsAndCows,
};
