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

const createArrFromNum = (num) => {
  return String(num)
    .split('')
    .map((el) => Number(el));
};

function getBullsAndCows(userInput, numberToGuess) {
  const userInputArr = createArrFromNum(userInput);
  const numberToGuessArr = createArrFromNum(numberToGuess);

  const result = {
    bulls: 0,
    cows: 0,
  };

  userInputArr.forEach((item, index) => {
    if (item === numberToGuessArr[index]) {
      result.bulls++;
    } else if (numberToGuessArr.includes(item)) {
      result.cows++;
    }
  });

  return result;
}

module.exports = {
  getBullsAndCows,
};
