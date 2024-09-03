'use strict';

const {
  checkIsValidUserInput,
} = require('../src/modules/checkIsValidUserInput');
const { generateRandomNumber } = require('../src/modules/generateRandomNumber');
const { getBullsAndCows } = require('../src/modules/getBullsAndCows');
const readline = require('node:readline');

const terminal = readline.createInterface(process.stdin, process.stdout);

const randomNumber = generateRandomNumber();

function game() {
  terminal.question('Gess the number', (writtenNumber) => {
    if (!checkIsValidUserInput(writtenNumber)) {
      console.log('enter a valid number');
      game();
    } else {
      if (+writtenNumber === randomNumber) {
        console.log('you win');
        terminal.close()
      } else {
        console.log(getBullsAndCows(writtenNumber, randomNumber));
        game();
      }
    }
  });
}

game();
