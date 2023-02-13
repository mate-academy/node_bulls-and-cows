/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const generate = require('./generate');
const calculate = require('./calculate');
const checkInput = require('./checkInput');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const initialPrompt = 'Enter 4 unique digits\n\n';
const number = generate();
const prompt = (question) => terminal.question(question, operate);

const operate = (input) => {
  if (checkInput(input)) {
    prompt(initialPrompt);

    return;
  }

  const { bulls, cows } = calculate(input, number);

  if (bulls === 4) {
    console.log('Congratulations!');
    terminal.close();

    return;
  }

  console.log(`\nBulls: ${bulls}\nCows: ${cows}\n`);

  prompt('Try again\n\n');
};

prompt(initialPrompt);
