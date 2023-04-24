/* eslint-disable no-console */
'use strict';

const { gameTerminal } = require('./terminal');
const { getRandom } = require('./getRandom');
const { isValidNumber } = require('./isValidNumber');
const { isCorrectNumber } = require('./isCorrectNumber');
const { bullsAndCows } = require('./bullsAndCows');

const number = getRandom();

const phrases = {
  startMessage: 'Try to guess 4-digit number! ',
  notValid: 'Write exactly 4 digits ',
  question: 'Enter your number: ',
  isCorrect: 'Do not duplicate, your digits should be unique! ',
  wrong: 'Almost correct!',
  win: 'You guessed all the numbers! Winner!',
};

const startGame = (usersNumber) => {
  if (!isValidNumber(usersNumber)) {
    console.log(phrases.notValid);

    gameTerminal.question(phrases.question, startGame);

    return;
  }

  if (!isCorrectNumber(usersNumber)) {
    console.log(phrases.isCorrect);

    gameTerminal.question(phrases.question, startGame);

    return;
  }

  if (usersNumber === number) {
    console.log(phrases.win);

    gameTerminal.close();

    return;
  }
  console.log(`${phrases.wrong} ${bullsAndCows(number, usersNumber)}`);

  gameTerminal.question(phrases.startMessage, startGame);
};

module.exports = {
  phrases, startGame,
};
