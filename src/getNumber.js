/* eslint-disable no-param-reassign */
'use strict';

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getNumber = () => {
  const arr = new Array(4);

  for (let i = 0; i < arr.length; i++) {
    let num = getRandomNum(1, 9);

    if (!arr.includes(num)) {
      arr[i] = num;
    } else {
      num = getRandomNum(1, 9);
      i--;
    }
  }

  return +arr.join('');
};

module.exports.getNumber = getNumber;
