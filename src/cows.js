'use strict';

const { getRandomNumber } = require('./getRandomNumber');

function cows(param) {
  let count = 0;

  const user = param.split('');
  const randomNumber = getRandomNumber.split('');

  for (let i = 0; i < user.length; i++) {
    for (let j = 0; j < randomNumber.length; i++) {
      if (user[i] === randomNumber[j]) {
        count += 1;
      }
    }
  }

  return count;
}

module.exports = { cows };
