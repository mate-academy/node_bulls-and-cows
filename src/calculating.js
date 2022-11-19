'use strict';

exports.calculating = (generatedNum, userNum) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < generatedNum.length; i++) {
    if (generatedNum[i] === userNum[i]) {
      bulls++;
    } else if (generatedNum.includes(userNum[i])) {
      cows++;
    }
  }

  return `Bulls: ${bulls}, Caws: ${cows}`;
};
