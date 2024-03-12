/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rInterface = readline.createInterface(process.stdin, process.stdout);

function launchBullsAndCows() {
  const generated = generateRandomNumber();

  // eslint-disable-next-line no-unused-vars
  function processGuess() {
    rInterface.question('Enter a 4-digit number: ', (input) => {
      if (!checkIsValidUserInput) {
        console.log(
          'Must be a 4-digit number with no duplicate digits.'
        );

        return processGuess();
      }

      const res = getBullsAndCows(input, generated);

      console.log(res);

      if (res.bulls === 4) {
        console.log('You\'ve won!');
      } else {
        processGuess();
      }
    });
  }
}

launchBullsAndCows();
