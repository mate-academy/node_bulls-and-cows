'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  let bulls = 0;
  let cows = 0;

  const userUnmatched = [];
  const guessUnmatched = [];

  for (let i = 0; i < 4; i++) {
    if (userInput[i] === numberToGuess[i]) {
      bulls++;
    } else {
      userUnmatched.push(userInput[i]);
      guessUnmatched.push(numberToGuess[i]);
    }
  }

  for (const digit of userUnmatched) {
    if (guessUnmatched.includes(digit)) {
      cows++;

      const index = guessUnmatched.indexOf(digit);

      guessUnmatched.splice(index, 1);
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
