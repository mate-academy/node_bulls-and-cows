/* eslint-disable no-console */
'use strict';

const { calculationBullsAndCows } = require('./calculatingBullsAndCows.js');
const { generateNumbers } = require('./generateNumbers.js');

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const digits = generateNumbers();

function playGame() {
  terminal.question('Let\'s play Bulls and Cows. Guess 4 different digits: ',
    (guessNums) => {
      const store = calculationBullsAndCows(digits, guessNums);

      if (guessNums.length === 4) {
        if (store.bulls !== 4) {
          console.log(`You have ${store.bulls} bulls and ${store.cows} cows!`);
          playGame();
        } else {
          console.log('Congratulations! You guessed the numbers.');
          terminal.close();
        }
      } else {
        console.log('Please, enter a correct number with 4 digits.');
        playGame();
      }
    });
}

playGame();
