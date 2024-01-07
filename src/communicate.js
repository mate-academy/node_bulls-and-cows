/* eslint-disable no-console */
'use strict';

const { getAnswer } = require('./getAnswer');
const readline = require('readline');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout,
);

function chekValidation(input) {
  const isValidLength = input.length === 4;
  const isValidData = input.split('')
    .every(symb => symb.toLowerCase() === symb.toUpperCase());

  return isValidData && isValidLength;
}

function communicate() {
  terminal.question("Gess numbers and their's positions ",
    (userInput) => {
      if (chekValidation(userInput)) {
        const answer = getAnswer(userInput);

        console.log(answer);

        if (answer === 'bull bull bull bull') {
          console.log('You genius');
          terminal.close();
        } else {
          communicate();
        }
      } else {
        console.log('Invalid input! It should consist of 4 numbers');
        communicate();
      }
    });
};

module.exports = {
  communicate,
};
