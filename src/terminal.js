/* eslint-disable no-console */
'use strict';

const { generateNum } = require('./generate');
const { calculate } = require('./calculate');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

exports.question = () => {
  terminal.question('Please, type 4-digits number ', (answer) => {
    const random = generateNum();

    if (answer === random) {
      console.log('You Win!');
    // eslint-disable-next-line max-len
    } else if ([...new Set(answer)].join('').length !== 4 || isNaN(+answer)) {
      console.log('You have type only 4-unique digits number, try again');
    } else {
      console.log(calculate(random, answer), `initial number was ${random}`);
    }

    terminal.close();
  });
};
