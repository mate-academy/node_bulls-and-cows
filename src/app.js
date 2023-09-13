/* eslint-disable no-console */
'use strict';

const { numbersGenerator } = require('./numbersGenerator');
const { getBulsCows } = require('./getBulsCows');
const readline = require('readline');

const randomNumber = numbersGenerator();

const terminal = readline.createInterface(
  process.stdin,
  process.stdout
);

const playGame = () => {
  terminal.question('Please guess the 4-digit number:', (guess) => {
    if (guess.length !== 4 || !Number(guess)) {
      console.log('Please enter a valid 4-digit number. Thank you!');
      playGame();

      return;
    }

    if (new Set(guess.split('')).size !== 4) {
      console.log('Please enter 4 different didgit number. Thank you!');
      playGame();

      return;
    }

    const result = getBulsCows(randomNumber, guess);

    if (result.bulls === 4) {
      console.log('Well done! You guessed the correct number!');
      terminal.close();
    } else {
      console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
      playGame();
    }
  });
};

console.log('Lets play Bulls and Cows game!');

playGame();
