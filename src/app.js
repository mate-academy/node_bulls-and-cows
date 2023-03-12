/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateDifferentDigits } = require('./generatingNumber');
const { getBullAndCows } = require('./BullCowsCalculation');
const { validateInput } = require('./validation');

const {
  initialQuestion,
  congratulateMessage,
  getBullCowsMessage,
} = require('./messages');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generatedDigits = generateDifferentDigits();

const handleUserAnswer = (userInput) => {
  const { bulls, cows } = getBullAndCows(userInput, generatedDigits);
  const validationMessage = validateInput(userInput);

  if (validationMessage) {
    return makeQuestion(validationMessage);
  }

  if (bulls !== 4) {
    const message = getBullCowsMessage(bulls, cows);

    return makeQuestion(message);
  }
  console.log(congratulateMessage);
  rl.close();
};

const makeQuestion = (message) => {
  rl.question(message, handleUserAnswer);
};

const start = () => {
  rl.question(initialQuestion, handleUserAnswer);
};

start();
