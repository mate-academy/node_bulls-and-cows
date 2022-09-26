'use strict';

module.exports.generatingNumber = () => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let randomNum = '';

  for (let i = 0; i < 4; i++) {
    randomNum += numbers.splice((Math.random() * 10 | 0) - i, 1)[0];
  }

  return randomNum;
};
