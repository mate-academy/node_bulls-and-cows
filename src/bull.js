'use strict';

const { randomNumber } = require('./getRandom');

function bull(param) {
  let count = 0;
  const arrUser = param.split('');
  const arrPC = randomNumber.split('');

  arrUser.forEach((item, index) => {
    if (item === arrPC[index]) {
      count += 1;
    }
  });

  return count;
}

module.exports = { bull };
