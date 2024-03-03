/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./generateRandomNumber');
const { checkIsValidUserInput } = require('./checkIsValidUserInput');
const { getBullsAndCows } = require('./getBullsAndCows');
const { askQuestion } = require('./askQuestion');

const bullsAndCowsGame = async() => {
  const { numberToGuessLength } = require('../constants');

  const numberToGuess = generateRandomNumber();

  let terminalQuestion = 'Guess the number\n';

  while (true) {
    const userInput = await askQuestion(terminalQuestion);

    console.clear();

    if (!checkIsValidUserInput(userInput)) {
      terminalQuestion = 'Invalid input try again\n';

      continue;
    }

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    if (bulls === numberToGuessLength) {
      break;
    }

    terminalQuestion = `bulls: ${bulls}, cows: ${cows}\n`;
  }

  console.log('Congratulations!!');
};

module.exports = {
  bullsAndCowsGame,
};
