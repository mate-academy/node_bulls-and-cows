/* eslint-disable no-console */
'use strict';

const { getRandomInt } = require('./getRandomInt');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const { game } = require('./game');

const randomNum = getRandomInt(1111, 9999);

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

    console.log(`Bulls: ${result.bulls}, cows: ${result.cows}`);

    askQuestion();
  });
};

askQuestion();
