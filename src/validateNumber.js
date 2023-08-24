'use strict';

const NUM_LENGTH = 4;

module.exports.isNumberValid = (number) => {
  for (let i = 1; i < NUM_LENGTH; i++) {
    if (number[i] === number[i - 1]) {
      return false;
    }
  }

  return !isNaN(+number) && number.length === NUM_LENGTH;
};
