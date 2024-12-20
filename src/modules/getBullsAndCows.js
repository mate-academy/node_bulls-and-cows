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
  /* Write your code here */
  const userInputArr = userInput.toString().split('');
  const numberToGuessArr = numberToGuess.toString().split('');
  const result = { bulls: 0, cows: 0 };

  console.log(userInputArr, numberToGuessArr);

  for (let i = 0; i < userInputArr.length; i++) {
    if (userInputArr[i] === numberToGuessArr[i]) {
      result.bulls += 1;

      continue;
    }

    if (numberToGuessArr.includes(userInputArr[i])) {
      result.cows += 1;
    }
  }

  // if (result.bulls === 4) {
  //   console.log('you won!');

  //   return;
  // }

  console.log(result);

  return result;
}

module.exports = {
  getBullsAndCows,
};
