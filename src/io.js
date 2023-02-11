'use strict';

const prompt = require('prompt-sync')();

const question = () => {
  const numbers = prompt('Enter 4 numbers: ');

  if (numbers.length !== 4 || !numbers.match(/^[0-9]+$/)) {
    // eslint-disable-next-line no-console
    console.log('You must enter 4 numbers!');

    return question();
  }

  return numbers.split('').map(Number);
};

module.exports = {
  question,
};
