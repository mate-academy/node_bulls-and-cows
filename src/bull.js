'use strict';

// eslint-disable-next-line no-console
const { randomNumber } = require('./getRandom');

function bull(param) {
  let count = 0;
  const arrUser = param.split('');
  const arrPC = randomNumber.split('');
  // for (let i = 0; i < arrUser.length; i++) {

  //   for (let j = 0; j < arrPC.length; j++) {
  //     if (i == j) {
  //       if (arrUser[i] === arrPC[j]) {
  //         count += 1;
  //       }
  //     }
  //   }

  // }

  arrUser.filter((item, index) => {
    if (item === arrPC[index]) {
      count += 1;
    }
  });

  return count;
}

module.exports = { bull };
