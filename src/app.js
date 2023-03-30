'use strict';
/* eslint-disable no-console */

const { terminal } = require('./terminal');
const { generateNumber } = require('./generateNumber');
const { calculateBullsCows } = require('./calculateBullsCows');
const { isValid } = require('./isValid');

const randomNumber = generateNumber();
const question = 'Please enter a number of 4 different digits ';

const checkAnswer = (answer) => {
  if (!isValid(answer)) {
    console.log('Invalid input');
    terminal.question(question, checkAnswer);

    return;
  }

  const { bulls, cows } = calculateBullsCows(randomNumber, answer);

  if (bulls === 4) {
    console.log(`Congratulations, you won!`);
    terminal.close();

    return;
  }

  console.log(`${bulls} bulls, ${cows} cows`);
  playGame();
};

const playGame = () => {
  terminal.question(question, checkAnswer);
};

playGame();
