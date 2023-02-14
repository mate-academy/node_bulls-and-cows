/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { checkNumber } = require('./checkNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');

function requestNumber(generatedNum) {
  terminal.question('Enter 4-different-digits number ', (enteredNum) => {
    if (generatedNum === enteredNum) {
      console.log('Congratulation! You guessed!');
      terminal.close();
    }

    const isNumValid = checkNumber(enteredNum);

    if (!isNumValid) {
      console.log('Entered uncorrect number');
      requestNumber(generatedNum);
    }

    if (isNumValid && generatedNum !== enteredNum) {
      const bullsAndCowsMessage = calculateBullsAndCows(
        generatedNum, enteredNum,
      );

      console.log(bullsAndCowsMessage);
      requestNumber(generatedNum);
    }
  });
}

exports.requestNumber = requestNumber;
