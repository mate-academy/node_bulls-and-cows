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
  const number = String(numberToGuess).split('');
  const input = String(userInput).split('');
  const bulls = number.filter((num, i) => number[i] === input[i]);
  const cows = number.filter(
    (num, i) => input.includes(num) && number[i] !== input[i],
  );

  return { bulls: bulls.length || 0, cows: cows.length || 0 };
}

module.exports = {
  getBullsAndCows,
};
