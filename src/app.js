/* eslint-disable no-console */
'use strict';

const randomNum = require('./randomNumber');
const prompt = require('./prompt');
const calculator = require('./calculator');

(async() => {
  const num = randomNum();

  console.log(num);

  while (true) {
    const answer = await prompt('Enter 4 digits');
    const result = calculator(num, answer);

    if (answer.length !== 4) {
      console.log('You need to enter exact 4 digits');
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
