'use strict';
/* eslint-disable no-console */

const { generateNumber } = require('./generateNumber');
const { getValidInput } = require('./inputValidation');
const { isWin, getResult } = require('./checkResult');

const number = generateNumber();

while (true) {
  const currentGuess = getValidInput();

  if (isWin(number, currentGuess)) {
    console.log('Congrats number is found!');
    break;
  }

  console.log(getResult(number, currentGuess));
}
