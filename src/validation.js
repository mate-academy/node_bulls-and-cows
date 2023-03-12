'use strict';

const { incorrectTypeMessage, incorrectNumberMessage } = require('./messages');

const validateInput = (input) => {
  const inputArr = Array.from(input);
  const numberOfDigits = inputArr.length;
  const isInputCorrect = inputArr.every(el => Number.isInteger(Number(el)));

  if (numberOfDigits !== 4) {
    return incorrectNumberMessage;
  }

  if (!isInputCorrect) {
    return incorrectTypeMessage;
  }
};

module.exports = { validateInput };
