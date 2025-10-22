/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGame() {
  const randomNumber = generateRandomNumber();

  console.log('Welcome to the Bulls and Cows game!');
  console.log('Try to guess the 4-digit number with unique digits.');

  function ask() {
    terminal.question('Enter your number: ', (personNumber) => {
      if (!checkIsValidUserInput(personNumber)) {
        console.log('Invalid number. Please enter a valid 4-digit number.');
        ask();
      } else {
        const result = getBullsAndCows(personNumber, randomNumber);

        if (result.bulls === 4) {
          console.log('Congratulations! You guessed the number!');
          terminal.close();
        } else {
          const bulls = result.bulls;
          const cows = result.cows;

          console.log(`Bulls: ${bulls}, Cows: ${cows}`);
          ask();
        }
      }
    });
  }
  ask();
}
startGame();
