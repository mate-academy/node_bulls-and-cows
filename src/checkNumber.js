/* eslint-disable no-console */
'use strict';

const { terminal, closeTerminal } = require('./termimal');
const { uniqueNumber } = require('./generateNumber');

function calculateCowsAndBulls(number) {
  const answer = [];

  if (number === uniqueNumber) {
    console.log('You win!');

    return closeTerminal();
  }

  for (let i = 0; i < number.length; i++) {
    if (uniqueNumber.includes(number[i])) {
      if (number[i] === uniqueNumber[i]) {
        answer.push('bull');

        continue;
      }
      answer.push('cow');
    }
  }

  const cows = answer.filter(item => item === 'cow').length || 0;
  const bulls = answer.filter(item => item === 'bull').length || 0;

  console.log(`You have ${cows} ${cows === 1
    || cows === 0 ? 'cow' : 'cows'} and ${bulls} ${bulls === 0
    || bulls === 1 ? 'bull' : 'bulls'}.`);

  return terminal.question('Enter a 4 different digit number.', (n) => {
    return checkNumber(n);
  });
};

function checkNumber(number) {
  let numbers = '';
  const errorMessage = 'You must enter 4 different digit number.';

  for (const key of number) {
    if (isNaN(+key / 1) || numbers.includes(key) || number.length !== 4) {
      console.log(errorMessage);

      return terminal.question('Enter a 4 different digit number.', (n) => {
        return checkNumber(n);
      });
    }

    numbers = numbers + key;
  };

  return calculateCowsAndBulls(number);
};

module.exports = {
  checkNumber,
};
