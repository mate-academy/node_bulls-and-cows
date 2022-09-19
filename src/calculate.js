'use strict';

module.exports = {
  calculateBullCows(userNum, compNum) {
    const strUserNum = String(userNum);
    const strCompNum = String(compNum);

    const secretMap = {};

    for (const num of strCompNum) {
      secretMap[num] = secretMap[num] || 0;
      secretMap[num] += 1;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < strUserNum.length; i++) {
      if (
        strUserNum[i] === strCompNum[i]
        && secretMap[strUserNum[i]] > 0
      ) {
        bulls += 1;
        secretMap[strUserNum[i]]--;
      }
    }

    for (let i = 0; i < strUserNum.length; i++) {
      if (
        strUserNum[i] !== strCompNum[i]
        && secretMap[strUserNum[i]] > 0
      ) {
        cows += 1;
        secretMap[strUserNum[i]]--;
      }
    }

    return bulls + ' Bulls ' + cows + ' Cows ';
  },
};
