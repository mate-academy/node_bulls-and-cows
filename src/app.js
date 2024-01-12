/* eslint-disable no-console */
'use strict';

const { calculateBullsCows } = require('./calculateBullsCows');
const { generateNumber } = require('./generateNumber');
const { ioClient } = require('./ioClient');

const numberToGuess = generateNumber();
let resultOfGuess = '';

while (true) {
  resultOfGuess = calculateBullsCows(ioClient(), numberToGuess);

  console.log(resultOfGuess);

  if (resultOfGuess === numberToGuess) {
    console.log('Congratulations, you won!');
    break;
  }
}
