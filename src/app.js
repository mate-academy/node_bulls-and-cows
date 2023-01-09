'use strict';

const { getGeneratedNumber } = require('./getGeneratedNumber');
const { terminalOperations } = require('./terminal');

const number = getGeneratedNumber();

terminalOperations(
  'Guess the number. Enter a number with 4 different digits ',
  number);
