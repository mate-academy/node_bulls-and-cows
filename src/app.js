/* eslint-disable no-console */
'use strict';

const { calculateBullsCows } = require('./calculateBullsCows');
const { generateNumber } = require('./generateNumber');
const { ioClient } = require('./ioClient');

const numberToGuess = generateNumber();
let resultOfGuess = '';

while (true) {
  const guess = ioClient();

  resultOfGuess = calculateBullsCows(guess, numberToGuess);

  if (resultOfGuess === -1) {
    break;
  }

  console.log(resultOfGuess);

}
