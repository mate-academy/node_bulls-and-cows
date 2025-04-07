'use strict';

const readline = require('node:readline');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber();

function startGame() {
  terminal.write('Game started\n');

  terminal.question('Please write your number - ', (name) => {
    if (!checkIsValidUserInput(name)) {
      terminal.write(`Invalid input ${name}, please use example: 1234\n`);
      startGame();

      return;
    }

    const result = getBullsAndCows(name, randomNumber);

    terminal.write(`Result: bulls ${result.bulls} & cows ${result.cows}\n`);
    terminal.write('\n');

    if (result.bulls !== 4) {
      startGame();

      return;
    }

    terminal.write('Congratultions you nailed it\n');

    terminal.close();
  });
}

startGame();
