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
  const userNumArray = String(userInput).split('');
  const numToGuessArray = String(numberToGuess).split('');

  const obj = {
    bulls: 0,
    cows: 0,
  };

  const restNum = [];
  const restGuess = [];

  userNumArray.forEach((el, i) => {
    if (el === numToGuessArray[i]) {
      obj.bulls++;
    } else {
      restNum.push(el);
      restGuess.push(numToGuessArray[i]);
    }
  });

  restNum.forEach((el) => {
    if (restGuess.includes(el)) {
      obj.cows++;
    }
  });

  return obj;
}

module.exports = {
  getBullsAndCows,
};
