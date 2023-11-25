/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateDigits } = require('./generateDigits');
const { checkDigits } = require('./checkDigits');

const answer = generateDigits();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayResult(result) {
  console.log(result);
}

function setPromptAndPrompt(prompt) {
  terminal.setPrompt(prompt);
  terminal.prompt();
}

function handleInput(input) {
  const result = checkDigits(input, answer);

  displayResult(result);

  if (result === 'You won!') {
    terminal.close();
  } else {
    setPromptAndPrompt('Enter digits: ');
  }
}

function askForDigits() {
  console.log(answer); // Just for testing
  setPromptAndPrompt('Enter digits: ');

  terminal.on('line', handleInput);
}

askForDigits();
