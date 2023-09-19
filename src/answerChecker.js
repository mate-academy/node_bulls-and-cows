'use strict';

const answerChecker = (secretNumber, playerNumber) => {
  let bulls = 0;
  let cows = 0;

  const playerNumberArr = playerNumber.split('');

  for (let i = 0; i < 4; i++) {
    if (secretNumber.includes(playerNumberArr[i])) {
      if (secretNumber.indexOf(playerNumberArr[i]) === i) {
        bulls++;
      } else {
        cows++;
      }
    }
  }

  return [bulls, cows];
};

module.exports = { answerChecker };
