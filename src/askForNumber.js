/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const classNames = require('classnames');

const { isUniqueNumber } = require('./isUniqueNumber');
const { constants } = require('./utils/constants');

const getMessageForUser = classNames;
const getPostfix = classNames;

const { MAX_LENGTH } = constants;

const terminal = readline.createInterface(process.stdin, process.stdout);

let attempts = 1;

function askForNumber(question, numberToGuess) {
  terminal.question(question, (userInput) => {
    let countOfBulls = 0;
    let countOfCows = 0;

    const isCorrectNumberLength = userInput.length !== MAX_LENGTH;
    const hasUniqueNumbers = !isUniqueNumber(userInput) && userInput.length === MAX_LENGTH;

    const INCORRECT_LENGTH_MESSAGE = `Current length is ${userInput.length}, you should input only ${MAX_LENGTH} digits: `;
    const NON_UNIQUE_NUMBER = 'Your number contains non-unique digits, enter only unique: ';

    const messageForUser = getMessageForUser({
      [INCORRECT_LENGTH_MESSAGE]: isCorrectNumberLength,
      [NON_UNIQUE_NUMBER]: hasUniqueNumbers,
    });

    const correctAttemptsPostfix = getPostfix({
      st: attempts === 1,
      nd: attempts === 2,
      rd: attempts === 3,
      th: attempts > 3,
    });

    if (!isUniqueNumber(userInput) || userInput.length !== MAX_LENGTH) {
      askForNumber(messageForUser, numberToGuess);

      return;
    }

    if (numberToGuess === userInput) {
      console.log(`You guessed right on the ${attempts}${correctAttemptsPostfix} try <3`);
      terminal.close();

      return;
    }

    attempts++;

    userInput.split('').forEach((digit, i) => {
      if (numberToGuess.indexOf(digit) === i) {
        countOfBulls++;
      } else if (numberToGuess.includes(digit)) {
        countOfCows++;
      }
    });

    console.log(
      `Almost done, the result is ${countOfBulls} bull and ${countOfCows} cows`
    );

    askForNumber(`Try again: `, numberToGuess);
  });
}

module.exports = {
  askForNumber,
};
