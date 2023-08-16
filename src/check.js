'use strict';

function check(userNum, randomNum) {
  const result = [];

  for (let i = 0; i < userNum.length; i++) {
    if (randomNum.includes(userNum[i])) {
      result[i] = 'cow';
    } else {
      result[i] = '*';
    }

    if (userNum[i] === randomNum[i]) {
      result[i] = 'bull';
    }
  };

  return result.join(' ');
}

module.exports = check;
