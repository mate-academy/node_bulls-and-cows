/* eslint-disable no-console */
'use strict';

const { generateNumber } = require('./generateNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateNumber();

function play() {
  rl.question('Guess the four-digit number: ', (input) => {
    if (input.length !== 4 || new Set(input).size !== 4) {
      console.log('Please enter a valid four-digit number with unique digits!');
      play();
    } else {
      const { bulls, cows } = calculateBullsAndCows(input, secretNumber);

      console.log(`Bulls: ${bulls}, Cows: ${cows}`);

      if (bulls === 4) {
        console.log('Congratulations! You guessed the number!');
        rl.close();
      } else {
        play();
      }
    }
  });
}

play();
