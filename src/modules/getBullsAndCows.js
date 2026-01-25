'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const input = String(userInput);
  const secret = String(numberToGuess);

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i += 1) {
    if (input[i] === secret[i]) {
      bulls += 1;
    } else if (secret.includes(input[i])) {
      cows += 1;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
