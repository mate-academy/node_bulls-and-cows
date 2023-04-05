/* eslint-disable no-console */
'use strict';

const { uniq, size } = require('lodash');
const { readlineInterface } = require('./terminal');
const { generateDigits } = require('./generateRandomDigits');
const { calculateDigits } = require('./calculateDigits');

const randomDigits = generateDigits();

function letsPlay() {
  readlineInterface.question('Guess the four-digit number: ', input => {
    const uniqDigits = uniq(input.split('')).join('');

    if (size(uniqDigits) !== 4) {
      console.log('Please enter four valid different digits!');

      letsPlay();
    } else {
      const { bulls, cows } = calculateDigits(uniqDigits, randomDigits);

      console.log(`Bulls: ${bulls}, Cows: ${cows}`);

      if (bulls === 4) {
        console.log('Congratulations! You won!');

        readlineInterface.question('Let\'s play again? (Yes/No): ', answer => {
          if (answer.toLocaleLowerCase() === 'yes') {
            letsPlay();
          } else {
            readlineInterface.close();
          }
        });
      } else {
        letsPlay();
      }
    }
  });
}

module.exports = { letsPlay };
