'use strict';

function bullsAndCows(userNumberMeaning, randomNumberMeaning) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (userNumberMeaning[i] === randomNumberMeaning[i]) {
      bulls++;
    } else if (randomNumberMeaning.includes(userNumberMeaning[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
}

module.exports = { bullsAndCows };
