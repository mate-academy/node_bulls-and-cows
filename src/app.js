/* eslint-disable no-console */
'use strict';

const chalk = require('chalk');
const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout
);

const randomNumber = generateRandomNumber();

const main = () => {
  terminal.question('Enter number: ', (input) => {
    if (!checkIsValidUserInput(input)) {
      console.log(chalk.red('Number is not valid. Try again.'));
      main();
    } else {
      const result = getBullsAndCows(input, randomNumber);

      if (result.bulls !== 4) {
        console.log(`${JSON.stringify(result)}`, chalk.yellow('Guess again'));
        main();
      } else {
        console.log(chalk.green('Congratulations! You guessed the number!'));
        terminal.close();
      }
    }
  });
};

main();
