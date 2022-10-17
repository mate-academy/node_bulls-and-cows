/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

const styles = require('terminal-styles');
const readline = require('readline');

const randomNumber = require('./getRandomNumber');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { red, green, x } = styles;

const game = () => {
  terminal.question('Guess the number: ', (answer) => {
    if (answer.length !== 4) {
      console.log(styles`${red}Please enter a number with 4 digits${x}`);
      game();
    } else if (answer === randomNumber.toString()) {
      console.log(styles`${green}You guessed correctly!${x}`);
      terminal.close();
    } else {
      const bulls = answer
        .split('')
        .filter((item, index) => item === randomNumber.toString()[index]).length;
      const cows = answer
        .split('')
        .filter((item) => randomNumber.toString().includes(item)).length - bulls;

      console
        .log(styles`${red}You guessed incorrectly!${x}` + ` Cows: ${cows} Bulls: ${bulls}`);
      game();
    }
  });
};

const isFirstTime = () => {
  terminal.question('Is this your first time? (y/n) ', (answer) => {
    if (answer === 'y') {
      console.log('Welcome!');
      game();
    } else if (answer === 'n') {
      console.log('Welcome back!');
      terminal.close();
    } else {
      console.log(red('Please enter y or n'));
      isFirstTime();
    }
  });
};

isFirstTime();
