'use strict';

const { MAX_LENGTH } = require('./constants');

function getRandomNum() {
  return Math.floor(Math.random() * 9) + 1;
}

function getRandomNums() {
  const result = [];

  while (result.length !== MAX_LENGTH) {
    const newNum = getRandomNum();

    if (!result.includes(newNum)) {
      result.push(newNum);
    }
  }

  return result.join('');
}

module.exports = {
  getRandomNums,
};
