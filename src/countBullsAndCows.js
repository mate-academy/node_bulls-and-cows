'use strict';

function countBullsAndCows(randomNum, userNum) {
  let bullsCnt = 0;
  let cowsCnt = 0;

  for (let i = 0; i < randomNum.length; i += 1) {
    if (randomNum[i] === userNum[i]) {
      bullsCnt += 1;
    } else {
      cowsCnt += 1;
    }
  }

  return `Bulls => ${bullsCnt} and Cows => ${cowsCnt}`;
}

module.exports.countBullsAndCows = countBullsAndCows;
