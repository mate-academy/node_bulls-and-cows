/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const programNumber = require('./getRandomInt');
const { calculation } = require('./calculation');

console.log('Gues the number(4 digits)\n');

terminal.on('line', (gues) => {
  const testarr = gues.split('')
    .filter((item, pos) => gues.indexOf(item) === pos);

  if (testarr.length === gues.length) {
    calculation(gues);

    if (programNumber.programNumber === gues) {
      console.log('Winner!!!');
      terminal.close();
    } else {
      console.log(
        '\n',
        '=========================================', '\n', '\n',
        'Try again:\n'
      );
    }
  } else {
    console.log(
      '\n',
      'Enter different digits!', '\n', '\n',
      'Try again:\n');
  }
});
