'use strict';

const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber();

function game() {
  terminal.question('Enter a number: ', (input) => {
    if (checkIsValidUserInput(input)) {
      const result = getBullsAndCows(input, randomNumber);

      if (result.bulls === 4) {
        terminal.write('You won! \n');
        terminal.close();

        return;
      }

      terminal.write(
        `The result is ${result.bulls} bulls and ${result.cows} cows \n`,
      );
    } else {
      terminal.write('Invalid input \n');
    }

    game();
  });
}

game();
