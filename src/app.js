/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGame() {
  const randomNumber = generateRandomNumber();

  function ask() {
    rl.question(
      'Welcome to the game Bulls and cows! Please enter your number:',
      (personNumber) => {
        if (!checkIsValidUserInput(personNumber)) {
          console.log('Invalid number. Please enter a valid 4-digit number.');
          ask();
        } else {
          const result = getBullsAndCows(personNumber, randomNumber);

          if (result.bulls === 4) {
            console.log('Congratulations! You guessed the number!');
            rl.close();
          } else {
            const bulls = result.bulls;
            const cows = result.cows;

            console.log(`Bulls: ${bulls}, Cows: ${cows}`);
            ask();
          }
        }
      },
    );
  }
  ask();
}
startGame();

module.exports = {
  startGame,
};
