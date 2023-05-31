'use strict';

const checkWroteNumber = (number) => {
  const arrFromNumber = number.toString().split('');

  return arrFromNumber.every((item, _, array) => {
    return array.indexOf(item) === array.lastIndexOf(item);
  });
};

module.exports.checkWroteNumber = checkWroteNumber;
