'use strict';

const randomize = () => {
  const min = 1000;
  const max = 9999;

  const randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    .toString();
  const uniqueNum = new Set([...randomNum]).size;

  if (randomNum.length === uniqueNum) {
    return randomNum;
  }

  return randomize();
};

module.exports = {
  randomize,
};
