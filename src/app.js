'use strict';

/* eslint-disable no-console */

const { generateRandomNumber } = require('./generateRandomNumber');
const { countBullsAndCows } = require('./countBullsAndCows');
const { isValidGuess } = require('./isValidGuess');
const readline = require('readline');

const randomNumber = generateRandomNumber();
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame() {
  terminal.question(
    'There you go, guess my guess... ',
    (guesses) => {
      if (isValidGuess(guesses)) {
        const result = countBullsAndCows(randomNumber, guesses);

        console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

        if (result.bulls === 4) {
          console.log('Congratulations! You have guessed the number!');
          terminal.close();
        } else {
          playGame();
        }
      } else {
        console.log('You are on your way! Keep on trying.');
        playGame();
      }
    }
  );
}

console.log('Welcome to Bulls and Cows Game!');

console.log('Try to guess the 4-digit number '
  + 'with no repeated digits that I have just guessed.');
playGame();
