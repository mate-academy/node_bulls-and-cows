'use strict';

// eslint-disable-next-line no-console
const { randomNumber } = require('./getRandom');

function bull(param) {
  let count = 0;
  const arrUser = param.split('');
  const arrPC = randomNumber.split('');

  arrUser.filter((item, index) => {
    if (item === arrPC[index]) {
      count += 1;
    }
  });

  return count;
}

module.exports = { bull };
