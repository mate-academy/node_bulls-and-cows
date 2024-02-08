'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userInput = null;

async function askForNumber() {
  while (true) {
    const number = await new Promise((resolve) => {
      terminal.question('Enter a 4-digit (unique) number: ', resolve);
    });

    if (checkIsValidUserInput(number)) {
      userInput = number;
      break;
    }
  }
}

const generatedNumber = generateRandomNumber();

async function main() {
  while (true) {
    await askForNumber();

    if (+userInput === generatedNumber) {
      terminal.write('Congratulations you won!\n');
      break;
    }

    const response = getBullsAndCows(+userInput, generatedNumber);

    terminal.write(`${response.bulls} bulls and ${response.cows} cows\n`);
  }

  terminal.close();
}

main();
