/* eslint-disable no-console */
'use strict';

const { isNumberValid } = require('./isValidNumber');
const { getResultString } = require('./getResultString');
const { getRandomNumbers } = require('./getRandomNumber');
const readline = require('readline');

const randomNumbers = getRandomNumbers();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Write your suppose', response => {
  if (!isNumberValid(response)) {
    throw new Error('Please write only 4 different numbers');
  }

  const result = {
    cow: 0,
    bull: 0,
  };

  for (let i = 0; i < response.length; ++i) {
    if (response[i] === randomNumbers[i]) {
      result.bull += 1;
    } else if (randomNumbers.includes(response[i])) {
      result.cow += 1;
    }
  }

  if (response === randomNumbers) {
    console.log('Good job!');

    terminal.close();
  }

  console.log(getResultString(result));

  terminal.close();
});
