/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { bullAndCows } = require('./bull_and_cows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(function game() {
  terminal.question('Please guess the secret four-digit number ', (num) => {
    const { cowCount, bullCount } = bullAndCows(num);

    const uniqueInput = Array.from(new Set(num));

    if (!uniqueInput) {
      console.log('Please enter four different numbers!');
      game();
    } else {
      if (bullCount >= 4) {
        console.log(
          `\tCongratulations, you won!
        Your result: ${bullCount} bulls and ${cowCount} cows`
        );
        terminal.close();
      } else {
        console.log(`Bulls: ${bullCount} Cows: ${cowCount}`);
        game();
      }
    }
  });
})();
