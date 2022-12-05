'use strict';

const { randomNumber } = require('./getRandom');

function cows(param) {
  const arrUser = param.split('');
  const arrPC = randomNumber.split('');
  let count = 0;

  for (let i = 0; i < arrUser.length; i++) {
    for (let j = 0; j < arrPC.length; j++) {
      if (arrUser[i] === arrPC[j]) {
        count += 1;
      }
    }
  }

  return count;
}

module.exports = { cows };
