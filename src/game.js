/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const numberValidator = require('./numberValidator');

const game = (secret) => {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  terminal.question('Guess the number: ', (guess) => {
    if (guess === secret) {
      console.log('You won!');
      terminal.close();
    } else if (guess.length !== 4) {
      console.log('The number must be 4 digits long!');
      terminal.close();
      game(secret);
    } else {
      console.log(numberValidator(secret, guess));
      terminal.close();
      game(secret);
    }
  });
};

module.exports = game;
