'use strict';

/* eslint-disable no-console */

const { generateRandomNumber } = require('./generateRandomNumber');
const { countBullsAndCows } = require('./countBullsAndCows');
const { isValidGuess } = require('./isValidGuess');
const { NUMBER_OF_DIGITS } = require('./constants');
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
        const { bulls, cows } = countBullsAndCows(randomNumber, guesses);

        console.log(`Bulls: ${bulls}, Cows: ${cows}`);

        if (bulls === NUMBER_OF_DIGITS) {
          console.log('Congratulations! You have guessed the number!');
          terminal.close();
        } else {
          console.log('You are on your way! Keep on trying.');
          playGame();
        }
      } else {
        console.log(`You have to enter the ${NUMBER_OF_DIGITS}-digit number.`);
        playGame();
      }
    }
  );
}

console.log('Welcome to Bulls and Cows Game!');

console.log(`Try to guess the ${NUMBER_OF_DIGITS}-digit number `
  + 'with no repeated digits that I have just guessed.');
playGame();
