'use strict';

const readline = require('node:readline');
const terminal = readline.createInterface(process.stdin, process.stdout);
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

async function runTerminal() {
  while (true) {
    const numbers = await new Promise((resolve) => {
      terminal.question(
        "Let's start game! Write four numbers in field:\n",
        resolve,
      );
    });

    const check = await checkIsValidUserInput(numbers);

    if (!check) {
      process.stdout.write('False, check numbers, try again!\n');

      continue;
    }

    const result = await getBullsAndCows(numbers);
    const resStr = JSON.stringify(result);

    process.stdout.write(`Result is ${resStr}\n`);

    const continueGame = await new Promise((resolve) => {
      terminal.question('Do you want to continue GAME, Yes/No ?', resolve);
    });

    if (continueGame.toLowerCase() === 'no') {
      break;
    }
  }

  terminal.close();
}

runTerminal();
