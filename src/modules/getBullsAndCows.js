'use strict';

import generateRandomNumber from './generateRandomNumber.js';

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
export default function getBullsAndCows(
  userInput,
  numberToGuess = generateRandomNumber(),
) {
  const convert = (v) => String(v).split('');
  const result = {
    bulls: 0,
    cows: 0,
  };
  const userGuessed = convert(userInput);
  const secretNum = convert(numberToGuess);

  for (let i = 0; i < userGuessed.length; i++) {
    if (userGuessed[i] === secretNum[i]) {
      result.bulls += 1;
    } else if (userGuessed.includes(secretNum[i])) {
      result.cows += 1;
    }
  }

  return result;
}
