'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  let bulls = 0;
  let cows = 0;

  const strUserInput = String(userInput);
  const strNumbToGuess = String(numberToGuess);

  for (let i = 0; i < 4; i++) {
    if (strUserInput[i] === strNumbToGuess[i]) {
      bulls++;
    } else if (strNumbToGuess.includes(strUserInput[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
