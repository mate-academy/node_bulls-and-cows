/* eslint-disable no-console */
'use strict';

const { calc } = require('./calc');

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tries = 1;

const guess = (digits) => {
  rl.question(`${tries} try: `, (userInput) => {
    const bulls = calc(userInput, digits)[0];
    const cows = calc(userInput, digits)[1];

    if (tries === 5) {
      console.log('I believe that you will succeed');
    }

    if (tries === 10) {
      console.log('Don\'t give up');
    }

    tries++;

    if (bulls < 4) {
      console.log(`${bulls || 0} bulls and ${cows || 0} cows`);
      guess(digits);
    } else {
      console.log('You win!');
      rl.close();
    }
  });
};

module.exports.guess = guess;
