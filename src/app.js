'use strict';

const readline = require('readline');

const _ = require('lodash');

const number = _.random(1000, 9999);
let bullAndCows = [];

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
      const numArr = number.toString().split('');
      const guessedNumArr = guessedNumber.split('');

      for (let i = 0; i < guessedNumArr.length; i++) {
        if (+numArr[i] === +guessedNumArr[i]) {
          bullAndCows.push('bull');
          continue;
        }

        if (numArr.includes(guessedNumArr[i])) {
          bullAndCows.push('cow');
        }
      }

      let bullsCount = 0;
      let cowsCount = 0;

      bullAndCows.forEach(str => {
        str === 'bull' ? bullsCount += 1 : cowsCount += 1;
      });
      // eslint-disable-next-line no-console
      console.log(`${bullsCount}: bulls ${cowsCount}: cows! Try again`, number);

      bullsCount = 0;
      cowsCount = 0;
      bullAndCows = [];

      return f();
    }
  });
}

f();
