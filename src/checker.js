'use strict';

function checker(userNumber, randomNumber) {
  const result = [];

  for (let i = 0; i < userNumber.length; i++) {
    if (randomNumber.includes(userNumber[i])) {
      result[i] = 'cow';
    } else {
      result[i] = '*';
    }

    if (userNumber[i] === randomNumber[i]) {
      result[i] = 'bull';
    }
  };

  return result.join(' ');
}

module.exports = checker;
