'use strict';

exports.calculate = (numer, userNum) => {
  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < numer.length; i++) {
    if (numer[i] === userNum[i]) {
      bulls++;
    };

    if (numer.includes(userNum[i]) && numer[i] !== userNum[i]) {
      cows++;
    }
  }

  return `Bulls: ${bulls}, Cows: ${cows}`;
};
