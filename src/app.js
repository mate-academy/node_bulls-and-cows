/* eslint-disable no-console */
'use strict';

const { createInterface } = require('readline');
const { generateNumbers } = require('./generateNumbers');
const { check } = require('./checkInput');

const game = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const number = generateNumbers();

const runGame = () => {
  game.question('Guess the number! ', (guess) => {
    const stringToCheck = new Set(guess
      .split('')
      .map(Number));

    if (stringToCheck.size === 4) {
      const answer = check(number, guess);
      const bulls = answer[0];
      const cows = answer[1];

      if (bulls === 4) {
        console.log('You won');
        game.close();
      } else {
        console.log(`Bulls: ${bulls}, Cows: ${cows}`);
        runGame();
      }
    } else {
      console.log('Provide 4 different digits');
      runGame();
    }
  });
};

runGame();
