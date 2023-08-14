'use strict';

const validateNumber = (number) => {
  const isLengthValid = number.length === 4;

  const numberToArray = number.split('');
  const filteredDuplicates = numberToArray.filter(
    (num, index) => numberToArray.indexOf(num) === index
  );

  const areDigitsUnique = filteredDuplicates.length === 4;

  return isLengthValid && areDigitsUnique;
};

module.exports = { validateNumber };
