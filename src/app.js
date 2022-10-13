/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { bull } = require('./bull');
const { cow } = require('./cow');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = () => {
  terminal.question('\nEnter 4 different digits:   ', userInput => {
    if (userInput.length !== 4) {
      console.log(`Error: you entered ${userInput.length} digit('s)`);
      question();
    } else {
      const bulls = bull(userInput);
      const cows = cow(userInput);

      console.log(`The result is ${bulls} bull('s) and ${cows} cow('s)`);
      terminal.close();
    }
  });
};

question();
