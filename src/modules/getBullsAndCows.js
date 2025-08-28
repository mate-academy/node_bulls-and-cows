'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const userStr = userInput.toString().padStart(4, '0');
  const guessStr = numberToGuess.toString().padStart(4, '0');
  let bulls = 0;
  let cows = 0;
  const userUnmatched = [];
  const guessUnmatched = [];

  for (let i = 0; i < 4; i++) {
    if (userStr[i] === guessStr[i]) {
      bulls++;
    } else {
      userUnmatched.push(userStr[i]);
      guessUnmatched.push(guessStr[i]);
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
