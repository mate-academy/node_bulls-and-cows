/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { getRandomNumber } = require('./getRandomNumber');
const { getBullsAndCows } = require('./getBullsAndCows');

const randomNumber = getRandomNumber();

// console.log(randomNumber);

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame() {
  terminal.question('Let\'s try to guess the number!', (num) => {
    const validateNum = num.toString().split('')
      .every(ch => Number.isInteger(+ch));

    if (!validateNum) {
      console.log('Your gess must be a number!');

      return playGame();
    }

    if (num.length !== 4) {
      console.log('Number must consist of 4 digits');

      return playGame();
    }

    const { bulls, cows } = getBullsAndCows(randomNumber, num);

    if (num === randomNumber) {
      console.log('Congratulations! You won!');
      terminal.close();
    } else {
      console.log(`bulls: ${bulls}, cows: ${cows}`);
      playGame();
    }
  });
}

playGame();
