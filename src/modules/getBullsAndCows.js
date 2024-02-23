/* eslint-disable no-console */
'use strict';

const { checkIsValidUserInput } = require('./checkIsValidUserInput');

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
function getBullsAndCows(answer, secretCode) {
  if (!checkIsValidUserInput(answer)) {
    console.error('input not valid');

    return;
  }

  const _answer = Number(answer);

  if (_answer === secretCode) {
    return {
      bulls: 4,
      cows: 0,
    };
  }

  const result = {
    bulls: 0,
    cows: 0,
  };

  const _answerArray = [...String(answer)];
  const _secretCodeArray = [...String(secretCode)];

  for (let i = 0; i < _secretCodeArray.length; i++) {
    if (_secretCodeArray[i] === _answerArray[i]) {
      result.bulls++;
      continue;
    }

    if (_secretCodeArray.includes(_answerArray[i])) {
      result.cows++;
    }
  }

  return result;
}

module.exports = { getBullsAndCows };
