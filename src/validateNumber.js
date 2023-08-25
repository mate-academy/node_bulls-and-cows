'use strict';

const NUM_LENGTH = 4;

module.exports.isNumberValid = (number) => {
  const digitsArray = number.split('');

  for (let i = 0; i < NUM_LENGTH; i++) {
    if (
      digitsArray.indexOf(digitsArray[i])
      !== digitsArray.lastIndexOf(digitsArray[i])
    ) {
      return false;
    }
  }

  return !isNaN(+number) && number.length === NUM_LENGTH;
};
