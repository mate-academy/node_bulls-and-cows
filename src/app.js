'use strict';

const { generateNumber } = require('./generateNumber');
const { countBullsAndCows } = require('./countBullsAndCows');

const readline = require('readline');

const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generatedNumber = generateNumber();

function game() {
  cli.question('guess number pls\n', (answer) => {
    if (answer.length !== 4) {
      game();
    }

    if (answer === generatedNumber) {
      cli.write('Congrats you guessed a number');
      process.kill(0);
    }

    if (answer.length === 4) {
      const bullsAndCows = countBullsAndCows(generatedNumber, answer);

      cli.write(`${bullsAndCows[0]} bulls and ${bullsAndCows[1]} cows`);
      game();
    }
  });
}

game();
