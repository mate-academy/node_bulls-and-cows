'use strict';

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const readline = require('readline');

const numberRandom = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prediction() {
  rl.question('Enter a 4 digits number: ', (res) => {
    if (checkIsValidUserInput(res)) {
      const result = getBullsAndCows(res, numberRandom);

      process.stdout.write(`Bulls: ${result.bulls}, Cows: ${result.cows}\n`);

      if (result.bulls === 4) {
        process.stdout.write('Congratulations, you got it.');
        rl.close();
      } else {
        prediction();
      }
    } else {
      process.stdout.white('Invalid! Please enter a 4 digits number again.');
      prediction();
    }
  });
}

prediction();
