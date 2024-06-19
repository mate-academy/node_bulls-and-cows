/* eslint-disable no-console */

'use strict';

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const readline = require('readline');

const terminal = readline.createInterface(process.stdin, process.stdout);

const randomNumber = generateRandomNumber();

terminal.question('guess a number', (usersRespond) => {
  if (checkIsValidUserInput(usersRespond)) {
    getBullsAndCows(+usersRespond, randomNumber);
  } else {
    console.log(
      'Please, insert 4 different numeric digits, and avoid 0 as first digit',
    );
  }

  terminal.close();
});
