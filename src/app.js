'use strict';

const { getRandomNumbers } = require('./getRandomNumber');
const { getResultString } = require('./getResultString');
const readline = require('readline');

const randomNumbers = getRandomNumbers();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Write your suppose', response => {
  if (response.length < 4 || response.length > 4) {
    throw new Error('Please write only 4 numbers');
  }

  const result = {};

  for (let i = 0; i < response.length; ++i) {
    if (response[i] === randomNumbers[i]) {
      result.bull
        ? result.bull += 1
        : result.bull = 1;
    } else if (randomNumbers.includes(response[i])) {
      result.cow
        ? result.cow += 1
        : result.cow = 1;
    }
  }

  return getResultString(result);
});
