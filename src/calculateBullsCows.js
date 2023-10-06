'use strict';

function calculateBullsCows(realNumber, playerNumber) {
  let bulls = 0;
  let cows = 0;

  const playerArr = playerNumber.toString(10).split('');
  const realArr = realNumber.toString(10).split('');

  const playerNumberMark = [];

  for (let i = 0; i < playerArr.length; i++) {
    playerNumberMark.push('');
  }

  playerArr.forEach((digit, id) => {
    if (realArr[id] === digit) {
      playerNumberMark[id] = 'bull';
      bulls += 1;
    }
  });

  realArr.forEach((digit, id) => {
    for (let j = 0; j < playerArr.length; j++) {
      if (playerArr[j] === digit) {
        if (!playerNumberMark[j]) {
          playerNumberMark[j] = 'cow';
          cows += 1;
          break;
        }
      }
    }
  });

  return [bulls, cows];
}

module.exports = {
  calculateBullsCows,
};
