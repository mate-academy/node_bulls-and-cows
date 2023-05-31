'use strict';

function getValueInput(enteredNumber) {
  const numbers = enteredNumber.trim().split('');

  if (numbers.length !== 4) {
    throw new Error('You should enter 4digit number');
  }

  const isNumber = numbers.every(number => {
    return Number.isInteger(Number(number));
  });

  if (!isNumber) {
    throw new Error('You should enter only four numbers');
  }

  return numbers.join('');
};

module.exports = { getValueInput };
