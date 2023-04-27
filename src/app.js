/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./generateRandomNumber');
const { isValid } = require('./isInputValid');
const { terminal } = require('./terminal');
const { calculateBullsAndCows } = require('./calculateCowsAndBulls');

const generetadNum = generateRandomNumber();

const checkUserAnswer = (answer) => {
  if (!isValid) {
    console.log('Insert a number of 4 different digits');

    terminal.question(
      'Please write a number of 4 different digits',
      checkUserAnswer
    );

    return;
  }

  const { bulls, cows } = calculateBullsAndCows(generetadNum, answer);

  if (bulls === 4) {
    console.log(`Congratulations, you won!`);
    terminal.close();

    return;
  }
  console.log(`${bulls} bulls, ${cows} cows`);
  playGame();
};

const playGame = () => {
  terminal.question(
    'Please write a number of 4 different digits',
    checkUserAnswer
  );
};

playGame();
