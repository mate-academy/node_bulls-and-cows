'use strict';

const { figure } = require('./bullCowFigure');

const isNumber = (input) => {
  const pattern = /^\d+$/;

  return pattern.test(input);
};

const getValidInput = (generatedNum, userNum) => {
  if (userNum.length !== 4) {
    return '<< Your input must be 4 digits long! >>';
  }

  if (!isNumber(userNum)) {
    return `<< Your input must be number! >>`;
  }

  if (+userNum === generatedNum) {
    return '<< Congrats, you are the winner >>';
  }

  return figure(generatedNum, userNum);
};

module.exports = { getValidInput };
