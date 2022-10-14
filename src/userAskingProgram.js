/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { bullsCowsCalculator } = require('./bullsCowsCalculator');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isOnlyFourDigits = (input) => {
  const regex = /\d{4}/g;

  return (regex.test(input.trim())) && input.length === 4;
};

const usersQuiz = () => {
  let answers = {};

  console.log('Please type 4 digits \n');

  terminal.on('line', (userInput) => {
    const isValidInput = isOnlyFourDigits(userInput);

    if (isValidInput) {
      answers = bullsCowsCalculator(userInput);

      if (answers.isWon) {
        terminal.close();
      } else {
        console.log(`${answers.answer}. Try again! \n`);
      }
    } else {
      console.log('Incorrect input data. Please type 4 digits');
    }
  });

  terminal.on('close', () => answers.isWon
    ? console.log(answers.answer)
    : console.log('See you later')
  );
};

module.exports = { usersQuiz };
