'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const main = function () {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const randomNumber = generateRandomNumber();

  const processTerminalInput = function () {
    terminal.question('Enter the number: ', (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        terminal.write(
          'Your input is not valid. Enter 4 non duplicate digit number.\n',
        );
        processTerminalInput();
      } else {
        const bullsAndCows = getBullsAndCows(userInput, randomNumber);

        terminal.write(`${JSON.stringify(bullsAndCows)}\n`);

        if (bullsAndCows.bulls === 4) {
          terminal.write("You've found the right number!\n");
          terminal.close();
        } else {
          terminal.write('Try more!\n');
          processTerminalInput();
        }
      }
    });
  };

  processTerminalInput();
};

main();
