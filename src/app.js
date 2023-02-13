/* eslint-disable no-console */
'use strict';

const { isNumberValid } = require('./utils/isValidNumber');
const { getResultString } = require('./helpers/getResultString');
const { getRandomNumbers } = require('./helpers/getRandomNumber');
const _ = require('lodash');
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

  const responseArray = [...response];

  if (_.isEqual(randomNumbers, responseArray)) {
    console.log('Good job!');

    terminal.close();

    return;
  }

  const result = {
    cow: 0,
    bull: 0,
  };

  randomNumbers.forEach((num, id) => {
    if (response[id] === num[id]) {
      result.bull += 1;
    } else if (num.includes(response[id])) {
      result.cow += 1;
    }
  });

  console.log(getResultString(result));

  terminal.close();
});
