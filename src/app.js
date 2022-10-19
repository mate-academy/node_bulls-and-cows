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
    } else if (isNaN(+answer)) {
      console.log(styles`${red}Please enter a NUMBER${x}`);
      game();
    } else if (answer !== [...new Set(answer)].join('')) {
      console.log(styles`${red}Please enter a number with unique digits${x}`);
      game();
    } else if (answer === randomNumber) {
      console.log(styles`${green}You guessed correctly!${x}`);
      terminal.close();
    } else {
      const bulls = [...answer]
        .filter((item, index) => item === randomNumber[index]).length;
      const cows = [...answer]
        .filter((item) => randomNumber.includes(item)).length - bulls;

      console
        .log(styles`${red}You guessed incorrectly!${x}` + ` Cows: ${cows} Bulls: ${bulls}`);
      game();
    }
  });
};

game();
