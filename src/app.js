/* eslint-disable no-console */
'use strict';

const { checkNumber } = require('./checkNumber');
const { terminal, closeTerminal } = require('./termimal');

terminal.question('Do you want to play?', (answer) => {
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    return terminal.question('Enter a 4 different digit number.', (number) => {
      return checkNumber(number);
    });
  }

  console.log('ok(');

  return closeTerminal();
});
