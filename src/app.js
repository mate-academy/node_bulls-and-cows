/* eslint-disable no-console */
'use strict';

const { terminal } = require('./actions/terminal');
const { getRandomNum } = require('./actions/getRandomNum');
const { calculateBullsCows } = require('./actions/calculateBullsCows');
const numberOfDigits = 4;
const randomNum = getRandomNum();

const game = (userInput) => {
  if (String(userInput).length !== numberOfDigits) {
    console.log('Your input should be 4-digits number\n');
    runGame();

    return;
  }

  if (randomNum === +userInput) {
    console.log('Congratulations! You guessed number');

    terminal.close();

    return;
  }

  const counter = calculateBullsCows(randomNum, userInput);

  console.log(`${counter.bulls} bulls, ${counter.cows} cows`);

  terminal.question('You are so close, try again:)\n', game);
};

const runGame = () => {
  terminal.question('Guess the 4-digits number\n', game);
};

runGame();
