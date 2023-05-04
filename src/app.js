/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./generateRandomNumber');
const { isValid } = require('./isInputValid');
const { terminal } = require('./terminal');
const { calculateBullsAndCows } = require('./calculateCowsAndBulls');
const messages = require('./messages.json');

const playGame = () => {
  terminal.question(
    messages.infoMessages.startGame,
    checkUserAnswer
  );
};

const generetadNum = generateRandomNumber();

const checkUserAnswer = (answer) => {
  if (!isValid(answer)) {
    console.log(messages.errorMessages.invalidInput);

    playGame();
  }

  const { bulls, cows } = calculateBullsAndCows(generetadNum, answer);

  if (bulls === 4) {
    console.log(messages.infoMessages.userWon);
    terminal.close();

    return;
  }
  console.log(`${bulls} bulls, ${cows} cows`);
  playGame();
};

playGame();
