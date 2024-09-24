/* eslint-disable no-console */
'use strict';
import inquirer from 'inquirer';
import chalk from 'chalk';
import checkIsValidUserInput from './modules/checkIsValidUserInput.js';
import getBullsAndCows from './modules/getBullsAndCows.js';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'guessedNumbers',
      message: "Let's start game! Write four numbers in field:\n",
      validate: (result) => {
        const check = checkIsValidUserInput(result);

        if (!check) {
          return 'Please try again';
        }

        return true;
      },
    },
  ])
  .then((answers) => {
    console.log(
      chalk.green('Your result is:'),
      getBullsAndCows(answers.guessedNumbers),
    );
  });

// const readline = require('node:readline');

// const terminal = inquirer.createInterface(process.stdin, process.stdout);
// const { getBullsAndCows } = require('./modules/getBullsAndCows');
// const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

// async function runTerminal() {
//   while (true) {
//     const numbers = await new Promise((resolve) => {
//       terminal.question(
//         "Let's start game! Write four numbers in field:\n",
//         resolve,
//       );
//     });

//     const check = await checkIsValidUserInput(numbers);

//     if (!check) {
//       process.stdout.write('False, check numbers, try again!\n');

//       continue;
//     }

//     const result = await getBullsAndCows(numbers);
//     const resStr = JSON.stringify(result);

//     process.stdout.write(`Result is ${resStr}\n`);

//     const continueGame = await new Promise((resolve) => {
//       terminal.question('Do you want to continue GAME, Yes/No ?', resolve);
//     });

//     if (continueGame.toLowerCase() === 'no') {
//       break;
//     }
//   }

//   terminal.close();
// }

// runTerminal();
