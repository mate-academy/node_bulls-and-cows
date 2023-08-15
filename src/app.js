/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { getRandomInt } = require('./getRandomInt');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');

const randomNum = getRandomInt(1111, 9999);

const game = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = () => {
  game.question('Guess a number (4 different digits): ', (number) => {
    if (!Number.isInteger(+number)) {
      console.log('The value is not a number');

      askQuestion();

      return;
    }

    if (number.toString().length !== 4) {
      console.log('Enter a number of 4 different digits');

      askQuestion();

      return;
    }

    const result = calculateBullsAndCows(+number, randomNum);

    if (+result.bulls === 4) {
      console.log('You win!');

      game.close();

      return;
    }

    const bullsPartMessage = result.bulls > 1
      ? result.bulls + ' bulls'
      : result.bulls + ' bull';
    const cowsPartMessage = result.cows > 1
      ? result.cows + ' cows'
      : result.cows + ' cow';

    console.log(`The result is ${bullsPartMessage} and ${cowsPartMessage}`);

    askQuestion();
  });
};

askQuestion();
