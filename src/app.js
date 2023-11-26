'use strict';

const readline = require('readline');
const { checker } = require('./digitsChecker');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout
);

const game = () => {
  terminal.question('Enter 4 different digits', (digits) => {
    const answer = checker(digits);

    console.log(answer);

    if (answer === 'bullbullbullbull') {
      terminal.close();
    } else {
      game();
    }
  });
};

game();
