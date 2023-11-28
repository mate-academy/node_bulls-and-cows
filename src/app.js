/* eslint-disable no-console */
'use strict';

const randomNumber = require('./randomNumber');
const prompt = require('./prompt');
const calculator = require('./calculator');

(async() => {
  const num = +randomNumber();

  console.log(num);

  while (true) {
    const answer = await prompt('Enter 4 digits');
    const result = calculator(num, answer);

    if (answer.length !== 4) {
      console.log('You need to enter exact 4 digits');
      break;
    }

    if (new Set(answer).size !== 4) {
      console.log('All digits must be unique');
      break;
    }

    if (num === +answer) {
      console.log('You won!');
      break;
    }

    console.log(result);
  }
})()
  .finally(() => process.exit(0));
