/* eslint-disable no-console */
'use strict';

const { createInterface } = require('readline');
const { calculator } = require('./calculator');
const { generator } = require('./generator');

const terminal = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const goal = generator();

function runCattleGame() {
  terminal.question('\nEnter your 4-digits number: ', (guess) => {
    if (guess.length !== 4 || isNaN(guess)) {
      console.log(`The number must consist of 4 digits!`);

      return runCattleGame();
    }

    const [ bulls, cows ] = calculator(goal, guess);

    if (bulls === 4) {
      console.log(`You won at last... The number is ${goal}`);
      terminal.close();

      return;
    }

    console.log(`You've guessed ${bulls} bulls and ${cows} cows. Try again!`);

    runCattleGame();
  });
}

runCattleGame();
