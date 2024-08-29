/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const numberToGuess = generateRandomNumber();
const errorMessage = 'Please ender correct number! ';
const getQuestion = (prevAnswer) =>
  prevAnswer === errorMessage
    ? errorMessage
    : 'Try to guess 4-digit number again! ';

const getFinalMessage = (answer) => {
  let message;

  if (!checkIsValidUserInput(answer)) {
    message = errorMessage;
  } else {
    const { bulls, cows } = getBullsAndCows(+answer.trim(), numberToGuess);

    message = `Your results are: bulls: ${bulls}, cows: ${cows}`;
  }

  return message;
};

const logMessage = (message) =>
  message !== errorMessage ? console.log(message) : '';

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Try to guess 4-digit number `, (answer1) => {
  const message1 = getFinalMessage(answer1);

  logMessage(message1);

  if (message1 !== 'You won! Congratulations!') {
    rl.question(getQuestion(message1), (answer2) => {
      const message2 = getFinalMessage(answer2);

      logMessage(message2);

      if (message2 !== 'You won! Congratulations!') {
        rl.question(getQuestion(message2), (answer3) => {
          const message3 = getFinalMessage(answer3);

          if (message3 !== 'You won! Congratulations!') {
            console.log('You lost!');
          }
          rl.close();
        });
      }
    });
  }
});
