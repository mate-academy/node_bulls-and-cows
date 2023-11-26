/* eslint-disable no-console */
'use strict';

const { getResponse } = require('./getResponse');
const prompt = require('prompt-sync')({ sigint: true });

function gameIO(number) {
  let foundCorrectNumber = false;

  console.log('Try to guess a 4 digits number');

  while (!foundCorrectNumber) {
    const guess = prompt('Your guess is:');

    if (getResponse(guess, number) === 'MATCH') {
      foundCorrectNumber = true;
      console.log('Congrats, you got it!');
    } else {
      console.log(`Almost there ${getResponse(guess, number)}`);
      console.log('Sorry, guess again!');
    }
  }
}

module.exports = {
  gameIO,
};
