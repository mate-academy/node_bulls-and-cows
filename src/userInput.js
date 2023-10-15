'use strict';

const prompt = require('prompt-sync')();

const userNumber = prompt('Guess and write number:  ');

if (userNumber.length !== 4) {
  // eslint-disable-next-line no-console
  console.log('Incorrect number');
  process.exit(1);
}

module.exports = { userNumber };
