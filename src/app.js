'use strict';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { getNumber } = require('./getNumber');
const { isValidNumber } = require('./isValidNumber');
const { countBullsAndCows } = require('./countBullsAndCows');

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberLenght = 4;
const number = getNumber(digits, numberLenght);
let turn = 0;

rl.write(`Try to guess a number of ${numberLenght} digits\n`);

function bullsAndCowsGame() {
  rl.question('\nEnter your number to play or "q" to exit: ', (userNumber) => {
    if (userNumber === 'q') {
      rl.close();

      return;
    }

    if (isValidNumber(userNumber, numberLenght)) {
      turn++;

      if (userNumber === number) {
        rl.write(turn === 1
          ? `Congrats! You guess a number in 1 turn\n`
          : `Congrats! You guess a number in ${turn} turns\n`
        );
        rl.close();

        return;
      }
      rl.write(countBullsAndCows(number, userNumber) + '\n');
    } else {
      rl.write(`Your should enter a number of ${numberLenght} `
        + 'different digits!\n');
    }
    rl.write('Try again...\n');
    bullsAndCowsGame();
  });
}

bullsAndCowsGame();
