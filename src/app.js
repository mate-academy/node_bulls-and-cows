/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { generate } = require('./generate');
const { calculateCowsAndBulls } = require('./calculate');

const number = generate();
const question = 'Enter a 4-digit number: ';

const checkAnswer = (message) => {
  if (isNaN(+message) || new Set(message).size !== 4) {
    console.log('Invalid enter');
    terminal.question(question, checkAnswer);

    return;
  }

  const { bulls, cows } = calculateCowsAndBulls(number, message);

  if (bulls === 4) {
    console.log('You win!');
    terminal.close();

    return;
  }

  console.log(`bulls: ${bulls}; cows: ${cows}`);
  terminal.question(question, checkAnswer);
};

terminal.question(question, checkAnswer);
