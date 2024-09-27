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
  const userDigits = [...userInput.toString()].map(charToDigit);
  const targetDigits = [...numberToGuess.toString()].map(charToDigit);

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < targetDigits.length; i++) {
    if (userDigits[i] === targetDigits[i]) {
      bulls++;
    } else if (targetDigits.includes(userDigits[i])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
}

function charToDigit(char) {
  return Number(char);
}

module.exports = {
  getBullsAndCows,
};
