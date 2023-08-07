/* eslint-disable no-console */
'use strict';

const { terminal } = require('./modules/terminal');
const { numGenerator } = require('./modules/numGenerator');
const { calculateBulls } = require('./modules/calculateBulls');
const { calculateCows } = require('./modules/calculateCows');

const secretNumber = numGenerator();

const gameRound = () => {
  terminal.question('Guess the number: ', (answer) => {
    if (answer.length !== 4) {
      console.log('Wrong number length');

      gameRound();

      return;
    }

    if ([...new Set(answer.split(''))].length !== 4) {
      console.log('Number should not contain repeating digits');

      gameRound();

      return;
    }

    if (answer === secretNumber) {
      console.log('You won!');

      terminal.close();

      return;
    }

    const bulls = calculateBulls(secretNumber, answer);
    const cows = calculateCows(secretNumber, answer);

    console.log(`${bulls} bulls and ${cows} cows`);

    gameRound();
  });
};

gameRound();
