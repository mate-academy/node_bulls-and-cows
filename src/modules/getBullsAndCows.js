'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const inputStr = userInput.toString();
  const secretStr = numberToGuess.toString();
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (inputStr[i] === secretStr[i]) {
      bulls++;
    } else if (secretStr.includes(inputStr[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
