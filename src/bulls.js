'use strict';

const { getRandomNumber } = require('./getRandomNumber');

function bulls(param) {
  let count = 0;
  const user = param.split('');
  const randomNumber = getRandomNumber.split('');

  user.filter((el, index) => {
    if (el === randomNumber[index]) {
      count += 1;
    }
  });

  return count;
}

module.exports = { bulls };
