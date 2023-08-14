/* eslint-disable no-console */
'use strict';

const { randomNumber } = require('./randomNumber');
const { findBulls, findCows } = require('./calculation');
const { readline } = require('./readline');

const random = randomNumber();

function startGame() {
  readline.question(`Guess a number of 4 different digits `, number => {
    if (String(number).length < 4) {
      console.log('Number should have 4 digits');

      startGame();
    }

    if (new Set(String(number).split('')).size !== 4) {
      console.log('Number should have 4 different digits');

      startGame();
    }

    if (findBulls(number, random) === 4) {
      console.log('You won');

      readline.close();

      return;
    }

    const bulls = findBulls(number, random);
    const cows = findCows(number, random);

    console.log(`The result is ${bulls} bulls and ${cows} cows`
    );

    startGame();
  });
}

startGame();
