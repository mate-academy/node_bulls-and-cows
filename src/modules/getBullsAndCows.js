'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  let bulls = 0;
  let cows = 0;

  const userArr = userInput.toString().split('');
  const randomArr = numberToGuess.toString().split('');

  for (let i = 0; i < 4; i++) {
    if (userArr[i] === randomArr[i]) {
      bulls++;
    } else if (randomArr.includes(userArr[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
