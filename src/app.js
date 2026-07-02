'use strict';
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// Write your code here
async function main() {
  const terminal = readline.createInterface({ input, output });
  const computerInput = generateRandomNumber();

  let bullsCount = 0;

  try {
    while (bullsCount !== 4) {
      const userInput = await terminal.question('Type 4 digits number: ');

      if (!checkIsValidUserInput(userInput)) {
        console.log('Please enter 4 different digits');
        continue;
      }

      const { bulls, cows } = getBullsAndCows(computerInput, userInput);

      bullsCount = bulls;

      console.log(`
        The result is ${bulls} bull(s) and ${cows} cow(s)
      `);
    }

    console.log('You win!');
  } finally {
    terminal.close();
  }
}

main();
