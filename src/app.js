'use strict';

const readline = require('readline');

const _ = require('lodash');

const number = _.random(1000, 9999);
const bullAndCows = [];

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function f() {
  terminal.question('What is guessed number?', (guessedNumber) => {
    if (+guessedNumber === number) {
      // eslint-disable-next-line no-console
      console.log('You win!');
      terminal.close();
    } else {
      const numArr = number.toString().split('').map((n, i) => [n, i]);
      const guessedNumArr = guessedNumber.split('').map((n, i) => [n, i]);

      for (let i = 0; i < numArr; i++) {
        if (numArr[i][1] === guessedNumArr[i][1]) {
          bullAndCows.push('bull');
        }

        for (let j = 0; j < numArr; j++) {
          if (+numArr[i][0] === +guessedNumArr[j][0]) {
            bullAndCows.push('cow');
          }
        }
      }

      let bullsCount = 0;
      let cowsCount = 0;

      bullAndCows.forEach(str => str === 'bull' ? bullsCount++ : cowsCount++);
      // eslint-disable-next-line no-console
      console.log(`${bullsCount}: bulls ${cowsCount}: cows! Try again`, number);

      return f();
    }
  });
}

f();
